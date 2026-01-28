import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";
export class HealthPotion {
    constructor() {
        this.name = "Health Potion";
        this.description = "Restores 50 life points.";
        this.rarity = Rarity.COMMON;
        this.whoCanUse = WhoCanUse.ALL;
    }
    use() {
        console.log("You used a Health Potion and restored 50 life points.");
    }
}
//# sourceMappingURL=HealthPotion.js.map