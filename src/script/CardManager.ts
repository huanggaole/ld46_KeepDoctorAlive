import { PopEffect,PopEvent } from "../scene/PopDialog";

export class Card{
    public name_cn:string;
    public name_en:string;    
    public info_cn:string;
    public info_en:string;    
    public effect:PopEffect;
    public event:PopEvent;
    public lim:boolean;
    public se:PopEffect | null;
    constructor(_name_cn, _name_en, _info_cn, _info_en, _effect, _event = null, _lim = false, _se = null){
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
export class CardManager{
    public cards = [];
    public cardspool = [];
    constructor(){
        // 0. 新生老乡会
        let info_cn = "与老乡们在一起聚会。";
        let info_en = "Have party with other freshmen.";
        let effect = new PopEffect(0,0,0,-2,0,0,20,0,0,0);
        let se = new PopEffect(0,0,0,0,0,0,0,0,0,0);
        this.cards.push(new Card("新生老乡会","Freshmen\nParty",info_cn,info_en,effect,null,true));
        // 1. 新生联谊会
        info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
        info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
        effect = new PopEffect(0,0,0,-2,0,0,10,0,0,0,1);
        this.cards.push(new Card("新生联谊会","Sorority\nParty",info_cn,info_en,effect,null,true));
        // 2. 新生动员会
        info_cn = "研究生部针对新生的科研动员大会。";
        info_en = "Postgraduate Department's scientific research mobilization meeting for freshmen.";
        effect = new PopEffect(0,0,0,-2,0,0,0,0,20,0);
        this.cards.push(new Card("新生动员会","Mobilization\nMeeting",info_cn,info_en,effect,null,true));
        // 3. 导师洽谈会
        info_cn = "去导师的办公室与导师好好唠唠家常。";
        info_en = "Go to the supervisor's office and chat with him.";
        effect = new PopEffect(0,0,0,-2,0,0,0,0,0,20);
        this.cards.push(new Card("导师洽谈会","Supervisor Talks",info_cn,info_en,effect,null,true));
        // 4. 实验室聚餐
        info_cn = "与同实验室的是兄弟姐妹一起聚餐。";
        info_en = "Have dinner together with colleagues studied under the same professor.";
        effect = new PopEffect(-20,0,0,-1,0,0,20,0,0,0);
        this.cards.push(new Card("实验室聚餐","Lab Diner",info_cn,info_en,effect,null));
        // 5. 老同学聚餐
        info_cn = "与以前的老同学老朋友一起聚餐。";
        info_en = "Have dinner with friends who have worked.";
        effect = new PopEffect(-50,0,0,-1,0,0,50,0,0,0);
        this.cards.push(new Card("老同学聚餐","Friends\nDiner",info_cn,info_en,effect,null));
        // 6. 参加联谊会
        info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
        info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
        effect = new PopEffect(-50,0,0,-2,10,10,10,20,0,0,1);
        this.cards.push(new Card("参加联谊会","Sorority\nParty",info_cn,info_en,effect,null));
        // 7. 高端会所
        info_cn = "为性苦闷的你提供无微不至的关爱（有偿的）。";
        info_en = "Provide meticulous care (paid) for you who are suffering from sexual distress.";
        effect = new PopEffect(-150,0,0,-2,20,20,20,100,0,0);
        this.cards.push(new Card("高端会所","High-end\nmen's club",info_cn,info_en,effect,null));
        // 8. Love Hub
        info_cn = "为性苦闷的你提供方便、快捷的自助服务（免费的）。";
        info_en = "Provide convenient and quick self-service (free) for you who are suffering from sexual distress.";
        effect = new PopEffect(0, 0, 0, -2, -10, -10, -10, 40 , 0, 0);
        this.cards.push(new Card("Love Hub","Love Hub",info_cn,info_en,effect,null));
        // 9. 交友软件
        info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
        info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
        effect = new PopEffect(0,0,0,-1,0,0,0,0,0,0,1);
        this.cards.push(new Card("交友软件","WeLove",info_cn,info_en,effect,null));
        // 10. 电子游戏
        info_cn = "宅在寝室玩游戏，性价比最高的休闲方式。";
        info_en = "Play games in the dorm, the most cost-effective way of leisure.";
        effect = new PopEffect(0, 0, 0, -2, -10, 40, -10, 0, -10, 0);
        this.cards.push(new Card("电子游戏","Play Games",info_cn,info_en,effect,null));
        // 11. 外出旅游
        info_cn = "世界这么大，我想去看看。";
        info_en = "I'll be riding shotgun underneath the hot sun, feeling like I'm someone.";
        effect = new PopEffect(-150, 0, 0, -3, 40, 40, 40, 0, 40, 0);
        this.cards.push(new Card("外出旅游","Traveling",info_cn,info_en,effect,null));
        // 12. 培养兴趣
        info_cn = "参加兴趣培训班，收获志同道合的朋友。";
        info_en = "Take part in the interest training class, and gain like-minded friends.";
        effect = new PopEffect(-50, 0, 0, -2, 0, 30, 30, 0, 0, 0);
        this.cards.push(new Card("培养兴趣","Develop\nInterest",info_cn,info_en,effect,null));
        // 13. 回家探亲
        info_cn = "常回家看看回家看看";
        info_en = "Country roads, take me home, to the place I belong.";
        effect = new PopEffect(-10, 0, 0, -3, 30, 0, 10, 0, 0, 0);
        this.cards.push(new Card("回家探亲","Go home\non holiday",info_cn,info_en,effect,null));
        // 14. 锻炼身体
        info_cn = "在操场上用免费的公共设施锻炼身体。";
        info_en = "Exercise in the playground with free public facilities.";
        effect = new PopEffect(0, 0, 0, -1, 20, 0, 0, 0, 0, 0);
        this.cards.push(new Card("锻炼身体","Take Sports",info_cn,info_en,effect,null));
        // 15. 上健身课
        info_cn = "办理健身卡，在专业的健身教练指导下锻炼身体。";
        info_en = "Go to the gym and exercise under the guidance of a professional fitness coach.";
        effect = new PopEffect(-50, 0, 0, -1, 50, 0, 10, 0, 0, 0);
        this.cards.push(new Card("去健身房","Go to\nthe Gym",info_cn,info_en,effect,null));
        // 16. 听讲座
        info_cn = "去听学校的讲座，通常都会请来成功不可复制的成功人士来讲他们的成功心得。";
        info_en = "Listen to the successful people to tell you their success experience which can't be copied successfully.";
        effect = new PopEffect(0, 0, 0, -2, 0, 0, 0, 0, 30, 0);
        this.cards.push(new Card("听讲座","Go to\nLectures",info_cn,info_en,effect,null));
        // 17. 快乐科研
        info_cn = "用自己舒服的频率进行研究与实验。完全靠兴趣与内因驱动的科研。";
        info_en = "Research and experiment with your own comfortable frequency. Research driven by interest and internal factors.";
        effect = new PopEffect(0, 2, 2, -1, -2, 0, -2, -2, 2, -2);
        this.cards.push(new Card("快乐科研","Research\nHappily",info_cn,info_en,effect,null));
        // 18. 轻松科研
        info_cn = "你的导师认为你整天吊儿郎当的。但你只是不希望让自己太累。";
        info_en = "Your Supervisor may thinks you hang around all day. The truth is you just don't want to be too tired.";
        effect = new PopEffect(0, 5, 4, -2, -5, 0, -5, -5, 3, -3);
        this.cards.push(new Card("轻松科研","Research\nRelax",info_cn,info_en,effect,null));
        // 19. 基础科研
        info_cn = "每天打卡上班8小时每周工作5天——还远低于导师的预期。每周有效工作时间20个小时——跟其他大部分人一样。";
        info_en = "Stay in lab 8 hours a day and work for 5 days a week, which is far less than the supervisor's expectation. The effective working time is 20 hours a week, just like most other people.";
        effect = new PopEffect(0, 10, 7, -3, -10, 0, -10, -10, 5, -4);
        this.cards.push(new Card("基础科研","Normal\nResearch",info_cn,info_en,effect,null));
        // 20. 辛勤科研
        info_cn = "尽管你已经比你的导师当年读博的时候更加用功了，但他还是指控你不够努力。";
        info_en = "Although you've worked harder than your supervisor did when he was a Ph.D. candidate, he still accuses you of not doing your best.";
        effect = new PopEffect(0, 20, 13, -5, -20, 0, -20, -20, 5, 0);
        this.cards.push(new Card("辛勤科研","Research\nHard",info_cn,info_en,effect,null));
        // 21. 残酷科研
        info_cn = "从醒来到就寝，除了解决生理需求你都在科研。长此以往有猝死的风险。";
        info_en = "From waking up to going to bed, you are doing research in addition to solving your physiological needs. There is a risk of sudden death in the long run.";
        effect = new PopEffect(0, 30, 15, -7, -30, 0, -30, -30, 5, 5);
        this.cards.push(new Card("残酷科研","Research\nCruelly",info_cn,info_en,effect,null));
        // 22. 轻松摸鱼
        info_cn = "如果有缘，知识会自己进到我脑子里。论文也会不知不觉中写完。";
        info_en = "if there is a chance, knowledge will come into my mind. The paper will be finished unconsciously.";
        effect = new PopEffect(0, 4, 2, -1, 0, 0, -2, -2, 2, -2);
        this.cards.push(new Card("佛系科研","Research\nHappily",info_cn,info_en,effect,null));
        // 23. 民间科研
        info_cn = "也许是这样的，虽然我不知道为什么，但我只是想毕业，可行就行了。";
        info_en = "Maybe so. I don't know why, but I just want to make up a paper that looks like a literature. It's OK.";
        effect = new PopEffect(0, 8, 3, -2, -2, 0, -2, -2, 2, -3);
        this.cards.push(new Card("民间科研","Research\nCrankly",info_cn,info_en,effect,null));
        // 24. 想象科研
        info_cn = "论文的这一部分是我求香拜佛后通过冥想写出来的，充满了玄学的魅力。如果你不能复现它，那说明你不够虔诚。";
        info_en = "The papers written through meditation are full of the charm of metaphysics. If you can't reproduce it, you're not pious enough.";
        effect = new PopEffect(0, 16, 6, -3, -3, 0, -3, -3, 2, -4);
        this.cards.push(new Card("玄学科研","Mystical\nResearch",info_cn,info_en,effect,null));
        // 25. 魔法科研
        info_cn = "粗枝大叶的调研，迎合导师的主意，随意的实验，没有说服力的结论...别怕，使用魔法优化一下，还是一篇看起来很厉害的论文！";
        info_en = "Catering to the supervisor's idea, careless experiments, and unexpected results... Take it easy! Wrap it up with magic, it's still a realistic-looking paper.";
        effect = new PopEffect(0, 30, 10, -5, -5, 0, -5, -5, 2, 0);
        this.cards.push(new Card("魔法科研","Magical\nResearch",info_cn,info_en,effect,null));
        // 26. 跑腿办事
        info_cn = "导师希望我能帮他跑跑腿办点事。";
        info_en = "My advisor ask me to do some legwork for him.";
        effect = new PopEffect(0, 0, 0, -1, 0, 0, 0, 0, 0, 5);
        se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 3);
        this.cards.push(new Card("跑腿办事","Legwaork",info_cn,info_en,effect, null, true, se));
        console.log(this.cards);
        // 27. 寻求指导
        info_cn = "科研遇到了瓶颈，也许可以去向导师寻求一些指导？";
        info_en = "There is a bottleneck in research. Maybe I can go to my supervisor for some guidance?";
        effect = new PopEffect(0, 2, 2, -2, 0, 0, 10, 0, 0, 0);
        this.cards.push(new Card("寻求指导","Ask for\nGuidance",info_cn,info_en,effect,null));
        // 28. 导师洽谈
        info_cn = "去导师的办公室与导师好好聊聊进度。";
        info_en = "Go to the supervisor's office and chat with him.";
        effect = new PopEffect(0, 3, 3, -3,0 ,0 ,10, 0, 0, 0);
        this.cards.push(new Card("导师洽谈","Supervisor\nTalks",info_cn,info_en,effect,null,true));
        // 29. 横向项目
        info_cn = "导师今天突然很客气，看来是有横向项目需要人手。";
        info_en = "The supervisor was very polite today. It seems that there are horizontal projects that need manpower.";
        effect = new PopEffect(0, 0, 0, -5, -10, 20, 0, 0, 10, 20);
        se = new PopEffect(0, 0, 0, 0, 0, 0, 0, 0, 0, -30, 3);
        this.cards.push(new Card("横向项目","Horizontal\nProject",info_cn,info_en,effect,null,true,se));
        // 30. 给导师送礼
        info_cn = "吃人的嘴短，拿人的手软。";
        info_en = "Gifts blind the eyes.";
        effect = new PopEffect(-200, 0, 0, -1, 0 ,0 , 0, 0, 0, 20);
        this.cards.push(new Card("给导师送礼","Bribe the\nSupervisor",info_cn,info_en,effect,null));
        // 31. 换导师
        info_cn = "我觉得，现在的导师不适合我。我想换导师。";
        info_en = "I don't think the current supervisor is suitable for me. I want to change my supervisor.";
        effect = new PopEffect(0, 0, 0, -2, 0 ,0 , 0, 0, 0, -20);
        this.cards.push(new Card("换导师","Change the\nSupervisor",info_cn,info_en,effect,null));
        // 32. 上课
        info_cn = "只注重分数的研究生不是一个好研究生，但是学分不够可毕不了业。通过上课来获得一个学分。";
        info_en = "A graduate student who only pays attention to scores is not a good graduate student, but he can't get his ph.D. degree if his credits are not enough. Get credits by taking classes.";
        effect = new PopEffect(0, 0, 0, -5, 0, 0, 0, 0, 30, 0, 2);
        this.cards.push(new Card("上课","Take a\nClass",info_cn,info_en,effect,null));
        // 33. 外出实习
        info_cn = "实验室一个月发给我的补助，我到外面企业里实习一两天就挣到了。但是我的导师并不乐意我去实习。";
        info_en = "The allowance that the laboratory gives me, I can earn in one or two days in an enterprise. However, my supervisor is against me for an internship.";
        effect = new PopEffect(1000, 0, 0, -3, 0, 0, 0, 0, 0, -50, 4);
        this.cards.push(new Card("外出实习","Go for an\ninternship",info_cn,info_en,effect,null));
        // 34. 卧床休息
        info_cn = "我需要休息。";
        info_en = "I need some rest.";
        effect = new PopEffect(0, 0, 0, -1, 10, 0, 0, 0, 0, 0);
        this.cards.push(new Card("卧床休息","Have a\nrest",info_cn,info_en,effect,null));
        // 35. 医院就医
        info_cn = "我需要就医。";
        info_en = "I need go to hospital.";
        effect = new PopEffect(-50, 0, 0, -1, 50, 0, 0, 0, 0, 0);
        this.cards.push(new Card("医院就医","Go to\nHospital",info_cn,info_en,effect,null));
        // 36. 心理咨询
        info_cn = "我最近焦虑、失眠，难过。每天早上醒来都不想工作。我需要心理咨询。但我负担不起一个职业的心理咨询师。也许我可以去找学校里的心理老师咨询？";
        info_en = "I am anxious, insomnia and sad recently. I don't want to work every morning when I wake up. I need counseling. But I can't afford a professional psychologist. Maybe I can go to the school psychological teacher for consultation?";
        effect = new PopEffect(0, 0, 0, -1, 20, 20, 0, 0, 0, 0);
        this.cards.push(new Card("心理咨询","psychological\ncounseling",info_cn,info_en,effect,null));
        // 37. 恋人约会
        info_cn = "一起逛街,一起吃饭,一起看电影，然后，一起……";
        info_en = "Shopping together, eating together, watching movies together, and then...";
        effect = new PopEffect(-50, 0, 0, -1, 10, 10, 10, 10, 10, 0);
        se = new PopEffect(0,0,0,0,0,0,0,0,0,0,5);
        this.cards.push(new Card("恋人约会","Dating\nwith Lover",info_cn,info_en,effect,null,false,se));
        // 38. 恋人旅行
        info_cn = "我在乎的不是目的地,而是有你会陪我一起看沿途的风景。";
        info_en = "What I care about is not the destination, but the scenery along the way with you.";
        effect = new PopEffect(-180, 0, 0, -3, 40, 40, 40, 40, 40, 0);
        se = new PopEffect(0,0,0,0,0,0,0,0,0,0,5);        
        this.cards.push(new Card("恋人旅行","Traveling\nwith Lover",info_cn,info_en,effect,null,false,se));
    }

    public genCardPool(_score,_ifinlove,_ifindepress,_health,_conf,_soc,_love,_mot,_adv){
        this.cardspool = [];
        this.cardspool.push(4);this.cardspool.push(5);this.cardspool.push(6);this.cardspool.push(7);
        this.cardspool.push(10);this.cardspool.push(11);this.cardspool.push(12);this.cardspool.push(13);
        this.cardspool.push(14);this.cardspool.push(15);this.cardspool.push(16);this.cardspool.push(16);
        if(_mot >= 60){
            this.cardspool.push(17);this.cardspool.push(18);this.cardspool.push(19);this.cardspool.push(20);this.cardspool.push(21);            
        }else{
            this.cardspool.push(22);this.cardspool.push(23);this.cardspool.push(24);this.cardspool.push(25);this.cardspool.push(10);
        }
        if(_adv > 40){
            this.cardspool.push(26);this.cardspool.push(26);this.cardspool.push(27);this.cardspool.push(28);this.cardspool.push(29);
        }else{
            this.cardspool.push(26);this.cardspool.push(26);this.cardspool.push(30);this.cardspool.push(31);this.cardspool.push(29);
        }
        if(_score < 6){
            let num = this.cardspool.length;
            for(let i=0; i<num/3; i++){
                this.cardspool.push(32);
            }
        }
        if(_health <= 40){
            let num = this.cardspool.length;
            for(let i=0; i<num/4; i++){
                this.cardspool.push(34);
                this.cardspool.push(35);                
            }
        }
        if(_conf <= 40){
            let num = this.cardspool.length;
            for(let i=0; i<num/4; i++){
                this.cardspool.push(36);
                this.cardspool.push(10);                              
            }
        }
        if(_love <= 40){
            let num = this.cardspool.length;
            for(let i=0; i<num/6; i++){
                this.cardspool.push(7);
                this.cardspool.push(8);
                this.cardspool.push(9);                                
            }
        }
        if(_soc <= 40){
            let num = this.cardspool.length;
            for(let i=0; i<num/8; i++){
                this.cardspool.push(4);
                this.cardspool.push(5);
                this.cardspool.push(6);
            }
        }
        if(_ifinlove){
            let num = this.cardspool.length;
            for(let i=0; i<num/28; i++){
                this.cardspool.push(37);
                this.cardspool.push(37);
                this.cardspool.push(37);                
                this.cardspool.push(38);
            }
        }
        if(_ifindepress){
            let num = this.cardspool.length;
            for(let i=0; i<num/2; i++){
                this.cardspool.push(34);
                this.cardspool.push(35);
            }
        }
    }

    getCardById(index):Card{
        return this.cards[index];
    }

    getCard():Card{
        console.log(this.cardspool);
        let num = this.cardspool.length;
        return this.cards[this.cardspool[Math.floor((Math.random() * num))]];
    }
}