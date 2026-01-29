import { Character } from './Character';
import { ClassCharacter } from '../enums/ClassCharacter.js';

export class Warrior extends Character {

   constructor(name: string, level: number) {
       super (name, ClassCharacter.WARRIOR, level);
       this.defense = level * 2;
       this.life = 150;
       this.attackPower = 18;
   }

   public WarriorAttack(target: Character): number {
       const damage = this.level * 2 + this.attackPower;
       target.receiveDamage(damage);
       return damage;
   }
}