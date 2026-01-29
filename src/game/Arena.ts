import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Cleric } from "../models/Cleric";
import { Mage } from "../models/Mage";
import { Arrowman } from "../models/ArrowMan";
import { FighterDontFoundError } from "../errors/FighterDontFoundError";

export class Arena {
    private fighters: Character[] = [];

    public addFighter(fighter: Character): void {
        this.fighters.push(fighter);
    }

    public listFighters(): Character[] {
        return this.fighters;
    }

    public findFighterByName(name: string): Character {
        const fighter = this.fighters.find(f => f.name === name);
        if (!fighter) {
            throw new FighterDontFoundError(`Fighter with name ${name} not found`);
        }
        return fighter;
    }

    public battle(fighter1Name: string, fighter2Name: string): void {
        const fighter1 = this.findFighterByName(fighter1Name);
        const fighter2 = this.findFighterByName(fighter2Name);
        try {
            while (fighter1.isAlive() && fighter2.isAlive()) {
                //show lifes
                fighter1.getLife();
                fighter2.getLife();
                //fighter1 attacks fighter2
                fighter1.attack(fighter2);
                if (!fighter2.isAlive()) {
                    console.log(`${fighter2.name} has been defeated!`);
                    break;
                }
                //fighter2 attacks fighter1
                fighter2.attack(fighter1);
                if (!fighter1.isAlive()) {
                    console.log(`${fighter1.name} has been defeated!`);
                    break;
                }
            }
        } catch (error) {
            console.error("An error occurred during the battle:", error);
        }
    }
}