import { Character } from "../models/Character.js";
import { Warrior } from "../models/Warrior.js";
import { Cleric } from "../models/Cleric.js";
import { Mage } from "../models/Mage.js";
import { Arrowman } from "../models/ArrowMan.js";
import { FighterDontFoundError } from "../errors/FighterDontFoundError.js";
import { MaxFightersError } from "../errors/MaxFightersError.js";
export class Arena {
    constructor() {
        this.fighters1 = [];
        this.fighters2 = [];
    }
    addFighter(fighter, player) {
        if (player === 1 && this.fighters1.length < 3) {
            if (this.fighters1.find(f => f.name === fighter.name)) {
                throw new Error(`Fighter with name ${fighter.name} already exists for Player 1`);
            }
            else {
                this.fighters1.push(fighter);
                console.log(`Fighter ${fighter.name} the ${fighter.constructor.name} added to the arena.`);
            }
        }
        else if (player === 2 && this.fighters2.length < 3) {
            if (this.fighters2.find(f => f.name === fighter.name)) {
                throw new Error(`Fighter with name ${fighter.name} already exists for Player 2`);
            }
            else {
                this.fighters2.push(fighter);
                console.log(`Fighter ${fighter.name} the ${fighter.constructor.name} added to the arena.`);
            }
        }
        else {
            throw new MaxFightersError("Maximum number of fighters reached for this player.");
        }
    }
    listFighters(player) {
        if (player === 1) {
            console.log("Listing fighters for Player 1:");
            console.log(this.fighters1);
            return this.fighters1;
        }
        else if (player === 2) {
            console.log("Listing fighters for Player 2:");
            console.log(this.fighters2);
            return this.fighters2;
        }
        else {
            throw new Error("Player number must be 1 or 2");
        }
    }
    findFighterByName(name, player) {
        const fighter = player === 1 ? this.fighters1.find(f => f.name === name) : this.fighters2.find(f => f.name === name);
        if (!fighter) {
            throw new FighterDontFoundError(`Fighter with name ${name} not found`);
        }
        return fighter;
    }
    battle(fighter1Qnt, fighter2Qnt, selectedCharacter1, selectedCharacter2, selectedCharacter1Action, selectedCharacter2Action, selectedCharacter1Target, selectedCharacter2Target) {
        console.log(`Battle started between Player 1 and Player 2 with ${fighter1Qnt} and ${fighter2Qnt} fighters respectively.`);
        if (selectedCharacter1.toLowerCase() == 'warrior') {
            if (selectedCharacter1Action.toLowerCase() == 'attack') {
                //ataque
                Warrior.attack(this.findFighterByName(selectedCharacter1, 1), this.findFighterByName(selectedCharacter1Target, 2));
            }
        }
    }
}
//# sourceMappingURL=Arena.js.map