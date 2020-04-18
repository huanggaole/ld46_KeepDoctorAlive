import { PopEffect } from "../scene/PopDialog";

export class Card{
    public name_cn:string;
    public name_en:string;    
    public info_cn:string;
    public info_en:string;    
    public effect:PopEffect;
    public lim:boolean;
    public se:PopEffect | null;
    constructor(_name_cn, _name_en, _info_cn, _info_en, _effect, _lim = false, _se = null){
        this.name_cn = _name_cn;
        this.name_en = _name_en;        
        this.info_cn = _info_cn;
        this.info_en = _info_en;
        this.effect = _effect;
        this.lim = _lim;
        this.se = _se;
    }
}
export class CardManager{
    public cards = [];
    constructor(){
        // 1. 新生老乡会
        let info_cn = "";
        let info_en = "";
        let effect = new PopEffect(0,0,0,-2,0,0,20,0,0,0);
        this.cards.push(new Card("新生老乡会","Freshmen Party",info_cn,info_en,effect));
        // 2. 新生联谊会

        // 3. 新生动员会

        // 4. 导师洽谈会

        // 5. 老乡会

        // 6. 联谊会

        // 7. 动员会

        // 8. 导师洽谈
        
    }
}