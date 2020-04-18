export class GameScene extends Laya.Scene{
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

    private btn_next:Laya.Button;

    private p_ifgoal1:Laya.Label;
    private p_ifgoal2:Laya.Label;
    private p_ifgoal3:Laya.Label;
    private p_ifgoal4:Laya.Label;

    private l_score:Laya.Label;
    private l_paper:Laya.Label;
    private l_fpp:Laya.Label;
    private p_paperpercent:Laya.ProgressBar;

    
    createChildren():void{
        super.createChildren();
        this.loadScene("GameScene");
    }

    onAwake(){
        this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
    }

    init(ifChinese:boolean){
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
        
        if(ifChinese){
            this.c_grade.skin = "comp/grade_cn.png"
            this.c_season.skin = "comp/season_cn.png"
            
        }else{

        }
        this.updateUI();
    }

    nextTurn(){
        this.season += 1;
        if(this.season == 5){
            this.grade++;
            this.season = 1;
        }
        if(this.grade == 9){
            // 游戏结束
            alert("游戏结束！");
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
        this.p_paperpercent.value = this.paperpercent;
        if(this.checkWin()){
            alert("游戏胜利！");
            this.endGame();
        }
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