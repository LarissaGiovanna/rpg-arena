import { ClassCharacter } from "../enums/ClassCharacter";
import { Character } from "./Character";
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
        const damage = this.level * 2 + this.attackPower;
        target.receiveDamage(damage);
        this.mana -= 20;
        return damage;
    }
}
//# sourceMappingURL=Cleric.js.map