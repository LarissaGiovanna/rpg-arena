import { ClassCharacter } from "../enums/ClassCharacter";
export class Character {
    constructor(name, charClass, level) {
        this.defense = 0;
        this.name = name;
        this.class = charClass;
        this.level = level;
        this.life = level * 10;
        this.maxLife = 200;
        this.inventory = [];
    }
    //basic infos
    getLife() {
        return this.life;
    }
    setLife(life) {
        this.life = life;
    }
    isAlive() {
        return this.life > 0;
    }
    //actions
    attack(target) {
        const damage = this.level * 5;
        target.receiveDamage(damage);
        return damage;
    }
    receiveDamage(damage) {
        const actualDamage = Math.max(damage - this.defense, 0);
        this.life -= actualDamage;
    }
    heal(amount) {
        this.life += amount;
    }
    addItemToInventory(item) {
        if (this.inventory.length <= 5) {
            this.inventory.push(item);
        }
        else {
            throw new Error;
        }
    }
    useItem(item) {
        const itemIndex = this.inventory.indexOf(item);
        if (itemIndex !== -1) {
            item.use();
            this.inventory.splice(itemIndex, 1);
        }
    }
}
//# sourceMappingURL=Character.js.map