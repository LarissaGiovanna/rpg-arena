import { ClassCharacter } from "../enums/ClassCharacter.js";
import { Character } from "./Character.js";
import { NoEnoughManaError } from "../errors/NoEnoughManaError.js";
export class Cleric extends Character {
    constructor(name, level) {
        super(name, ClassCharacter.CLERIC, level);
        this.defense = level;
        this.life = 90;
        this.attackPower = 8;
        this.mana = 120;
    }
    ClericHeal(target) {
        const healAmount = this.level * 5;
        target.heal(healAmount);
        return healAmount;
    }
    HolySmite(target) {
        if (this.mana >= 20) {
            const damage = this.level * 2 + this.attackPower;
            target.receiveDamage(damage);
            this.mana -= 20;
            return damage;
        }
        else {
            throw new NoEnoughManaError("Not enough mana to cast HolySmite");
        }
    }
}
//# sourceMappingURL=Cleric.js.map