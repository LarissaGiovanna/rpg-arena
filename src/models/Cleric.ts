import { ClassCharacter } from "../enums/ClassCharacter";
import { Character } from "./Character";

export class Cleric extends Character {

    constructor(name: string, level: number) {
        super (name, ClassCharacter.CLERIC, level);
        this.defense = level;
        this.life = 90;
        this.attackPower = 8;
        this.mana = 120;
    }

    public ClericHeal(target: Character): number {
        const healAmount = this.level * 5;
        target.heal(healAmount);
        return healAmount;
    }

    public HolySmite(target: Character): number {
        const damage = this.level * 2 + this.attackPower;
        target.receiveDamage(damage);
        this.mana -= 20;
        return damage;
    }
}