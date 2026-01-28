import type { IItem } from "../interfaces/IItem.js";
import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";

export class HealthPotion implements IItem {
    name: string;
    description: string;
    rarity: Rarity;
    whoCanUse: WhoCanUse;

    constructor(){
        this.name = "Health Potion";
        this.description = "Restores 50 life points.";
        this.rarity = Rarity.COMMON;
        this.whoCanUse = WhoCanUse.ALL;
    }
    use(): void {
        console.log("You used a Health Potion and restored 50 life points.");
    }
}