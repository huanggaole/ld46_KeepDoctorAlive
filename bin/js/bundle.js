(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 1080;
    GameConfig.height = 560;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "cover.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class GameScene extends Laya.Scene {
        createChildren() {
            super.createChildren();
            this.loadScene("GameScene");
        }
        onAwake() {
            this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
        }
        init(ifChinese) {
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
            if (ifChinese) {
                this.c_grade.skin = "comp/grade_cn.png";
                this.c_season.skin = "comp/season_cn.png";
            }
            this.updateUI();
        }
        nextTurn() {
            this.season += 1;
            if (this.season == 5) {
                this.grade++;
                this.season = 1;
            }
            if (this.grade == 9) {
                alert("游戏结束！");
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
            this.p_paperpercent.value = this.paperpercent;
            if (this.checkWin()) {
                alert("游戏胜利！");
                this.endGame();
            }
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
