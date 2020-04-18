import { GameScene } from "./GameScene";

export enum DialogType{
    info,
    TwoSelection
}

export class PopEffect{
    
    constructor
    (
        public cMoney = 0,
        public cProcess = 0,
        public cPass = 0,
        public cEnergy = 0,
        public cHealth = 0,
        public cConf = 0,
        public cSoc = 0,
        public cLove = 0,
        public cMot = 0,
        public cAdv = 0
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
    private parentScene:Laya.Scene;
    private dialogtext:Laya.Label;
    private choice1Btn:Laya.Button;
    private choice2Btn:Laya.Button;
    constructor(parent) { 
        super(); 
        this.parentScene = parent;
    }
    
    init(popevent:PopEvent){
        console.log(popevent);
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

        if(type == DialogType.info){
            this.retBtn.visible = true;
            this.choice1Btn.visible = false;
            this.choice2Btn.visible = false;
        }

        this.parentScene.mouseEnabled = false;
        this.retBtn.on(Laya.Event.CLICK,this,this.close);

        console.log(this.retBtn);
    }

    onOpened(): void{
        Laya.SoundManager.playSound("sound/button_click.wav");
    }

    onClosed(): void {
        this.parentScene.mouseEnabled = true;
        super.onClosed();
    }

    onDisable(): void {
    }
}