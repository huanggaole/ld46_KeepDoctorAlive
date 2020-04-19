import { Card } from "./CardManager";
import { GameScene } from "../scene/GameScene";
import { Events } from "./Events";

export class CardUI{
    public index:number;
    public button:Laya.Button;
    public static seletedIndex = -1;
    public static cardClicked = false;

    public card:Card;
    constructor(i){
        this.index = i;
    }
    public init(){
        CardUI.cardClicked = false;
        CardUI.seletedIndex = -1;
        this.updateUI();
        this.button.on(Laya.Event.CLICK,this,this.onClick);
    }

    public getcardinfo(){
        let ret = "";
        if(GameScene.ifChinses){
            ret = this.card.name_cn + "\n\n" + this.card.info_cn + "\n\n" + Events.genEffectInfo(GameScene.ifChinses,this.card.effect);
            ret += "\n\n"
            if(this.card.lim){
                ret += "* 本卡牌是一张限时牌。如果没被打出，此牌会在回合结束时自动丢弃。\n";
            }
            if(this.card.se != null){
                ret += "* 本卡无论被主动还是被动丢弃时均会有副作用，弃牌时的具体" + Events.genEffectInfo(GameScene.ifChinses,this.card.effect);
            }
        }else{
            ret = this.card.name_en + "\n\n" + this.card.info_en + "\n\n" + Events.genEffectInfo(GameScene.ifChinses,this.card.effect);
            ret += "\n\n"
            if(this.card.lim){
                ret += "* This card is a time limited card. If not played in this turn, it will be automatically discarded at the end of the turn.\n";
            }
            if(this.card.se != null){
                ret += "* When discarded the card discarded or actively, it has such " +  + Events.genEffectInfo(GameScene.ifChinses,this.card.effect);
            }
        }
        return ret;
    }

    public updateUI(){
        if(this.button == null){
            return;
        }
        if(CardUI.seletedIndex == this.index){
            this.button.y = 356;
            this.button.zOrder = this.index + 100;
        }else{
            this.button.y = 376;
            this.button.zOrder = this.index;
        }

        if(this.card == null){
            this.button.visible = false;
        }else{
            let name = "";
            if (GameScene.ifChinses){
                name = this.card.name_cn;
                name += "\n\n需求：\n";
                if(this.card.effect.cMoney < 0){
                    name += "金钱:" + Math.abs(this.card.effect.cMoney) + "\n";
                }
                if(this.card.effect.cEnergy < 0){
                    name += "精力:" + Math.abs(this.card.effect.cEnergy) + "\n";
                }
            }else{
                name = this.card.name_en;
                name += "\n\nNeeds:\n";
                if(this.card.effect.cMoney < 0){
                    name += "Money:" + Math.abs(this.card.effect.cMoney) + "\n";
                }
                if(this.card.effect.cEnergy < 0){
                    name += "Energy:" + Math.abs(this.card.effect.cEnergy) + "\n";
                }
            }
            name += "\n";
            if(this.card.lim){
                name += "lim.";
            }
            if(this.card.se != null){
                name += "se.";
            }
            this.button.label = name;
            this.button.visible = true;
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