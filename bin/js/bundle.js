(function () {
    'use strict';

    class Events {
        getInitEvent() {
            return [DialogType.info,
                "你好，我是一名直博生，本科毕业后直接来贵校读博。正常毕业年限是5年，最多可能会延期至8年毕业。\n右上方是我的毕业要求，右下方是我当前的状态，左下方是我当前的精力以及我可以做的事情。当精力不够时可以点击‘下一回合’按钮刷新。\n未来这五年就麻烦你了，多关注一下我的各项属性，有3项过低时，我就会有生命危险。能不能毕业无所谓，请务必让我活下来。",
                "Hello, I'm a bachelor-straight-to-doctorate student. After graduating from undergraduate, I went directly to your school to study doctorate. The normal graduation period is 5 years, and it may be postponed up to 8 years.\nThe upper right is my graduation requirements, the lower right is my current status, and the lower left is my current energy and what I can do. When the energy is not enough, you can click the ‘Next turn’ button to refresh.\nI'll trouble you in the next five years. Pay more attention to my attributes. If there are 3 items that are too low, I will be in danger. It doesn’t matter if I graduate or not, please keep me alive."];
        }
    }

    class GameScene extends Laya.Scene {
        createChildren() {
            super.createChildren();
            this.loadScene("GameScene");
            this.popdialog = new PopDialog(this);
            this.popdialog.loadScene("PopDialog");
            this.events = new Events();
        }
        onAwake() {
            this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
        }
        init(ifChinese) {
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
            if (ifChinese) {
                this.s_bg.loadImage("test/bg-cn.png");
                this.c_grade.skin = "comp/grade_cn.png";
                this.c_season.skin = "comp/season_cn.png";
                this.btn_next.label = "下一回合";
            }
            else {
                this.s_bg.loadImage("test/bg-en.png");
                this.c_grade.skin = "comp/grade_en.png";
                this.c_season.skin = "comp/season_en.png";
                this.btn_next.label = "Next turn";
            }
            this.updateUI();
            this.alert(this.events.getInitEvent());
        }
        nextTurn() {
            this.season += 1;
            if (this.season == 5) {
                this.grade++;
                this.season = 1;
            }
            if (this.grade == 9) {
                this.endGame();
            }
            this.updateUI();
        }
        updateUI() {
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
            if (this.checkWin()) {
                this.endGame();
            }
        }
        alert(event) {
            this.popdialog.init(event);
            this.popdialog.open();
        }
        checkWin() {
            if (this.score >= 6) {
                this.p_ifgoal1.visible = true;
            }
            if (this.paper >= 2) {
                this.p_ifgoal2.visible = true;
            }
            if (this.finalpaperpercent >= 100) {
                this.p_ifgoal3.visible = true;
            }
            if (this.ifPass) {
                this.p_ifgoal4.visible = this.ifPass;
            }
            if (this.p_ifgoal1.visible && this.p_ifgoal2.visible && this.p_ifgoal3.visible && this.p_ifgoal4.visible) {
                return true;
            }
            return false;
        }
        endGame() {
            Laya.stage.removeChild(this);
        }
    }

    var DialogType;
    (function (DialogType) {
        DialogType[DialogType["info"] = 0] = "info";
        DialogType[DialogType["TwoSelection"] = 1] = "TwoSelection";
    })(DialogType || (DialogType = {}));
    class PopDialog extends Laya.Dialog {
        constructor(parent) {
            super();
            this.parentScene = parent;
        }
        init(event) {
            let type = event[0];
            let Chiinfo = event[1];
            let Enginfo = event[2];
            if (GameScene.ifChinses) {
                this.dialogtext.fontSize = 24;
                this.dialogtext.text = Chiinfo;
            }
            else {
                this.dialogtext.fontSize = 18;
                this.dialogtext.text = Enginfo;
            }
            if (type == DialogType.info) {
                this.retBtn.visible = true;
                this.choice1Btn.visible = false;
                this.choice2Btn.visible = false;
            }
            this.parentScene.mouseEnabled = false;
            this.retBtn.on(Laya.Event.CLICK, this, this.close);
            console.log(this.retBtn);
        }
        onClosed() {
            this.parentScene.mouseEnabled = true;
            super.onClosed();
        }
        onDisable() {
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("PopDialog.ts", PopDialog);
        }
    }
    GameConfig.width = 1080;
    GameConfig.height = 560;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "cover.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Cover extends Laya.Scene {
        createChildren() {
            super.createChildren();
            this.loadScene("cover");
            this.gamescene = new GameScene();
        }
        onAwake() {
            this.btn_cn.on(Laya.Event.CLICK, this, this.onNewChineseGame);
            this.btn_en.on(Laya.Event.CLICK, this, this.onNewEnglishGame);
        }
        onNewChineseGame() {
            this.gamescene.init(true);
            Laya.stage.addChild(this.gamescene);
        }
        onNewEnglishGame() {
            this.gamescene.init(false);
            Laya.stage.addChild(this.gamescene);
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            let coverscene = new Cover();
            Laya.stage.addChild(coverscene);
        }
    }
    new Main();

}());
