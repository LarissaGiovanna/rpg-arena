import { ClassCharacter } from "../enums/ClassCharacter";
import type { IItem } from "../interfaces/IItem.js";
export declare abstract class Character {
    readonly name: string;
    class: ClassCharacter;
    level: number;
    defense: number;
    private life;
    private maxLife;
    inventory: IItem[];
    constructor(name: string, charClass: ClassCharacter, level: number);
    getLife(): number;
    setLife(life: number): void;
    isAlive(): boolean;
    attack(target: Character): number;
    receiveDamage(damage: number): void;
    heal(amount: number): void;
    addItemToInventory(item: IItem): void;
    useItem(item: IItem): void;
}
//# sourceMappingURL=Character.d.ts.map