import { ClassCharacter } from "../enums/ClassCharacter.js";
import { NoEnoughManaError } from "../errors/NoEnoughManaError.js";
import { Character } from "./Character.js";

export class Mage extends Character {

    constructor(name: string, level: number) {
        super(name, ClassCharacter.MAGE, level);
        this.defense = level;
        this.life = 80;
        this.attackPower = 12;
        this.mana = 100;
    }

    public Fireball(target: Character): number {
        if (this.mana >= 30){
            const damage = this.level * 3 + this.attackPower;
            target.receiveDamage(damage);
            this.mana -= 30;
            return damage;
        } else {
            throw new NoEnoughManaError("Not enough mana to cast Fireball");
        }

    }

    public Meditate(): void {
        this.mana += 25;
    }
}