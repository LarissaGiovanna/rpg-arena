import { ClassCharacter } from "../enums/ClassCharacter";
import type { IItem } from "../interfaces/IItem.js";
import { InventoryFullError } from "../errors/InventoryFullError.js";

export abstract class Character {
    public readonly name: string;
    public class: ClassCharacter;
    public level: number;
    public attackPower: number = 0;
    public mana: number = 0;
    public defense: number = 0;
    public life: number;
    private maxLife: number;
    public inventory: IItem[];
    
    public constructor(name: string, charClass: ClassCharacter, level: number){
        this.name = name;
        this.class = charClass;
        this.level = level;
        this.life = level * 10;
        this.maxLife = level * 10;
        this.inventory = [];
    }
    //basic infos
    public getLife(): number {
        return this.life;
    }
    public setLife(life: number): void {
        this.life = life;
    }
    public isAlive(): boolean {
        return this.life > 0;
    }

    //actions
    public attack(target: Character): number {
        const damage = this.level * 5;
        target.receiveDamage(damage);
        return damage;
    }
    public receiveDamage(damage: number): void {
        const actualDamage = Math.max(damage - this.defense, 0);
        this.life -= actualDamage;
    }
    public heal(amount: number): void {
        this.life = Math.min(this.life + amount, this.maxLife);
    }
    public addItemToInventory(item: IItem): void {
        if (this.inventory.length < 5) {
            this.inventory.push(item);
        }else{
            throw new InventoryFullError("Inventory is full");
        }
    }
    public useItem(item: IItem): void {
        const itemIndex = this.inventory.indexOf(item);
        if (itemIndex !== -1) {
            item.use();
            this.inventory.splice(itemIndex, 1);
        }
    }

}