import { Character } from "../models/Character.js";
export declare class Arena {
    private fighters1;
    private fighters2;
    private currentPlayer;
    private battleActive;
    private battleLog;
    getCurrentPlayer(): number;
    switchTurn(): void;
    isBattleActive(): boolean;
    addFighter(fighter: Character, player: number): void;
    listFighters(player: number): Character[];
    findFighterByName(name: string, player: number): Character;
    startBattle(): void;
    addLog(message: string): void;
    getAliveFighters(player: number): Character[];
    checkWinner(): number | null;
}
//# sourceMappingURL=Arena.d.ts.map