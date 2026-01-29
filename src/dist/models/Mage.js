import { ClassCharacter } from "../enums/ClassCharacter";
import { NoEnoughManaError } from "../errors/NoEnoughManaError.js";
import { Character } from "./Character";
export class Mage extends Character {
    constructor(name, level) {
        super(name, ClassCharacter.MAGE, level);
        this.defense = level;
        this.life = 80;
        this.attackPower = 12;
        this.mana = 100;
    }
    Fireball(target) {
        try {
            const damage = this.level * 3 + this.attackPower;
            target.receiveDamage(damage);
            this.mana -= 30;
            return damage;
        }
        catch {
            throw new NoEnoughManaError("Not enough mana to cast Fireball");
        }
    }
    Meditate() {
        this.mana += 25;
    }
}
//# sourceMappingURL=Mage.js.map