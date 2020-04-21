import{DialogType,PopEvent,PopEffect} from "../scene/PopDialog";

export class Events{
    
    static genEffect(key:string,value:number):string{
        let ret = "";
        if(value > 0){
            ret = key + "+" + value.toString() + "; "
        }else if(value < 0){
            ret = key + value.toString() + "; "
        }
        return ret;
    }

    static genEffectInfo(ifChinses,popeffect):string{
        let ret = "";
        if(ifChinses){
            ret += "影响：";
            ret += Events.genEffect("精力",popeffect.cEnergy);
            ret += Events.genEffect("金钱",popeffect.cMoney);
            ret += Events.genEffect("论文进度",popeffect.cProcess);
            ret += Events.genEffect("健康",popeffect.cHealth);
            ret += Events.genEffect("自信",popeffect.cConf);
            ret += Events.genEffect("社交",popeffect.cSoc);
            ret += Events.genEffect("爱情",popeffect.cLove);
            ret += Events.genEffect("动机",popeffect.cMot);
            ret += Events.genEffect("导师关系",popeffect.cAdv);
        }else{
            ret += "Effect:";
            ret += Events.genEffect("Energy",popeffect.cEnergy);
            ret += Events.genEffect("Money",popeffect.cMoney);
            ret += Events.genEffect("Research Process",popeffect.cProcess);
            ret += Events.genEffect("Health",popeffect.cHealth);
            ret += Events.genEffect("Confidence",popeffect.cConf);
            ret += Events.genEffect("Social",popeffect.cSoc);
            ret += Events.genEffect("Love",popeffect.cLove);
            ret += Events.genEffect("Motivation",popeffect.cMot);
            ret += Events.genEffect("Advisor Favorability",popeffect.cAdv);
        }
        return ret
    }
    
    checkEvents(grade, season):any[]{
        let allEvents = [];
        if(grade == 1 && season == 3){
            allEvents = allEvents.concat(this.getTeachInfo2());
        }
        return allEvents;
    }
    
    getInitEvent(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "你好，我是一名直博生，本科毕业后直接来贵校读博。正常毕业年限是5年，最多可能会延期至8年毕业。\n右上方是我的毕业要求，右下方是我当前的状态，左下方是我当前的精力以及我可以做的事情。当精力不够时可以点击‘下一回合’按钮刷新。\n未来这五年就麻烦你了，多关注一下我的各项属性，有3项过低时，我就会有生命危险。能不能毕业无所谓，请务必让我活下来。",
        event.Enginfo = "Hello, I'm a bachelor-straight-to-doctorate student. After graduating from undergraduate, I went directly to your school to study doctorate. The normal graduation period is 5 years, and it may be postponed up to 8 years.\nThe upper right is my graduation requirements, the lower right is my current status, and the lower left is my current energy and what I can do. When the energy is not enough, you can click the ‘Next turn’ button to refresh.\nI'll trouble you in the next five years. Pay more attention to my attributes. If there are 3 items that are too low, I will be in danger. It doesn’t matter if I graduate or not, please keep me alive.";
        return [event];
    }
    getTeachInfo1(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "每个人的精力是有限的，在结束回合之前，需要把手头上的工作卡片丢弃至不超过4张。\n注意：\n1. 有的工作有时限要求，如果当前回合不做的话，回合结束时会自动丢弃。此类工作卡牌上会标有 lim.\n2. 有的工作被丢弃时有副作用，具体副作用可以点击卡片查看详情。此类工作卡牌上会标有 se.\n",
        event.Enginfo = "Everyone's energy is limited. Before the end of a turn, you need to discard the work cards on hand to no more than 4 cards.\nnote:\n1. Some work has time limit. If you don’t do it in the current turn, it will be automatically discarded when the turn ends. Such work cards will be marked with 'lim.'\n2. Some jobs have side effects when they are discarded. For specific side effects, you can click the card to view the details. Such work cards will be marked with 'se.'";
        return [event];
    }
    getTeachInfo2(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "你发现了吗？每一回合开始时，我都会将手牌补满。\n\n而具体会补哪些种类的手牌，视我的心情与状态而定。\n\n心情与状态正面，通常可以获得正面的手牌。尽量保持我的状态足够正面积极吧！";
        event.Enginfo = "Did you find out that at the beginning of each turn, I fill up my cards in hand?\n\nAnd what kinds of cards to fill depends on my emotions and status.\n\nPositive emotions and status usually can get positive cards. Try to keep my emotions alive!";
        return [event];
    }
    getAllowance(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "每个学年开始时，可以获得奖学金与津贴。\n\n这是本学年的奖学金与津贴——800元。\n\n注意：延期期间(博六-博八)是没有奖学金与津贴补助的。";
        event.Enginfo = "Scholarships and allowances are available at the beginning of each academic year. \n\nThis is the scholarship and allowance for this academic year : 800 yuan. \n\nNote: there is no scholarship or allowance during the delay period(6th-8th).";
        event.popeffect = new PopEffect(800);
        return [event];
    }
    getNoMoney(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "对不起，我的金钱不足，不能做这件事。";
        event.Enginfo = "Sorry, I don't have enough money to do it."; 
        return [event];
    }
    getNoEnergy(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "对不起，我的精力不足，不能做这件事。";
        event.Enginfo = "Sorry, I don't have enough Energy to do it."; 
        return [event];
    }
    getSuccessInLove(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我今天谈了一个对象。";
        event.Enginfo = "Hey, guess what? I find a lover today!"; 
        return [event];
    }
    getFailInLove(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我今天玩得很尽兴，如果能交到女朋友就更好了！";
        event.Enginfo = "I have a good time today. It would be better if I could find a lover."; 
        return [event];
    }

    getill(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我生病了。";
        event.Enginfo = "I fill sick.";
        return [event];
    }
    getcure(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我恢复了健康。";
        event.Enginfo = "I'm cured.";
        return [event];
    }
    getDepress(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我抑郁了。";
        event.Enginfo = "I'm depressed.";
        return [event];
    }
    getOneScore(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我通过上课获得了1个学分。";
        event.Enginfo = "I get 1 credit by taking the class.";
        return [event];
    }
    getRejectAdv(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "你拒绝了导师的要求，这令他很生气。";
        event.Enginfo = "My refused the supervisor's request, which made him angry.";
        return [event];
    }
    getInternship(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "我外出实习的事情让导师知道了，这令他很生气。";
        event.Enginfo = "My supervisor has known my internship. He got angry.";
        return [event];
    }
    getBreakUp(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "女朋友打电话来说她很失望，我们分手了。";
        event.Enginfo = "My girlfriend called to say she was disappointed. We broke up.";
        return [event];
    }
    getRemovedDepress(): [PopEvent]{
        let event = new PopEvent();
        event.dialogType = DialogType.info;
        event.Chiinfo = "";
        event.Enginfo = "";
        event.Chiinfo = "我不再抑郁了。";
        event.Enginfo = "I'm not depressed anymore."; 
        return [event];
    }
}