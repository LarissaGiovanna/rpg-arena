import { Character } from "../models/Character";
export declare class Arena {
    private fighters;
    addFighter(fighter: Character): void;
    listFighters(): Character[];
    findFighterByName(name: string): Character;
    battle(fighter1Name: string, fighter2Name: string): void;
}
//# sourceMappingURL=Arena.d.ts.map