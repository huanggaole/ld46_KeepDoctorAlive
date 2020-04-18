import{DialogType,PopEvent,PopEffect} from "../scene/PopDialog";
export class Events{
    /*
    checkEvents():[PopEvent]{
        let allEvents = [];

        return allEvents;
    }
    */
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
}