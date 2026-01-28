import type { IItem } from "../interfaces/IItem.js";
import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";

export class DiamondSword implements IItem {
    name: string;
    description: string;
    rarity: Rarity;
    whoCanUse: WhoCanUse;

    constructor(){
        this.name = "Diamond Sword";
        this.description = "A sword made of diamond, extremely sharp and durable.";
        this.rarity = Rarity.LEGENDARY;
        this.whoCanUse = WhoCanUse.WARRIORS_ONLY;
    }
    use(): void {
        console.log("You swing the Diamond Sword with great power!");
    }
}