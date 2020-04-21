import { GameScene } from "./GameScene";
import { Events } from "../script/Events";

export enum DialogType{
    info,
    TwoSelection
}

export class PopEffect{
    // specialNote 的标记 1. 是否转换为恋爱状态 2. 上课 3. 导师生气 4. 实习被导师指导 5. 分手 6.
    constructor
    (
        public cMoney = 0,
        public cProcess = 0,
        public cValue = 0,
        public cEnergy = 0,
        public cHealth = 0,
        public cConf = 0,
        public cSoc = 0,
        public cLove = 0,
        public cMot = 0,
        public cAdv = 0,
        public specialNote = 0
    ){}
}

export class PopEvent{
    public dialogType:DialogType;
    public Chiinfo:string;
    public Enginfo:string;
    public popeffect:PopEffect;
    public choice1:string;
    public choice2:string;
    public subEvent1:PopEvent;
    public subEvent2:PopEvent;
}

export default class PopDialog extends Laya.Dialog {
    private retBtn:Laya.Button;
    private parentScene:GameScene;
    private dialogtext:Laya.Label;
    private choice1Btn:Laya.Button;
    private choice2Btn:Laya.Button;
    private popevents:PopEvent[];
    constructor(parent) { 
        super(); 
        this.parentScene = parent;
    }
    
    

    init(_popevents:PopEvent[]){
        let popevent = _popevents.pop();
        this.popevents = _popevents;
        let type = popevent.dialogType;
        let Chiinfo = popevent.Chiinfo;
        let Enginfo = popevent.Enginfo;
        
        if(GameScene.ifChinses){
            this.dialogtext.fontSize = 24;
            this.dialogtext.text = Chiinfo;
        }else{
            this.dialogtext.fontSize = 18;            
            this.dialogtext.text = Enginfo;
        }

        if(popevent.popeffect != null){
            this.dialogtext.text += "\n\n" + Events.genEffectInfo(GameScene.ifChinses,popevent.popeffect);
        }
        
        if(type == DialogType.info){
            this.retBtn.visible = true;
            this.choice1Btn.visible = false;
            this.choice2Btn.visible = false;
        }
        
        this.parentScene.settleEffect(popevent.popeffect);
        this.parentScene.mouseEnabled = false;
        this.retBtn.on(Laya.Event.CLICK,this,this.close);
    }

    onOpened(): void{
        Laya.SoundManager.playSound("sound/button_click.wav");
    }

    onClosed(): void {
        this.parentScene.mouseEnabled = true;
        super.onClosed();
        if(this.popevents.length > 0){
            this.parentScene.alert(this.popevents);
        }
    }

    onDisable(): void {
    }
}