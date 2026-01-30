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

    private currentPlayer: number = 1;
    private battleActive: boolean = false;
    private battleLog: string[] = [];

    public getCurrentPlayer(): number {
        return this.currentPlayer;
    }

    public switchTurn(): void {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    public isBattleActive(): boolean {
        return this.battleActive;
    }

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

    public startBattle(): void {
        this.battleActive = true;
        console.log("Battle started!");
        this.battleLog = [];
        this.currentPlayer = 1; // Player 1 starts
    }

    public addLog(message: string): void {
        this.battleLog.push(message);
    }
    
    public getAliveFighters(player: number): Character[] {
        if(player === 1){
            let fighters = this.fighters1;
            return fighters.filter(f => f.isAlive());
        }else{
            let fighters = this.fighters2;
            return fighters.filter(f => f.isAlive());
        }
    }

    public checkWinner(): number | null {
        const player1Alive = this.getAliveFighters(1).length > 0;
        const player2Alive = this.getAliveFighters(2).length > 0;

        if (!player1Alive) return 2;
        if (!player2Alive) return 1;
        return null;
    }
}