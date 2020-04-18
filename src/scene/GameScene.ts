import PopDialog from "./PopDialog";
import { Events } from "./Events";

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

    private l_score:Laya.Label;
    private l_paper:Laya.Label;
    private l_fpp:Laya.Label;
    private l_enegy:Laya.Label;
    private p_paperpercent:Laya.ProgressBar;

    private events:Events;
    createChildren():void{
        super.createChildren();
        this.loadScene("GameScene");
        this.popdialog = new PopDialog(this);
        this.popdialog.loadScene("PopDialog");
        this.events = new Events();
    }

    onAwake(){
        this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
    }

    init(ifChinese:boolean){
        GameScene.ifChinses = ifChinese;

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
        
        if(ifChinese){
            this.s_bg.loadImage("test/bg-cn.png");
            this.c_grade.skin = "comp/grade_cn.png"
            this.c_season.skin = "comp/season_cn.png"
            this.btn_next.label = "下一回合";
            
        }else{
            this.s_bg.loadImage("test/bg-en.png");
            this.c_grade.skin = "comp/grade_en.png"
            this.c_season.skin = "comp/season_en.png"
            this.btn_next.label = "Next turn";            
        }
        this.updateUI();
        this.alert(this.events.getInitEvent());
    }

    nextTurn(){
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
    }

    updateUI(){
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
        
        if(this.checkWin()){
            // this.alert();
            this.endGame();
        }
    }

    alert(event){
        // Laya.Dialog.open("PopDialog.scene",true, []);
        this.popdialog.init(event);
        this.popdialog.open();
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
}