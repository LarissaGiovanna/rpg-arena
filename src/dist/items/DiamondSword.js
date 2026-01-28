import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";
export class DiamondSword {
    constructor() {
        this.name = "Diamond Sword";
        this.description = "A sword made of diamond, extremely sharp and durable.";
        this.rarity = Rarity.LEGENDARY;
        this.whoCanUse = WhoCanUse.WARRIORS_ONLY;
    }
    use() {
        console.log("You swing the Diamond Sword with great power!");
    }
}
//# sourceMappingURL=DiamondSword.js.map