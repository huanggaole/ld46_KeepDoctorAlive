export class CardUI{
    public index:number;
    public button:Laya.Button;
    public static seletedIndex = -1;
    public static cardClicked = false;
    constructor(i){
        this.index = i;
    }
    public init(){
        CardUI.cardClicked = false;
        CardUI.seletedIndex = -1;
        this.updateUI();
        this.button.on(Laya.Event.CLICK,this,this.onClick);
    }

    public updateUI(){
        if(CardUI.seletedIndex == this.index){
            this.button.y = 356;
            this.button.zOrder = this.index + 100;        
        }else{
            this.button.y = 376;
            this.button.zOrder = this.index;
        }
    }

    public onClick(){
        CardUI.cardClicked = true;
        if((CardUI.seletedIndex - this.index)==0){
            CardUI.seletedIndex = -1;
        }else{
            CardUI.seletedIndex = this.index;
        }
    }
}