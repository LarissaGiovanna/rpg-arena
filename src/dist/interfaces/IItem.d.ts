import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";
export interface IItem {
    name: string;
    description: string;
    rarity: Rarity;
    whoCanUse: WhoCanUse;
    use(): void;
}
//# sourceMappingURL=IItem.d.ts.map