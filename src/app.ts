import { Character } from "./models/Character";
import { Warrior } from "./models/Warrior";
import { Arena } from "./game/Arena.js";
import { Cleric } from "./models/Cleric.js";
import { Mage } from "./models/Mage.js";
import { Arrowman } from "./models/ArrowMan.js";

const arena = new Arena();

function selectFighter(name: string, charClass: string, level: number): Character[] {
    switch (charClass.toLowerCase()) {
        case "warrior":
            arena.addFighter(new Warrior(name, level));
            return arena.listFighters();
        
        case "mage":
            arena.addFighter(new Mage(name, level));
            return arena.listFighters();
        case "cleric":
            arena.addFighter(new Cleric(name, level));
            return arena.listFighters();
        case "arrowman":
            arena.addFighter(new Arrowman(name, level));
            return arena.listFighters();
        default:
            throw new Error(`Class ${charClass} not recognized`);
    }
}
