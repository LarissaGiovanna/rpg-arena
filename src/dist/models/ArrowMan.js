import { ClassCharacter } from "../enums/ClassCharacter.js";
import { Character } from "./Character.js";
import { NoEnoughManaError } from "../errors/NoEnoughManaError.js";
export class Arrowman extends Character {
    constructor(name, level) {
        super(name, ClassCharacter.ARROWMAN, level);
        this.defense = level;
        this.life = 100;
        this.attackPower = 15;
        this.mana = 50;
    }
    //@Override
    attack(target) {
        let randomNumber = Math.random(); //number between 0 and 1
        if (randomNumber <= 0.3) {
            const damage = this.level * 2 + this.attackPower;
            target.receiveDamage(damage);
            return damage;
        }
        else {
            const damage = this.level + this.attackPower;
            target.receiveDamage(damage);
            return damage;
        }
    }
    PreciseShot(target) {
        if (this.mana >= 15) {
            const damage = this.level * 1.5 + this.attackPower;
            target.receiveDamage(damage);
            this.mana -= 15;
            return damage;
        }
        else {
            throw new NoEnoughManaError("Not enough mana to cast PreciseShot");
        }
    }
}
//# sourceMappingURL=ArrowMan.js.map