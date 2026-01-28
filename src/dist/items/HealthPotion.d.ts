import type { IItem } from "../interfaces/IItem.js";
import { Rarity } from "../enums/Rarity.js";
import { WhoCanUse } from "../enums/WhoCanUse.js";
export declare class HealthPotion implements IItem {
    name: string;
    description: string;
    rarity: Rarity;
    whoCanUse: WhoCanUse;
    constructor();
    use(): void;
}
//# sourceMappingURL=HealthPotion.d.ts.map