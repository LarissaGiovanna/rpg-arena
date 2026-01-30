import { Character } from "../models/Character.js";
import { Warrior } from "../models/Warrior.js";
import { Cleric } from "../models/Cleric.js";
import { Mage } from "../models/Mage.js";
import { Arrowman } from "../models/ArrowMan.js";
import { FighterDontFoundError } from "../errors/FighterDontFoundError.js";
import { MaxFightersError } from "../errors/MaxFightersError.js";

export class Arena {
    private fighters1: Character[] = [];
    private fighters2: Character[] = [];

    public addFighter(fighter: Character, player: number): void {
        if (player === 1 && this.fighters1.length < 3) {
            if (this.fighters1.find(f => f.name === fighter.name)) {
                throw new Error(`Fighter with name ${fighter.name} already exists for Player 1`);
            } else {
                this.fighters1.push(fighter);
                console.log(`Fighter ${fighter.name} the ${fighter.constructor.name} added to the arena.`);
            }
        } else if (player === 2 && this.fighters2.length < 3) {
            if (this.fighters2.find(f => f.name === fighter.name)) {
                throw new Error(`Fighter with name ${fighter.name} already exists for Player 2`);
            } else {
                this.fighters2.push(fighter);
                console.log(`Fighter ${fighter.name} the ${fighter.constructor.name} added to the arena.`);
            }
        } else {
            throw new MaxFightersError("Maximum number of fighters reached for this player.");
        }
    }

    public listFighters(player: number): Character[] {
        if (player === 1) {
            console.log("Listing fighters for Player 1:");
            console.log(this.fighters1);
            return this.fighters1;
        } else if (player === 2) {
            console.log("Listing fighters for Player 2:");
            console.log(this.fighters2);
            return this.fighters2;
        } else {
            throw new Error("Player number must be 1 or 2");
        }

    }

    public findFighterByName(name: string, player: number): Character {
        const fighter = player === 1 ? this.fighters1.find(f => f.name === name) : this.fighters2.find(f => f.name === name);
        if (!fighter) {
            throw new FighterDontFoundError(`Fighter with name ${name} not found`);
        }
        return fighter;
    }

    public battle(fighter1Qnt:number, fighter2Qnt:number, selectedCharacter1:string, selectedCharacter2:string, selectedCharacter1Action:string, selectedCharacter2Action:string, selectedCharacter1Target:string, selectedCharacter2Target:string): void {
        console.log(`Battle started between Player 1 and Player 2 with ${fighter1Qnt} and ${fighter2Qnt} fighters respectively.`);

        if (selectedCharacter1.toLowerCase() == 'warrior'){
            if (selectedCharacter1Action.toLowerCase() == 'attack'){
                //ataque
                Warrior.attack(this.findFighterByName(selectedCharacter1, 1), this.findFighterByName(selectedCharacter1Target, 2));
            }
        }
    }
        
}