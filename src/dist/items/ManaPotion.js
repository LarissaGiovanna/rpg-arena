import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";
export class ManaPotion {
    constructor() {
        this.name = "Mana Potion";
        this.description = "Restores 30 mana points.";
        this.rarity = Rarity.UNCOMMON;
        this.whoCanUse = WhoCanUse.MAGES_ONLY;
    }
    use() {
        console.log("You used a Mana Potion and restored 30 mana points.");
    }
}
//# sourceMappingURL=ManaPotion.js.map