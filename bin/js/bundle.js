(function () {
    'use strict';

    class Events {
        static genEffect(key, value) {
            let ret = "";
            if (value > 0) {
                ret = key + "+" + value.toString() + "; ";
            }
            else if (value < 0) {
                ret = key + value.toString() + "; ";
            }
            return ret;
        }
        static genEffectInfo(ifChinses, popeffect) {
            let ret = "";
            if (ifChinses) {
                ret += "影响：";
                ret += Events.genEffect("精力", popeffect.cEnergy);
                ret += Events.genEffect("金钱", popeffect.cMoney);
                ret += Events.genEffect("论文进度", popeffect.cProcess);
                ret += Events.genEffect("健康", popeffect.cHealth);
                ret += Events.genEffect("自信", popeffect.cConf);
                ret += Events.genEffect("社交", popeffect.cSoc);
                ret += Events.genEffect("爱情", popeffect.cLove);
                ret += Events.genEffect("动机", popeffect.cMot);
                ret += Events.genEffect("导师关系", popeffect.cAdv);
            }
            else {
                ret += "Effect:";
                ret += Events.genEffect("Energy", popeffect.cEnergy);
                ret += Events.genEffect("Money", popeffect.cMoney);
                ret += Events.genEffect("Research Process", popeffect.cProcess);
                ret += Events.genEffect("Health", popeffect.cHealth);
                ret += Events.genEffect("Confidence", popeffect.cConf);
                ret += Events.genEffect("Social", popeffect.cSoc);
                ret += Events.genEffect("Love", popeffect.cLove);
                ret += Events.genEffect("Motivation", popeffect.cMot);
                ret += Events.genEffect("Advisor Favorability", popeffect.cAdv);
            }
            return ret;
        }
        checkEvents(grade, season) {
            let allEvents = [];
            if (grade == 1 && season == 3) {
                allEvents = allEvents.concat(this.getTeachInfo2());
            }
            return allEvents;
        }
        getInitEvent() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "你好，我是一名直博生，本科毕业后直接来贵校读博。正常毕业年限是5年，最多可能会延期至8年毕业。\n右上方是我的毕业要求，右下方是我当前的状态，左下方是我当前的精力以及我可以做的事情。当精力不够时可以点击‘下一回合’按钮刷新。\n未来这五年就麻烦你了，多关注一下我的各项属性，有3项过低时，我就会有生命危险。能不能毕业无所谓，请务必让我活下来。",
                event.Enginfo = "Hello, I'm a bachelor-straight-to-doctorate student. After graduating from undergraduate, I went directly to your school to study doctorate. The normal graduation period is 5 years, and it may be postponed up to 8 years.\nThe upper right is my graduation requirements, the lower right is my current status, and the lower left is my current energy and what I can do. When the energy is not enough, you can click the ‘Next turn’ button to refresh.\nI'll trouble you in the next five years. Pay more attention to my attributes. If there are 3 items that are too low, I will be in danger. It doesn’t matter if I graduate or not, please keep me alive.";
            return [event];
        }
        getTeachInfo1() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "每个人的精力是有限的，在结束回合之前，需要把手头上的工作卡片丢弃至不超过4张。\n注意：\n1. 有的工作有时限要求，如果当前回合不做的话，回合结束时会自动丢弃。此类工作卡牌上会标有 lim.\n2. 有的工作被丢弃时有副作用，具体副作用可以点击卡片查看详情。此类工作卡牌上会标有 se.\n",
                event.Enginfo = "Everyone's energy is limited. Before the end of a turn, you need to discard the work cards on hand to no more than 4 cards.\nnote:\n1. Some work has time limit. If you don’t do it in the current turn, it will be automatically discarded when the turn ends. Such work cards will be marked with 'lim.'\n2. Some jobs have side effects when they are discarded. For specific side effects, you can click the card to view the details. Such work cards will be marked with 'se.'";
            return [event];
        }
        getTeachInfo2() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "你发现了吗？每一回合开始时，我都会将手牌补满。\n\n而具体会补哪些种类的手牌，视我的心情与状态而定。\n\n心情与状态正面，通常可以获得正面的手牌。尽量保持我的状态足够正面积极吧！";
            event.Enginfo = "Did you find out that at the beginning of each turn, I fill up my cards in hand?\n\nAnd what kinds of cards to fill depends on my emotions and status.\n\nPositive emotions and status usually can get positive cards. Try to keep my emotions alive!";
            return [event];
        }
        getAllowance() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "每个学年开始时，可以获得奖学金与津贴。\n\n这是本学年的奖学金与津贴——800元。\n\n注意：延期期间(博六-博八)是没有奖学金与津贴补助的。";
            event.Enginfo = "Scholarships and allowances are available at the beginning of each academic year. \n\nThis is the scholarship and allowance for this academic year : 800 yuan. \n\nNote: there is no scholarship or allowance during the delay period(6th-8th).";
            event.popeffect = new PopEffect(800);
            return [event];
        }
        getNoMoney() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "对不起，我的金钱不足，不能做这件事。";
            event.Enginfo = "Sorry, I don't have enough money to do it.";
            return [event];
        }
        getNoEnergy() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "对不起，我的精力不足，不能做这件事。";
            event.Enginfo = "Sorry, I don't have enough Energy to do it.";
            return [event];
        }
        getSuccessInLove() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我今天谈了一个对象。";
            event.Enginfo = "Hey, guess what? I find a lover today!";
            return [event];
        }
        getFailInLove() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我今天玩得很尽兴，如果能交到女朋友就更好了！";
            event.Enginfo = "I have a good time today. It would be better if I could find a lover.";
            return [event];
        }
        getill() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我生病了。";
            event.Enginfo = "I fill sick.";
            return [event];
        }
        getcure() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我恢复了健康。";
            event.Enginfo = "I'm cured.";
            return [event];
        }
        getDepress() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我抑郁了。";
            event.Enginfo = "I'm depressed.";
            return [event];
        }
        getOneScore() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我通过上课获得了1个学分。";
            event.Enginfo = "I get 1 credit by taking the class.";
            return [event];
        }
        getRejectAdv() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "你拒绝了导师的要求，这令他很生气。";
            event.Enginfo = "My refused the supervisor's request, which made him angry.";
            return [event];
        }
        getInternship() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "我外出实习的事情让导师知道了，这令他很生气。";
            event.Enginfo = "My supervisor has known my internship. He got angry.";
            return [event];
        }
        getBreakUp() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "女朋友打电话来说她很失望，我们分手了。";
            event.Enginfo = "My girlfriend called to say she was disappointed. We broke up.";
            return [event];
        }
        getRemovedDepress() {
            let event = new PopEvent();
            event.dialogType = DialogType.info;
            event.Chiinfo = "";
            event.Enginfo = "";
            event.Chiinfo = "我不再抑郁了。";
            event.Enginfo = "I'm not depressed anymore.";
            return [event];
        }
    }

    class Paper {
        constructor(process, value, versionNum) {
            this.process = process;
            this.value = value;
            this.versionNum = versionNum;
        }
    }

    class CardUI {
        constructor(i) {
            this.index = i;
        }
        init() {
            CardUI.cardClicked = false;
            CardUI.seletedIndex = -1;
            this.updateUI();
            this.button.on(Laya.Event.CLICK, this, this.onClick);
        }
        getcardinfo() {
            let ret = "";
            if (GameScene.ifChinses) {
                ret = this.card.name_cn + "\n\n" + this.card.info_cn + "\n\n" + Events.genEffectInfo(GameScene.ifChinses, this.card.effect);
                ret += "\n\n";
                if (this.card.lim) {
                    ret += "* 限时牌：回合结束时自动丢弃。\n";
                }
                if (this.card.se != null) {
                    ret += "* 弃牌" + Events.genEffectInfo(GameScene.ifChinses, this.card.se);
                    if (this.card.se != null && this.card.se.specialNote == 5) {
                        ret += "有20%的几率分手。";
                    }
                }
            }
            else {
                ret = this.card.name_en + "\n\n" + this.card.info_en + "\n\n" + Events.genEffectInfo(GameScene.ifChinses, this.card.effect);
                ret += "\n\n";
                if (this.card.lim) {
                    ret += "* Limited card: this card will be automatically discarded at the end of the turn.\n";
                }
                if (this.card.se != null) {
                    ret += "* When discarded, this card has such " + +Events.genEffectInfo(GameScene.ifChinses, this.card.se);
                    if (this.card.se != null && this.card.se.specialNote == 5) {
                        ret += "有20%的几率分手。";
                    }
                }
            }
            return ret;
        }
        updateUI() {
            if (this.button == null) {
                return;
            }
            if (CardUI.seletedIndex == this.index) {
                this.button.y = 356;
                this.button.zOrder = this.index + 100;
            }
            else {
                this.button.y = 376;
                this.button.zOrder = this.index;
            }
            if (this.card == null) {
                this.button.visible = false;
            }
            else {
                let name = "";
                if (GameScene.ifChinses) {
                    name = this.card.name_cn;
                    name += "\n\n需求：\n";
                    if (this.card.effect.cMoney < 0) {
                        name += "金钱:" + Math.abs(this.card.effect.cMoney) + "\n";
                    }
                    if (this.card.effect.cEnergy < 0) {
                        name += "精力:" + Math.abs(this.card.effect.cEnergy) + "\n";
                    }
                }
                else {
                    name = this.card.name_en;
                    name += "\n\nNeeds:\n";
                    if (this.card.effect.cMoney < 0) {
                        name += "Money:" + Math.abs(this.card.effect.cMoney) + "\n";
                    }
                    if (this.card.effect.cEnergy < 0) {
                        name += "Energy:" + Math.abs(this.card.effect.cEnergy) + "\n";
                    }
                }
                name += "\n";
                if (this.card.lim) {
                    name += "lim.";
                }
                if (this.card.se != null) {
                    name += "se.";
                }
                this.button.label = name;
                this.button.visible = true;
            }
        }
        onClick() {
            CardUI.cardClicked = true;
            if ((CardUI.seletedIndex - this.index) == 0) {
                CardUI.seletedIndex = -1;
            }
            else {
                CardUI.seletedIndex = this.index;
            }
        }
    }
    CardUI.seletedIndex = -1;
    CardUI.cardClicked = false;

    class Card {
        constructor(_name_cn, _name_en, _info_cn, _info_en, _effect, _event = null, _lim = false, _se = null) {
            this.name_cn = _name_cn;
            this.name_en = _name_en;
            this.info_cn = _info_cn;
            this.info_en = _info_en;
            this.effect = _effect;
            this.event = _event;
            this.lim = _lim;
            this.se = _se;
        }
    }
    class CardManager {
        constructor() {
            this.cards = [];
            this.cardspool = [];
            let info_cn = "与老乡们在一起聚会。";
            let info_en = "Have party with other freshmen.";
            let effect = new PopEffect(0, 0, 0, -2, 0, 0, 20, 0, 0, 0);
            let se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            this.cards.push(new Card("新生老乡会", "Freshmen\nParty", info_cn, info_en, effect, null, true));
            info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
            info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
            effect = new PopEffect(0, 0, 0, -2, 0, 0, 10, 0, 0, 0, 1);
            this.cards.push(new Card("新生联谊会", "Sorority\nParty", info_cn, info_en, effect, null, true));
            info_cn = "研究生部针对新生的科研动员大会。";
            info_en = "Postgraduate Department's scientific research mobilization meeting for freshmen.";
            effect = new PopEffect(0, 0, 0, -2, 0, 0, 0, 0, 20, 0);
            this.cards.push(new Card("新生动员会", "Mobilization\nMeeting", info_cn, info_en, effect, null, true));
            info_cn = "去导师的办公室与导师好好唠唠家常。";
            info_en = "Go to the supervisor's office and chat with him.";
            effect = new PopEffect(0, 0, 0, -2, 0, 0, 0, 0, 0, 20);
            this.cards.push(new Card("导师洽谈会", "Supervisor Talks", info_cn, info_en, effect, null, true));
            info_cn = "与同实验室的是兄弟姐妹一起聚餐。";
            info_en = "Have dinner together with colleagues studied under the same professor.";
            effect = new PopEffect(-20, 0, 0, -1, 0, 0, 20, 0, 0, 0);
            this.cards.push(new Card("实验室聚餐", "Lab Diner", info_cn, info_en, effect, null));
            info_cn = "与以前的老同学老朋友一起聚餐。";
            info_en = "Have dinner with friends who have worked.";
            effect = new PopEffect(-50, 0, 0, -1, 0, 0, 50, 0, 0, 0);
            this.cards.push(new Card("老同学聚餐", "Friends\nDiner", info_cn, info_en, effect, null));
            info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
            info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
            effect = new PopEffect(-50, 0, 0, -2, 10, 10, 10, 20, 0, 0, 1);
            this.cards.push(new Card("参加联谊会", "Sorority\nParty", info_cn, info_en, effect, null));
            info_cn = "为性苦闷的你提供无微不至的关爱（有偿的）。";
            info_en = "Provide meticulous care (paid) for you who are suffering from sexual distress.";
            effect = new PopEffect(-150, 0, 0, -2, 20, 20, 20, 100, 0, 0);
            this.cards.push(new Card("高端会所", "High-end\nmen's club", info_cn, info_en, effect, null));
            info_cn = "为性苦闷的你提供方便、快捷的自助服务（免费的）。";
            info_en = "Provide convenient and quick self-service (free) for you who are suffering from sexual distress.";
            effect = new PopEffect(0, 0, 0, -2, -10, -10, -10, 40, 0, 0);
            this.cards.push(new Card("Love Hub", "Love Hub", info_cn, info_en, effect, null));
            info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
            info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
            effect = new PopEffect(0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1);
            this.cards.push(new Card("交友软件", "WeLove", info_cn, info_en, effect, null));
            info_cn = "宅在寝室玩游戏，性价比最高的休闲方式。";
            info_en = "Play games in the dorm, the most cost-effective way of leisure.";
            effect = new PopEffect(0, 0, 0, -2, -10, 40, -10, 0, -10, 0);
            this.cards.push(new Card("电子游戏", "Play Games", info_cn, info_en, effect, null));
            info_cn = "世界这么大，我想去看看。";
            info_en = "I'll be riding shotgun underneath the hot sun, feeling like I'm someone.";
            effect = new PopEffect(-150, 0, 0, -3, 40, 40, 40, 0, 40, 0);
            this.cards.push(new Card("外出旅游", "Traveling", info_cn, info_en, effect, null));
            info_cn = "参加兴趣培训班，收获志同道合的朋友。";
            info_en = "Take part in the interest training class, and gain like-minded friends.";
            effect = new PopEffect(-50, 0, 0, -2, 0, 30, 30, 0, 0, 0);
            this.cards.push(new Card("培养兴趣", "Develop\nInterest", info_cn, info_en, effect, null));
            info_cn = "常回家看看回家看看";
            info_en = "Country roads, take me home, to the place I belong.";
            effect = new PopEffect(-10, 0, 0, -3, 30, 0, 10, 0, 0, 0);
            this.cards.push(new Card("回家探亲", "Go home\non holiday", info_cn, info_en, effect, null));
            info_cn = "在操场上用免费的公共设施锻炼身体。";
            info_en = "Exercise in the playground with free public facilities.";
            effect = new PopEffect(0, 0, 0, -1, 20, 0, 0, 0, 0, 0);
            this.cards.push(new Card("锻炼身体", "Take Sports", info_cn, info_en, effect, null));
            info_cn = "办理健身卡，在专业的健身教练指导下锻炼身体。";
            info_en = "Go to the gym and exercise under the guidance of a professional fitness coach.";
            effect = new PopEffect(-50, 0, 0, -1, 50, 0, 10, 0, 0, 0);
            this.cards.push(new Card("去健身房", "Go to\nthe Gym", info_cn, info_en, effect, null));
            info_cn = "去听学校的讲座，通常都会请来成功不可复制的成功人士来讲他们的成功心得。";
            info_en = "Listen to the successful people to tell you their success experience which can't be copied successfully.";
            effect = new PopEffect(0, 0, 0, -2, 0, 0, 0, 0, 30, 0);
            this.cards.push(new Card("听讲座", "Go to\nLectures", info_cn, info_en, effect, null));
            info_cn = "用自己舒服的频率进行研究与实验。完全靠兴趣与内因驱动的科研。";
            info_en = "Research and experiment with your own comfortable frequency. Research driven by interest and internal factors.";
            effect = new PopEffect(0, 2, 2, -1, -2, 0, -2, -2, 2, -2);
            this.cards.push(new Card("快乐科研", "Research\nHappily", info_cn, info_en, effect, null));
            info_cn = "你的导师认为你整天吊儿郎当的。但你只是不希望让自己太累。";
            info_en = "Your Supervisor may thinks you hang around all day. The truth is you just don't want to be too tired.";
            effect = new PopEffect(0, 5, 4, -2, -5, 0, -5, -5, 3, -3);
            this.cards.push(new Card("轻松科研", "Research\nRelax", info_cn, info_en, effect, null));
            info_cn = "每天打卡上班8小时每周工作5天——还远低于导师的预期。每周有效工作时间20个小时——跟其他大部分人一样。";
            info_en = "Stay in lab 8 hours a day and work for 5 days a week, which is far less than the supervisor's expectation. The effective working time is 20 hours a week, just like most other people.";
            effect = new PopEffect(0, 10, 7, -3, -10, 0, -10, -10, 5, -4);
            this.cards.push(new Card("基础科研", "Normal\nResearch", info_cn, info_en, effect, null));
            info_cn = "尽管你已经比你的导师当年读博的时候更加用功了，但他还是指控你不够努力。";
            info_en = "Although you've worked harder than your supervisor did when he was a Ph.D. candidate, he still accuses you of not doing your best.";
            effect = new PopEffect(0, 20, 13, -5, -20, 0, -20, -20, 5, 0);
            this.cards.push(new Card("辛勤科研", "Research\nHard", info_cn, info_en, effect, null));
            info_cn = "从醒来到就寝，除了解决生理需求你都在科研。长此以往有猝死的风险。";
            info_en = "From waking up to going to bed, you are doing research in addition to solving your physiological needs. There is a risk of sudden death in the long run.";
            effect = new PopEffect(0, 30, 15, -7, -30, 0, -30, -30, 5, 5);
            this.cards.push(new Card("残酷科研", "Research\nCruelly", info_cn, info_en, effect, null));
            info_cn = "如果有缘，知识会自己进到我脑子里。论文也会不知不觉中写完。";
            info_en = "if there is a chance, knowledge will come into my mind. The paper will be finished unconsciously.";
            effect = new PopEffect(0, 4, 2, -1, 0, 0, -2, -2, 2, -2);
            this.cards.push(new Card("佛系科研", "Research\nHappily", info_cn, info_en, effect, null));
            info_cn = "也许是这样的，虽然我不知道为什么，但我只是想毕业，可行就行了。";
            info_en = "Maybe so. I don't know why, but I just want to make up a paper that looks like a literature. It's OK.";
            effect = new PopEffect(0, 8, 3, -2, -2, 0, -2, -2, 2, -3);
            this.cards.push(new Card("民间科研", "Research\nCrankly", info_cn, info_en, effect, null));
            info_cn = "论文的这一部分是我求香拜佛后通过冥想写出来的，充满了玄学的魅力。如果你不能复现它，那说明你不够虔诚。";
            info_en = "The papers written through meditation are full of the charm of metaphysics. If you can't reproduce it, you're not pious enough.";
            effect = new PopEffect(0, 16, 6, -3, -3, 0, -3, -3, 2, -4);
            this.cards.push(new Card("玄学科研", "Mystical\nResearch", info_cn, info_en, effect, null));
            info_cn = "粗枝大叶的调研，迎合导师的主意，随意的实验，没有说服力的结论...别怕，使用魔法优化一下，还是一篇看起来很厉害的论文！";
            info_en = "Catering to the supervisor's idea, careless experiments, and unexpected results... Take it easy! Wrap it up with magic, it's still a realistic-looking paper.";
            effect = new PopEffect(0, 30, 10, -5, -5, 0, -5, -5, 2, 0);
            this.cards.push(new Card("魔法科研", "Magical\nResearch", info_cn, info_en, effect, null));
            info_cn = "导师希望我能帮他跑跑腿办点事。";
            info_en = "My advisor ask me to do some legwork for him.";
            effect = new PopEffect(0, 0, 0, -1, 0, 0, 0, 0, 0, 5);
            se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 3);
            this.cards.push(new Card("跑腿办事", "Legwaork", info_cn, info_en, effect, null, true, se));
            console.log(this.cards);
            info_cn = "科研遇到了瓶颈，也许可以去向导师寻求一些指导？";
            info_en = "There is a bottleneck in research. Maybe I can go to my supervisor for some guidance?";
            effect = new PopEffect(0, 2, 2, -2, 0, 0, 10, 0, 0, 0);
            this.cards.push(new Card("寻求指导", "Ask for\nGuidance", info_cn, info_en, effect, null));
            info_cn = "去导师的办公室与导师好好聊聊进度。";
            info_en = "Go to the supervisor's office and chat with him.";
            effect = new PopEffect(0, 3, 3, -3, 0, 0, 10, 0, 0, 0);
            this.cards.push(new Card("导师洽谈", "Supervisor\nTalks", info_cn, info_en, effect, null, true));
            info_cn = "导师今天突然很客气，看来是有横向项目需要人手。";
            info_en = "The supervisor was very polite today. It seems that there are horizontal projects that need manpower.";
            effect = new PopEffect(0, 0, 0, -5, -10, 20, 0, 0, 10, 20);
            se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, -30, 3);
            this.cards.push(new Card("横向项目", "Horizontal\nProject", info_cn, info_en, effect, null, true, se));
            info_cn = "吃人的嘴短，拿人的手软。";
            info_en = "Gifts blind the eyes.";
            effect = new PopEffect(-200, 0, 0, -1, 0, 0, 0, 0, 0, 20);
            this.cards.push(new Card("给导师送礼", "Bribe the\nSupervisor", info_cn, info_en, effect, null, true));
            info_cn = "我觉得，现在的导师不适合我。我想换导师。";
            info_en = "I don't think the current supervisor is suitable for me. I want to change my supervisor.";
            effect = new PopEffect(0, 0, 0, -2, 0, 0, 0, 0, 0, -20);
            this.cards.push(new Card("换导师", "Change the\nSupervisor", info_cn, info_en, effect, null));
            info_cn = "只注重分数的研究生不是一个好研究生，但是学分不够可毕不了业。通过上课来获得一个学分。";
            info_en = "A graduate student who only pays attention to scores is not a good graduate student, but he can't get his ph.D. degree if his credits are not enough. Get credits by taking classes.";
            effect = new PopEffect(0, 0, 0, -5, 0, 0, 0, 0, 30, 0, 2);
            this.cards.push(new Card("上课", "Take a\nClass", info_cn, info_en, effect, null));
            info_cn = "实验室一个月发给我的补助，我到外面企业里实习一两天就挣到了。但是我的导师并不乐意我去实习。";
            info_en = "The allowance that the laboratory gives me, I can earn in one or two days in an enterprise. However, my supervisor is against me for an internship.";
            effect = new PopEffect(1000, 0, 0, -3, 0, 0, 0, 0, 0, -50, 4);
            this.cards.push(new Card("外出实习", "Go for an\ninternship", info_cn, info_en, effect, null));
            info_cn = "我需要休息。";
            info_en = "I need some rest.";
            effect = new PopEffect(0, 0, 0, -1, 10, 0, 0, 0, 0, 0);
            this.cards.push(new Card("卧床休息", "Have a\nrest", info_cn, info_en, effect, null));
            info_cn = "我需要就医。";
            info_en = "I need go to hospital.";
            effect = new PopEffect(-50, 0, 0, -1, 50, 0, 0, 0, 0, 0);
            this.cards.push(new Card("医院就医", "Go to\nHospital", info_cn, info_en, effect, null));
            info_cn = "我最近焦虑、失眠，难过。每天早上醒来都不想工作。我需要心理咨询。但我负担不起一个职业的心理咨询师。也许我可以去找学校里的心理老师咨询？";
            info_en = "I am anxious, insomnia and sad recently. I don't want to work every morning when I wake up. I need counseling. But I can't afford a professional psychologist. Maybe I can go to the school psychological teacher for consultation?";
            effect = new PopEffect(0, 0, 0, -1, 20, 20, 0, 0, 0, 0);
            this.cards.push(new Card("心理咨询", "psychological\ncounseling", info_cn, info_en, effect, null));
            info_cn = "一起逛街,一起吃饭,一起看电影，然后，一起……";
            info_en = "Shopping together, eating together, watching movies together, and then...";
            effect = new PopEffect(-50, 0, 0, -1, 10, 10, 10, 10, 10, 0);
            se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5);
            this.cards.push(new Card("恋人约会", "Dating\nwith Lover", info_cn, info_en, effect, null, false, se));
            info_cn = "我在乎的不是目的地,而是有你会陪我一起看沿途的风景。";
            info_en = "What I care about is not the destination, but the scenery along the way with you.";
            effect = new PopEffect(-180, 0, 0, -3, 40, 40, 40, 40, 40, 0);
            se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5);
            this.cards.push(new Card("恋人旅行", "Traveling\nwith Lover", info_cn, info_en, effect, null, false, se));
        }
        genCardPool(_score, _ifinlove, _ifindepress, _health, _conf, _soc, _love, _mot, _adv) {
            this.cardspool = [];
            this.cardspool.push(4);
            this.cardspool.push(5);
            this.cardspool.push(6);
            this.cardspool.push(7);
            this.cardspool.push(10);
            this.cardspool.push(11);
            this.cardspool.push(12);
            this.cardspool.push(13);
            this.cardspool.push(14);
            this.cardspool.push(15);
            this.cardspool.push(16);
            this.cardspool.push(16);
            if (_mot >= 60) {
                this.cardspool.push(17);
                this.cardspool.push(18);
                this.cardspool.push(19);
                this.cardspool.push(20);
                this.cardspool.push(21);
            }
            else {
                this.cardspool.push(22);
                this.cardspool.push(23);
                this.cardspool.push(24);
                this.cardspool.push(25);
                this.cardspool.push(10);
            }
            if (_adv > 40) {
                this.cardspool.push(26);
                this.cardspool.push(26);
                this.cardspool.push(27);
                this.cardspool.push(28);
                this.cardspool.push(29);
            }
            else {
                this.cardspool.push(26);
                this.cardspool.push(26);
                this.cardspool.push(30);
                this.cardspool.push(31);
                this.cardspool.push(29);
            }
            if (_score < 6) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 3; i++) {
                    this.cardspool.push(32);
                }
            }
            if (_health <= 40) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 4; i++) {
                    this.cardspool.push(34);
                    this.cardspool.push(35);
                }
            }
            if (_conf <= 40) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 4; i++) {
                    this.cardspool.push(36);
                    this.cardspool.push(10);
                }
            }
            if (_love <= 40) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 6; i++) {
                    this.cardspool.push(7);
                    this.cardspool.push(8);
                    this.cardspool.push(9);
                }
            }
            if (_soc <= 40) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 8; i++) {
                    this.cardspool.push(4);
                    this.cardspool.push(5);
                    this.cardspool.push(6);
                }
            }
            if (_ifinlove) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 28; i++) {
                    this.cardspool.push(37);
                    this.cardspool.push(37);
                    this.cardspool.push(37);
                    this.cardspool.push(38);
                }
            }
            if (_ifindepress) {
                let num = this.cardspool.length;
                for (let i = 0; i < num / 2; i++) {
                    this.cardspool.push(34);
                    this.cardspool.push(35);
                }
            }
        }
        getCardById(index) {
            return this.cards[index];
        }
        getCard() {
            console.log(this.cardspool);
            let num = this.cardspool.length;
            return this.cards[this.cardspool[Math.floor((Math.random() * num))]];
        }
    }

    class GameScene extends Laya.Scene {
        constructor() {
            super(...arguments);
            this.ifinLove = false;
            this.ifinDepress = false;
            this.ifill = false;
        }
        createChildren() {
            super.createChildren();
            this.loadScene("GameScene");
            this.popdialog = new PopDialog(this);
            this.popdialog.loadScene("PopDialog");
            this.events = new Events();
            this.cardmanager = new CardManager();
            this.cardUIs = [];
            for (let i = 0; i < 7; i++) {
                let cardUI = new CardUI(i);
                this.cardUIs.push(cardUI);
            }
        }
        onAwake() {
            this.btn_next.on(Laya.Event.CLICK, this, this.nextTurn);
            this.cardUIs[0].button = this.cardBtn1;
            this.cardUIs[1].button = this.cardBtn2;
            this.cardUIs[2].button = this.cardBtn3;
            this.cardUIs[3].button = this.cardBtn4;
            this.cardUIs[4].button = this.cardBtn5;
            this.cardUIs[5].button = this.cardBtn6;
            this.cardUIs[6].button = this.cardBtn7;
            for (let i = 0; i < 7; i++) {
                this.cardUIs[i].init();
            }
            this.cardTxt.on(Laya.Event.CLICK, this, this.onClickCard);
            this.btnDo.on(Laya.Event.CLICK, this, () => { this.onDoCard(CardUI.seletedIndex); });
            this.btnDiscard.on(Laya.Event.CLICK, this, () => { this.onDiscard(CardUI.seletedIndex); });
            this.on(Laya.Event.CLICK, this, this.onClick);
        }
        onClickCard() {
            CardUI.cardClicked = true;
        }
        onClick() {
            if (!CardUI.cardClicked) {
                CardUI.seletedIndex = -1;
            }
            if (CardUI.seletedIndex == -1) {
                this.cardinfo.visible = false;
            }
            else {
                this.cardTxt.text = this.cardUIs[CardUI.seletedIndex].getcardinfo();
                this.cardinfo.visible = true;
            }
            for (let i = 0; i < this.cardUIs.length; i++) {
                this.cardUIs[i].updateUI();
            }
            CardUI.cardClicked = false;
        }
        onDestroyCard(index) {
            Laya.SoundManager.playSound("sound/destroy.wav");
            for (let i = index; i < this.cardUIs.length - 1; i++) {
                this.cardUIs[i].card = this.cardUIs[i + 1].card;
            }
            this.cardUIs[this.cardUIs.length - 1].card = null;
            CardUI.seletedIndex = -1;
            this.updateUI();
        }
        onDoCard(index) {
            console.log(index);
            let effect = this.cardUIs[index].card.effect;
            let popevent = this.cardUIs[index].card.event;
            if (this.money + effect.cMoney < 0) {
                this.alert(this.events.getNoMoney());
                return;
            }
            if (this.enegy + effect.cEnergy < 0) {
                this.alert(this.events.getNoEnergy());
                return;
            }
            this.settleEffect(effect);
            if (popevent != null) {
                this.alert([popevent]);
            }
            this.onDestroyCard(index);
        }
        onDiscard(index) {
            let card = this.cardUIs[index].card;
            if (card.se != null) {
                this.settleEffect(card.se);
            }
            this.onDestroyCard(index);
        }
        init(ifChinese) {
            GameScene.ifChinses = ifChinese;
            this.currentPaper = new Paper(0, 0, 0);
            this.bestPaper = new Paper(0, 0, 0);
            this.cardinfo.visible = false;
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
            this.ifinDepress = false;
            this.ifinLove = false;
            this.cardmanager.genCardPool(this.score, this.ifinLove, this.ifinDepress, this.health, this.conf, this.soc, this.love, this.mot, this.adv);
            for (let i = 0; i < this.cardUIs.lengthl; i++) {
                if (this.cardUIs[i].card == null) {
                    this.cardUIs[i].card = this.cardmanager.getCard();
                }
            }
            this.cardUIs[0].card = this.cardmanager.getCardById(0);
            this.cardUIs[1].card = this.cardmanager.getCardById(1);
            this.cardUIs[2].card = this.cardmanager.getCardById(2);
            this.cardUIs[3].card = this.cardmanager.getCardById(3);
            this.cardUIs[4].card = this.cardmanager.getCard();
            this.cardUIs[5].card = this.cardmanager.getCard();
            this.cardUIs[6].card = this.cardmanager.getCard();
            if (ifChinese) {
                this.s_bg.loadImage("test/bg-cn.png");
                this.c_grade.skin = "comp/grade_cn.png";
                this.c_season.skin = "comp/season_cn.png";
                this.btn_next.label = "下一回合";
                this.btnDo.label = "执行";
                this.btnDiscard.label = "弃牌";
                this.cardTxt.fontSize = 24;
            }
            else {
                this.s_bg.loadImage("test/bg-en.png");
                this.c_grade.skin = "comp/grade_en.png";
                this.c_season.skin = "comp/season_en.png";
                this.btn_next.label = "Next turn";
                this.btnDo.label = "Do it";
                this.btnDiscard.label = "Discard";
                this.cardTxt.fontSize = 18;
            }
            this.updateUI();
            let events = this.events.getAllowance().concat(this.events.getInitEvent());
            this.alert(events);
        }
        nextTurn() {
            for (let i = this.cardUIs.length - 1; i >= 0; i--) {
                if (this.cardUIs[i].card != null && this.cardUIs[i].card.lim) {
                    this.onDiscard(i);
                }
            }
            this.updateUI();
            if (this.cardUIs[4].card != null) {
                this.alert(this.events.getTeachInfo1());
                return;
            }
            if (this.grade == 1 && this.season == 1) {
                this.alert(this.events.getTeachInfo1());
            }
            this.season += 1;
            if (this.season == 5) {
                this.grade++;
                this.season = 1;
            }
            if (this.grade == 9) {
                this.endGame();
            }
            this.updateUI();
            let events = this.events.checkEvents(this.grade, this.season);
            if (this.grade < 6 && this.season == 1) {
                events = events.concat(this.events.getAllowance());
            }
            if (this.health < 40) {
                if (!this.ifill) {
                    this.ifill = true;
                    events = events.concat(this.events.getill());
                }
            }
            else {
                if (this.ifill) {
                    this.ifill = false;
                    events = events.concat(this.events.getcure());
                }
            }
            if (this.conf < 40) {
                if (!this.ifinDepress) {
                    this.ifinDepress = true;
                    events = events.concat(this.events.getDepress());
                }
            }
            else {
                if (this.ifinDepress) {
                    this.ifinDepress = false;
                    events = events.concat(this.events.getRemovedDepress());
                }
            }
            if (events.length > 0) {
                this.alert(events);
            }
            this.enegy = 7;
            Laya.SoundManager.playSound("sound/hit.wav");
            this.getEffectforEachTurn();
            this.cardmanager.genCardPool(this.score, this.ifinLove, this.ifinDepress, this.health, this.conf, this.soc, this.love, this.mot, this.adv);
            for (let i = 0; i < this.cardUIs.length; i++) {
                console.log(this.cardUIs[i].card);
                if (this.cardUIs[i].card == null) {
                    this.cardUIs[i].card = this.cardmanager.getCard();
                }
            }
            this.updateUI();
        }
        updateUI() {
            this.l_money.text = this.money.toString();
            this.c_grade.value = this.grade.toString();
            this.c_season.value = this.season.toString();
            this.l_score.text = this.score.toString();
            this.l_paper.text = this.paper.toString();
            this.l_fpp.text = this.finalpaperpercent.toString();
            this.l_enegy.text = this.enegy.toString();
            this.p_paperpercent.value = this.paperpercent / 100;
            this.p_health.value = this.health / 100;
            this.p_conf.value = this.conf / 100;
            this.p_soc.value = this.soc / 100;
            this.p_love.value = this.love / 100;
            this.p_mot.value = this.mot / 100;
            this.p_adv.value = this.adv / 100;
            if (this.cardUIs != null) {
                for (let i = 0; i < this.cardUIs.length; i++) {
                    this.cardUIs[i].updateUI();
                }
            }
            if (this.checkWin()) {
                this.endGame();
            }
            this.updateStatusShow();
        }
        alert(events) {
            this.popdialog.init(events);
            this.popdialog.open();
        }
        getInLoveProb() {
            let num = (this.health + this.conf - 100) / 2;
            return num > 0 ? num : 0;
        }
        settleEffect(popeffect) {
            if (popeffect == null) {
                return;
            }
            this.money += popeffect.cMoney;
            this.currentPaper.process += popeffect.cProcess;
            this.currentPaper.value += popeffect.cValue;
            this.enegy += popeffect.cEnergy;
            this.health += popeffect.cHealth;
            this.conf += popeffect.cConf;
            this.soc += popeffect.cSoc;
            this.love += popeffect.cLove;
            this.mot += popeffect.cMot;
            this.adv += popeffect.cAdv;
            this.paperpercent = this.currentPaper.process;
            this.health = (this.health < 0 ? 0 : (this.health > 100 ? 100 : this.health));
            this.conf = (this.conf < 0 ? 0 : (this.conf > 100 ? 100 : this.conf));
            this.soc = (this.soc < 0 ? 0 : (this.soc > 100 ? 100 : this.soc));
            this.love = (this.love < 0 ? 0 : (this.love > 100 ? 100 : this.love));
            this.mot = (this.mot < 0 ? 0 : (this.mot > 100 ? 100 : this.mot));
            this.adv = (this.adv < 0 ? 0 : (this.adv > 100 ? 100 : this.adv));
            this.paperpercent = (this.paperpercent < 0 ? 0 : (this.paperpercent > 100 ? 100 : this.paperpercent));
            if (popeffect.specialNote == 1) {
                let rnd = Math.random() * 100;
                let pro = this.getInLoveProb();
                if (rnd < pro) {
                    this.alert(this.events.getSuccessInLove());
                    this.ifinLove = true;
                }
                else {
                    this.alert(this.events.getFailInLove());
                }
            }
            if (popeffect.specialNote == 2) {
                this.score += 1;
                this.alert(this.events.getOneScore());
            }
            if (popeffect.specialNote == 3) {
                this.alert(this.events.getRejectAdv());
            }
            if (popeffect.specialNote == 4) {
                this.alert(this.events.getInternship());
            }
            if (popeffect.specialNote == 5) {
                if (Math.random() <= 0.2) {
                    this.ifinLove = false;
                    this.alert(this.events.getBreakUp());
                }
            }
            this.updateUI();
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
        genEffectforStatus() {
            let effect = new PopEffect(0, 0, 0, 0, 0, 0, -10, -10, 0, 0);
            if (this.ifinLove) {
                effect.cSoc += 15;
                effect.cLove += 15;
                effect.cEnergy -= 1;
            }
            if (this.ifinDepress) {
                effect.cHealth -= 10;
                effect.cConf -= 10;
                effect.cMot -= 10;
                effect.cAdv -= 10;
            }
            if (this.ifill) {
                effect.cEnergy -= 3;
            }
            return effect;
        }
        getEffectforEachTurn() {
            let effect = this.genEffectforStatus();
            this.settleEffect(effect);
        }
        updateStatusShow() {
            this.l_status.text = "";
            if (this.ifinLove) {
                this.l_status.text += GameScene.ifChinses ? "恋爱中" : "In love";
            }
            if (this.ifinDepress) {
                this.l_status.text += GameScene.ifChinses ? "抑郁中" : "In depression";
            }
            if (this.ifill) {
                this.l_status.text += GameScene.ifChinses ? "生病" : "Get ill";
            }
            if (this.l_status.text.length == 0) {
                this.l_status.text = "普通";
            }
            let effect = this.genEffectforStatus();
            if (GameScene.ifChinses) {
                this.l_cstatus.text = "该状态每回合的" + Events.genEffectInfo(GameScene.ifChinses, effect);
            }
            else {
                this.l_cstatus.text = "status' " + Events.genEffectInfo(GameScene.ifChinses, effect) + " for each turn.";
            }
        }
    }

    var DialogType;
    (function (DialogType) {
        DialogType[DialogType["info"] = 0] = "info";
        DialogType[DialogType["TwoSelection"] = 1] = "TwoSelection";
    })(DialogType || (DialogType = {}));
    class PopEffect {
        constructor(cMoney = 0, cProcess = 0, cValue = 0, cEnergy = 0, cHealth = 0, cConf = 0, cSoc = 0, cLove = 0, cMot = 0, cAdv = 0, specialNote = 0) {
            this.cMoney = cMoney;
            this.cProcess = cProcess;
            this.cValue = cValue;
            this.cEnergy = cEnergy;
            this.cHealth = cHealth;
            this.cConf = cConf;
            this.cSoc = cSoc;
            this.cLove = cLove;
            this.cMot = cMot;
            this.cAdv = cAdv;
            this.specialNote = specialNote;
        }
    }
    class PopEvent {
    }
    class PopDialog extends Laya.Dialog {
        constructor(parent) {
            super();
            this.parentScene = parent;
        }
        init(_popevents) {
            let popevent = _popevents.pop();
            this.popevents = _popevents;
            let type = popevent.dialogType;
            let Chiinfo = popevent.Chiinfo;
            let Enginfo = popevent.Enginfo;
            if (GameScene.ifChinses) {
                this.dialogtext.fontSize = 24;
                this.dialogtext.text = Chiinfo;
            }
            else {
                this.dialogtext.fontSize = 18;
                this.dialogtext.text = Enginfo;
            }
            if (popevent.popeffect != null) {
                this.dialogtext.text += "\n\n" + Events.genEffectInfo(GameScene.ifChinses, popevent.popeffect);
            }
            if (type == DialogType.info) {
                this.retBtn.visible = true;
                this.choice1Btn.visible = false;
                this.choice2Btn.visible = false;
            }
            this.parentScene.settleEffect(popevent.popeffect);
            this.parentScene.mouseEnabled = false;
            this.retBtn.on(Laya.Event.CLICK, this, this.close);
        }
        onOpened() {
            Laya.SoundManager.playSound("sound/button_click.wav");
        }
        onClosed() {
            this.parentScene.mouseEnabled = true;
            super.onClosed();
            if (this.popevents.length > 0) {
                this.parentScene.alert(this.popevents);
            }
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
