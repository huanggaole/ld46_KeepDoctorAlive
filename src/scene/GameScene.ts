import PopDialog, { PopEvent, PopEffect } from "./PopDialog";
import { Events } from "../script/Events";
import { Paper } from "../script/Paper";
import { CardUI } from "../script/CardUI";
import { CardManager, Card } from "../script/CardManager";

export class GameScene extends Laya.Scene{
    public static ifChinses:boolean;

    private popdialog: PopDialog;

    private s_bg:Laya.Sprite;

    private grade:number;
    private season:number;
    private c_grade:Laya.FontClip;
    private c_season:Laya.FontClip;

    private money:number;
    private score:number;
    private paper:number;
    private paperpercent:number;
    private finalpaperpercent:number;
    private enegy:number;
    private ifPass:boolean;

    private health:number;
    private conf:number;
    private soc:number;
    private love:number;
    private mot:number;
    private adv:number;

    private btn_next:Laya.Button;
    private cardBtn1:Laya.Button;
    private cardBtn2:Laya.Button;
    private cardBtn3:Laya.Button;
    private cardBtn4:Laya.Button;
    private cardBtn5:Laya.Button;
    private cardBtn6:Laya.Button;
    private cardBtn7:Laya.Button;
    
    private cardUIs:any;

    private p_health:Laya.ProgressBar;
    private p_conf:Laya.ProgressBar;
    private p_soc:Laya.ProgressBar;
    private p_love:Laya.ProgressBar;
    private p_mot:Laya.ProgressBar;
    private p_adv:Laya.ProgressBar;

    private p_ifgoal1:Laya.Label;
    private p_ifgoal2:Laya.Label;
    private p_ifgoal3:Laya.Label;
    private p_ifgoal4:Laya.Label;

    private l_money:Laya.Label;
    private l_score:Laya.Label;
    private l_paper:Laya.Label;
    private l_fpp:Laya.Label;
    private l_enegy:Laya.Label;
    private p_paperpercent:Laya.ProgressBar;

    private events:Events;

    private currentPaper:Paper;
    private bestPaper:Paper;

    private cardinfo:Laya.Sprite;
    private btnDo:Laya.Button;
    private btnDiscard:Laya.Button;
    private cardTxt:Laya.Label;

    // 卡牌管理
    private cardmanager:CardManager;

    // 状态管理
    private ifinLove = false;
    private ifinDepress = false;
    private ifill = false;
    private l_status:Laya.Label;
    private l_cstatus:Laya.Label;

    createChildren():void{
        super.createChildren();
        this.loadScene("GameScene");
        this.popdialog = new PopDialog(this);
        this.popdialog.loadScene("PopDialog");
        this.events = new Events();
        this.cardmanager = new CardManager();
        this.cardUIs = [];
        for(let i=0; i<7; i++){
            let cardUI = new CardUI(i);
            this.cardUIs.push(cardUI);
        }
    }

    onAwake(){
        this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
        this.cardUIs[0].button = this.cardBtn1;
        this.cardUIs[1].button = this.cardBtn2;
        this.cardUIs[2].button = this.cardBtn3;
        this.cardUIs[3].button = this.cardBtn4;
        this.cardUIs[4].button = this.cardBtn5;
        this.cardUIs[5].button = this.cardBtn6;
        this.cardUIs[6].button = this.cardBtn7;
        for(let i=0; i<7; i++){
            this.cardUIs[i].init();
        }
        this.cardTxt.on(Laya.Event.CLICK, this, this.onClickCard);
        this.btnDo.on(Laya.Event.CLICK, this, ()=>{this.onDoCard(CardUI.seletedIndex)});
        this.btnDiscard.on(Laya.Event.CLICK, this, ()=>{this.onDiscard(CardUI.seletedIndex)});
        this.on(Laya.Event.CLICK, this, this.onClick);
    }

    onClickCard(){
        CardUI.cardClicked = true;
    }
    onClick(){
        if(!CardUI.cardClicked){
            CardUI.seletedIndex = -1;
        }
        
        if(CardUI.seletedIndex == -1){
            this.cardinfo.visible = false;
        }else{
            this.cardTxt.text = this.cardUIs[CardUI.seletedIndex].getcardinfo();
            this.cardinfo.visible = true;
        }

        for(let i=0; i<this.cardUIs.length; i++){
            this.cardUIs[i].updateUI();
        }

       CardUI.cardClicked = false;
    }

    onDestroyCard(index){
        Laya.SoundManager.playSound("sound/destroy.wav");
        for(let i = index; i < this.cardUIs.length - 1; i++){
            this.cardUIs[i].card = this.cardUIs[i + 1].card;
        }
        this.cardUIs[this.cardUIs.length - 1].card = null;
        CardUI.seletedIndex = -1;
        this.updateUI();
    }

