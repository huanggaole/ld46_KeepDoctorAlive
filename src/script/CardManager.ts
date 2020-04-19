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
    constructor(){
        // 0. 新生老乡会
        let info_cn = "与老乡们在一起聚会。";
        let info_en = "Have party with other freshmen.";
        let effect = new PopEffect(0,0,0,-2,0,0,20,0,0,0);
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
        info_en = "Go to the advisor's office and chat with him.";
        effect = new PopEffect(0,0,0,-2,0,0,0,0,0,20);
        this.cards.push(new Card("导师洽谈会","Advisor Talks",info_cn,info_en,effect,null,true));
        // 4. 实验室聚餐
        info_cn = "与同实验室的是兄弟姐妹一起聚餐。";
        info_en = "Have dinner together with colleagues studied under the same professor.";
        effect = new PopEffect(-50,0,0,-1,0,0,20,0,0,0);
        this.cards.push(new Card("实验室聚餐","Lab Diner",info_cn,info_en,effect,null));
        // 5. 老同学聚餐
        info_cn = "与以前的老同学老朋友一起聚餐。";
        info_en = "Have dinner with friends who have worked.";
        effect = new PopEffect(-100,0,0,-1,0,0,50,0,0,0);
        this.cards.push(new Card("老同学聚餐","Friends\nDiner",info_cn,info_en,effect,null));
        // 6. 参加联谊会
        info_cn = "有一定几率交到恋人。成功概率为 0.5 * (健康 + 自信 - 100)%";
        info_en = "Maybe you can make a girlfriend or boyfriend. The probability of success is 0.5 * (Health + Confidence - 100)%";
        effect = new PopEffect(-50,0,0,-2,0,0,10,0,0,0,1);
        this.cards.push(new Card("参加联谊会","Sorority\nParty",info_cn,info_en,effect,null));
        // 7. 泡吧
        
        // 8. 

        // 9. 

        // 10. 

        // 11. 

        // 12. 外出旅游

        // 13. 培养兴趣

        // 14. 回家探亲

        // 15. 锻炼身体
        
        // 16. 科研讲座

        // 17. 快乐科研

        // 18. 轻松科研

        // 19. 基础科研

        // 20. 辛勤科研

        // 21. 残酷科研

        // 22. 轻松摸鱼

        // 23. 民间科研

        // 24. 想象科研

        // 25. 魔法科研

        // 26. 跑腿办事

        // 27. 寻求指导
        
        // 28. 导师洽谈

        // 29. 横向项目

        // 30. 给导师送礼

        // 31. 换导师

        // 32. 上课

        // 33. 外出实习

        // 34. 卧床休息

        // 35. 医院就医

        // 36. 心里咨询

        // 37. Love Hub

        // 38. 交友软件

        // 39. 电子游戏


    }

    getCardById(index):Card{
        return this.cards[index];
    }

    getCard():Card{
        return this.cards[0];
    }
}