import PopDialog from "./scene/PopDialog";

/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1080;
    static height:number=560;
    static scaleMode:string="showall";
    static screenMode:string=Laya.Stage.SCREEN_HORIZONTAL;
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="cover.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("PopDialog.ts",PopDialog);
    }
}
GameConfig.init();