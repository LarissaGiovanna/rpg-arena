# RPG Arena 

<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue.svg)](./README.en.md)
[![Português](https://img.shields.io/badge/lang-Portugu%C3%AAs-green.svg)](./README.md)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A turn-based RPG battle system developed with TypeScript and OOP**

[🎯 About](#-about) • [✨ Features](#-features) • [🏗️ Architecture](#️-architecture) • [🚀 How to Run](#-how-to-run) • [🎲 How to Play](#-how-to-play) • [📚 Documentation](#-documentation)

</div>

---

## 🎯 About

**RPG Arena** is a turn-based battle game developed as a final project for a TypeScript course, applying **Object-Oriented Programming (OOP)** concepts such as:

- ✅ **Inheritance** (specialized character classes)
- ✅ **Polymorphism** (overridden methods)
- ✅ **Encapsulation** (private attributes and getters/setters)
- ✅ **Interfaces** (IItem)
- ✅ **Enums** (ClassCharacter, Rarity)
- ✅ **Exception Handling** (custom errors)
- ✅ **Abstraction** (Character base class)

---

## ✨ Features

### 🎭 4 Character Classes

| Class | HP | Mana | Attack | Defense | Special Ability |
|--------|-----|------|--------|---------|---------------------|
| **⚔️ Warrior** | 150 | - | 18 | High | Warrior Attack (2x damage) |
| **🔮 Mage** | 80 | 100 | 12 | Low | Fireball (-30 mana, 3x damage) |
| **🏹 Arrowman** | 100 | 50 | 15 | Medium | Precise Shot (-15 mana, 30% critical) |
| **✨ Cleric** | 90 | 120 | 8 | Medium | Holy Smite / Heal |

### 🎒 Inventory System
- Maximum of **5 items** per character
- Health and Mana potions
- Items with rarity (Common → Legendary)
- Class restrictions

### ⚔️ Combat System
- Turn-based battles between 2 players
- Each player chooses up to **3 fighters**
- Strategic choice of:
  - 🎯 Attacking character
  - 🔥 Action (basic attack or special ability)
  - 🎯 Enemy target
- Real-time HP/Mana bars
- Battle console with detailed logs

### 🛡️ Item Rarity System
```
Common → Uncommon → Rare → Epic → Legendary
```

---

## 🏗️ Architecture

```
rpg-arena/
├── src/
│   ├── enums/
│   │   ├── ClassCharacter.ts    # Warrior, Mage, Arrowman, Cleric
│   │   ├── Rarity.ts            # Common, Uncommon, Rare, Epic, Legendary
│   │   └── WhoCanUse.ts         # Item usage restrictions
│   │
│   ├── interfaces/
│   │   └── IItem.ts             # Interface for items
│   │
│   ├── errors/
│   │   ├── InventoryFullError.ts
│   │   ├── NoEnoughManaError.ts
│   │   ├── MaxFightersError.ts
│   │   └── FighterDontFoundError.ts
│   │
│   ├── models/
│   │   ├── Character.ts         # Abstract base class
│   │   ├── Warrior.ts           # Inherits from Character
│   │   ├── Mage.ts              # Inherits from Character
│   │   ├── Arrowman.ts          # Inherits from Character
│   │   └── Cleric.ts            # Inherits from Character
│   │
│   ├── items/
│   │   ├── HealthPotion.ts      # Implements IItem
│   │   ├── ManaPotion.ts        # Implements IItem
│   │   └── DiamondSword.ts      # Implements IItem
│   │
│   ├── game/
│   │   └── Arena.ts             # Manages battles and fighters
│   │
│   ├── public/
│   │   ├── index.html           # Game interface
│   │   ├── styles/
│   │   │   └── style.css
│   │   └── assets/              # Character icons
│   │
│   ├── app.ts                   # Main file (frontend/backend integration)
│   └── dist/                    # Compiled code
│
├── tsconfig.json
└── package.json
```

---

## 🚀 How to Run

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/LarissaGiovanna/rpg-arena.git

# Enter the project folder
cd rpg-arena

# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Start local server
npx live-server src/public
```

The game will automatically open at `http://localhost:8080` 🎮

---

## 🎲 How to Play

### 1️⃣ Team Selection
- **Player 1** and **Player 2** choose up to **3 fighters** each
- Choose different classes for varied strategies

### 2️⃣ Battle Start
- Click **"Start Battle"** after selecting teams
- The battle interface will be displayed

### 3️⃣ Turns
Each player, on their turn, must:
1. Choose which character from their team will attack
2. Choose the action:
   - **Basic Attack** (no cost)
   - **Special Ability** (consumes mana)
3. Choose the enemy target
4. Click **"Execute Action"**

### 4️⃣ Victory
- The game ends when all characters from one team are defeated
- The winner is announced! 🏆

---

## 📚 Documentation

### 🧩 Main Classes

#### `Character` (Abstract)
Base class for all characters.

```typescript
abstract class Character {
    readonly name: string;
    class: ClassCharacter;
    level: number;
    life: number;
    mana: number;
    attackPower: number;
    defense: number;
    inventory: IItem[];
    
    attack(target: Character): number;
    receiveDamage(damage: number): void;
    heal(amount: number): void;
    isAlive(): boolean;
    addItemToInventory(item: IItem): void;
    useItem(item: IItem): void;
}
```

#### `Arena`
Manages fighters and battle logic.

```typescript
class Arena {
    addFighter(fighter: Character, player: number): void;
    listFighters(player: number): Character[];
    findFighterByName(name: string, player: number): Character;
    battle(...): void;
    getCurrentPlayer(): number;
    switchTurn(): void;
    checkWinner(): number | null;
}
```

### 🔥 Special Abilities

| Character | Ability | Mana Cost | Effect |
|------------|-----------|------------|--------|
| Warrior | `WarriorAttack()` | - | Damage: `level * 2 + attackPower` |
| Mage | `Fireball()` | 30 | Damage: `level * 3 + attackPower` |
| Mage | `Meditate()` | - | Recovers 25 mana |
| Arrowman | `PreciseShot()` | 15 | Damage: `level * 1.5 + attackPower` |
| Arrowman | `attack()` (Override) | - | 30% chance of critical (2x damage) |
| Cleric | `HolySmite()` | 20 | Damage: `level * 2 + attackPower` |
| Cleric | `ClericHeal()` | - | Healing: `level * 5` |

### 🎯 Damage Formula

```typescript
// Damage received
actualDamage = Math.max(damage - defense, 0);

// Basic attack
damage = level * 5;
```

---

## 🛠️ Technologies Used

- **TypeScript** 5.9.3 - Main language
- **HTML5** - Interface structure
- **CSS3** - Styling
- **Live Server** - Development server

### TypeScript Configuration
```json
{
  "target": "es2020",
  "module": "esnext",
  "strict": true,
  "outDir": "./src/dist"
}
```

---

## 🎓 OOP Concepts Applied

### 1. **Inheritance**
```typescript
// Character (base) → Warrior, Mage, Arrowman, Cleric (derived)
export class Warrior extends Character { ... }
```

### 2. **Polymorphism**
```typescript
// Arrowman overrides the attack() method with critical chance
public attack(target: Character): number {
    if (Math.random() <= 0.3) {
        return damage * 2; // Critical!
    }
    return damage;
}
```

### 3. **Encapsulation**
```typescript
private maxLife: number;

public getLife(): number {
    return this.life;
}
```

### 4. **Abstraction**
```typescript
export abstract class Character {
    // Forces subclasses to implement their own characteristics
}
```

### 5. **Interfaces**
```typescript
export interface IItem {
    name: string;
    description: string;
    rarity: Rarity;
    use(): void;
}
```

### 6. **Exception Handling**
```typescript
if (this.mana < 30) {
    throw new NoEnoughManaError("Not enough mana!");
}
```

---

## 🐛 Custom Errors

| Error | When it occurs |
|------|---------------|
| `InventoryFullError` | Inventory has 5 items |
| `NoEnoughManaError` | Insufficient mana for ability |
| `MaxFightersError` | Attempt to add more than 3 fighters |
| `FighterDontFoundError` | Fighter not found in arena |

---

## 👩‍💻 Author

Developed by **LarissaGiovanna** as a final project for a TypeScript course.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LarissaGiovanna)

- ChatGPT was used to create the images;
- GitHub Copilot was used to complete and suggest some code to speed up the development process.

---

## 📄 License

This project was developed for educational purposes.

---

<div align="center">

**⚔️ May the best strategy win! ⚔️**

</div>
