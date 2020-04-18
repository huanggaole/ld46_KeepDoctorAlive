import { GameScene } from "./GameScene";

export enum DialogType{
    info,
    TwoSelection
}

export class PopEffect{

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
    
    init(event){
        let type = event[0];
        let Chiinfo = event[1];
        let Enginfo = event[2];
        
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

    onClosed(): void {
        this.parentScene.mouseEnabled = true;
        super.onClosed();
    }

    onDisable(): void {
    }
}