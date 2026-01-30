import { Character } from "../models/Character.js";
export declare class Arena {
    private fighters1;
    private fighters2;
    addFighter(fighter: Character, player: number): void;
    listFighters(player: number): Character[];
    findFighterByName(name: string, player: number): Character;
    battle(fighter1Qnt: number, fighter2Qnt: number, selectedCharacter1: string, selectedCharacter2: string, selectedCharacter1Action: string, selectedCharacter2Action: string, selectedCharacter1Target: string, selectedCharacter2Target: string): void;
}
//# sourceMappingURL=Arena.d.ts.map