    onDoCard(index){
        console.log(index);
        let effect = this.cardUIs[index].card.effect;
        let popevent = this.cardUIs[index].card.event;
        if(this.money + effect.cMoney < 0){
            this.alert(this.events.getNoMoney());
            return;
        }
        if(this.enegy + effect.cEnergy < 0){
            this.alert(this.events.getNoEnergy());
            return;
        }
        this.settleEffect(effect);
        if(popevent != null){
            this.alert([popevent]);
        }
        this.onDestroyCard(index);
    }

    onDiscard(index){
        
        let card = this.cardUIs[index].card as Card;
        if(card.se != null){
            this.settleEffect(card.se);
        }
        this.onDestroyCard(index);
    }

    init(ifChinese:boolean){
        GameScene.ifChinses = ifChinese;
        this.currentPaper = new Paper(0,0,0);
        this.bestPaper = new Paper(0,0,0);
        this.cardinfo.visible = false;

        this.grade = 1;
        this.season = 1;

        this.money = 0;
        this.enegy = 7;
        this.score = 0;
        this.paper = 0;
        this.finalpaperpercent = 0;
        this.paperpercent = 0;
        this.ifPass = false;
        this.p_ifgoal1.visible = false;
        this.p_ifgoal2.visible = false;
        this.p_ifgoal3.visible = false;
        this.p_ifgoal4.visible = false;
        this.health = 100;
        this.conf = 100;
        this.soc = 60;
        this.love = 60;
        this.mot = 60;
        this.adv = 60;

        this.ifinDepress = false;
        this.ifinLove = false;

        this.cardUIs[0].card = this.cardmanager.getCardById(0);
        this.cardUIs[1].card = this.cardmanager.getCardById(1);
        this.cardUIs[2].card = this.cardmanager.getCardById(2);
        this.cardUIs[3].card = this.cardmanager.getCardById(3);
        this.cardUIs[4].card = this.cardmanager.getCardById(0);
        this.cardUIs[5].card = this.cardmanager.getCardById(1);
        this.cardUIs[6].card = this.cardmanager.getCardById(2);

        if(ifChinese){
            this.s_bg.loadImage("test/bg-cn.png");
            this.c_grade.skin = "comp/grade_cn.png"
            this.c_season.skin = "comp/season_cn.png"
            this.btn_next.label = "下一回合";
            this.btnDo.label = "执行";
            this.btnDiscard.label = "弃牌";
            this.cardTxt.fontSize = 24;
        }else{
            this.s_bg.loadImage("test/bg-en.png");
            this.c_grade.skin = "comp/grade_en.png"
            this.c_season.skin = "comp/season_en.png"
            this.btn_next.label = "Next turn";    
            this.btnDo.label = "Do it";
            this.btnDiscard.label = "Discard";     
            this.cardTxt.fontSize = 18;               
        }
        this.updateUI();
        let events = this.events.getAllowance().concat(this.events.getInitEvent());
        this.alert(events);
    }

    nextTurn(){
        // 将临时的手牌进行丢弃
        for(let i = this.cardUIs.length - 1; i >= 0; i--){
            if(this.cardUIs[i].card!=null && this.cardUIs[i].card.lim){
                this.onDiscard(i);
            }
        }
        this.updateUI();
        if(this.cardUIs[4].card != null){
            this.alert(this.events.getTeachInfo1());
            return;
        }
        if(this.grade == 1 && this.season == 1){
            this.alert(this.events.getTeachInfo1());
        }
        this.season += 1;
        if(this.season == 5){
            this.grade++;
            this.season = 1;
        }
        if(this.grade == 9){
            // 游戏结束
            // this.alert();
            this.endGame();
        }
        this.updateUI();
        // 获得今天的事件
        let events = this.events.checkEvents(this.grade, this.season);
        if(this.grade < 6 && this.season == 1){
            events = events.concat(this.events.getAllowance());
        }
        if(this.health < 40){
            if(!this.ifill){
                this.ifill = true;
                events = events.concat(this.events.getill());
            }
        }else{
            if(this.ifill){
                this.ifill = false;
                events = events.concat(this.events.getcure());
            }
        }
        if(this.conf < 40){
            if(!this.ifinDepress){
                this.ifinDepress = true;
                events = events.concat(this.events.getDepress());
            }
        }else{
            if(this.ifinDepress){
                this.ifinDepress = false;
                events = events.concat(this.events.getRemovedDepress());
            }
        }
        if(events.length > 0){
            this.alert(events);
        }
        this.enegy = 7;

        this.updateUI();
        Laya.SoundManager.playSound("sound/hit.wav");
        this.getEffectforEachTurn();
    }

