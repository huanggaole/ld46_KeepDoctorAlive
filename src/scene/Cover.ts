import { GameScene } from "./GameScene";

export class Cover extends Laya.Scene{
    private btn_cn;
    private btn_en;
    private gamescene;

    createChildren():void{
        super.createChildren();
        this.loadScene("cover");
        this.gamescene = new GameScene();
    }

    onAwake(){
        this.btn_cn.on(Laya.Event.CLICK, this, this.onNewChineseGame);
        this.btn_en.on(Laya.Event.CLICK, this, this.onNewEnglishGame);
    }

    onNewChineseGame(){
        this.gamescene.init(true);
        Laya.stage.addChild(this.gamescene);
    }
    onNewEnglishGame(){
        this.gamescene.init(false);
        Laya.stage.addChild(this.gamescene);
    }
}