    updateUI(){
        this.l_money.text = this.money.toString();
        this.c_grade.value = this.grade.toString();
        this.c_season.value = this.season.toString();
        this.l_score.text = this.score.toString();
        this.l_paper.text = this.paper.toString();
        this.l_fpp.text = this.finalpaperpercent.toString();
        this.l_enegy.text = this.enegy.toString();
        this.p_paperpercent.value = this.paperpercent;
        this.p_health.value = this.health / 100;
        this.p_conf.value = this.conf / 100;
        this.p_soc.value = this.soc / 100;
        this.p_love.value = this.love / 100;
        this.p_mot.value = this.mot / 100;
        this.p_adv.value = this.adv / 100;

        if (this.cardUIs != null){
            for(let i=0; i<this.cardUIs.length; i++){
                this.cardUIs[i].updateUI();
            }
        }
        
        if(this.checkWin()){
            // this.alert();
            this.endGame();
        }
        this.updateStatusShow();
    }

    public alert(events:PopEvent[]){
        this.popdialog.init(events);
        this.popdialog.open();
    }

    getInLoveProb():number{
        let num = (this.health + this.conf - 100) / 2;
        return num > 0?num:0;
    }

    settleEffect(popeffect:PopEffect){
        if(popeffect == null){
            return;
        }

        this.money += popeffect.cMoney;
        this.currentPaper.process += popeffect.cProcess;
        this.currentPaper.value += popeffect.cValue;
        this.enegy += popeffect.cEnergy;
        this.health += popeffect.cHealth;
        this.conf += popeffect.cConf;
        this.soc += popeffect.cSoc;
        this.love += popeffect.cLove;
        this.mot += popeffect.cMot;
        this.adv += popeffect.cAdv;
        this.paperpercent = this.currentPaper.process;

        this.health = (this.health < 0?0:(this.health>100?100:this.health));
        this.conf = (this.conf < 0?0:(this.conf>100?100:this.conf));
        this.soc = (this.soc < 0?0:(this.soc>100?100:this.soc));
        this.love = (this.love < 0?0:(this.love>100?100:this.love));
        this.mot = (this.mot < 0?0:(this.mot>100?100:this.mot));
        this.adv = (this.adv < 0?0:(this.adv>100?100:this.adv));
        this.paperpercent = (this.paperpercent < 0?0:(this.paperpercent>100?100:this.paperpercent));

        // 特殊检查
        if(popeffect.specialNote == 1){
            let rnd = Math.random() * 100;
            let pro = this.getInLoveProb();
            if(rnd < pro){
                // 成功交到女朋友
                this.alert(this.events.getSuccessInLove());
                this.ifinLove = true;
            }else{
                // 未交到女朋友
                this.alert(this.events.getFailInLove());
            }
        }
        this.updateUI();
    }

    checkWin(){
        if(this.score >= 6){
            this.p_ifgoal1.visible = true;
        }
        if(this.paper >= 2){
            this.p_ifgoal2.visible = true;
        }
        if(this.finalpaperpercent >= 100){
            this.p_ifgoal3.visible = true;
        }
        if(this.ifPass){
            this.p_ifgoal4.visible = this.ifPass;
        }
        if(this.p_ifgoal1.visible && this.p_ifgoal2.visible && this.p_ifgoal3.visible && this.p_ifgoal4.visible){
            return true;
        }
        return false;
    }
    endGame(){
        Laya.stage.removeChild(this);
    }

    genEffectforStatus():PopEffect{
        let effect = new PopEffect(0,0,0,0,0,0,-10,-10,0,0);
        if(this.ifinLove){
            effect.cSoc += 15;
            effect.cLove += 15;
            effect.cEnergy -= 1;
        }
        if(this.ifinDepress){
            effect.cHealth -= 10;
            effect.cConf -= 10;
            effect.cMot -= 10;
            effect.cAdv -= 10;
        }
        if(this.ifill){
            effect.cEnergy -= 3;
        }
        return effect;
    }
    getEffectforEachTurn(){
        let effect = this.genEffectforStatus();
        this.settleEffect(effect);
    }
    updateStatusShow(){
        this.l_status.text = "";
        if(this.ifinLove){
            this.l_status.text += GameScene.ifChinses?"恋爱中":"In love";
        }
        if(this.ifinDepress){
            this.l_status.text += GameScene.ifChinses?"抑郁中":"In depression";
        }
        if(this.ifill){
            this.l_status.text += GameScene.ifChinses?"生病":"Get ill";
        }
        if(this.l_status.text.length == 0){
            this.l_status.text = "普通";
        }
        let effect = this.genEffectforStatus();
        if(GameScene.ifChinses){
            this.l_cstatus.text = "该状态每回合的" + Events.genEffectInfo(GameScene.ifChinses,effect);
        }else{
            this.l_cstatus.text = "status' " + Events.genEffectInfo(GameScene.ifChinses,effect) + " for each turn.";
        }
    }
}