# RPG Arena 

<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue.svg)](./README.en.md)
[![Português](https://img.shields.io/badge/lang-Portugu%C3%AAs-green.svg)](./README.md)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Um sistema de batalha RPG por turnos desenvolvido com TypeScript e POO**

[🎯 Sobre](#-sobre) • [✨ Features](#-features) • [🏗️ Arquitetura](#️-arquitetura) • [🚀 Como Rodar](#-como-rodar) • [🎲 Como Jogar](#-como-jogar) • [📚 Documentação](#-documentação)

</div>

---

## 🎯 Sobre

**RPG Arena** é um jogo de batalha por turnos desenvolvido como projeto final de um curso de TypeScript, aplicando conceitos de **Programação Orientada a Objetos (POO)** como:

- ✅ **Herança** (classes especializadas de personagens)
- ✅ **Polimorfismo** (métodos sobrescritos)
- ✅ **Encapsulamento** (atributos privados e getters/setters)
- ✅ **Interfaces** (IItem)
- ✅ **Enums** (ClassCharacter, Rarity)
- ✅ **Tratamento de Exceções** (erros personalizados)
- ✅ **Abstração** (classe base Character)

---

## ✨ Features

### 🎭 4 Classes de Personagens

| Classe | HP | Mana | Ataque | Defesa | Habilidade Especial |
|--------|-----|------|--------|--------|---------------------|
| **⚔️ Warrior** | 150 | - | 18 | Alto | Warrior Attack (dano 2x) |
| **🔮 Mage** | 80 | 100 | 12 | Baixo | Fireball (-30 mana, dano 3x) |
| **🏹 Arrowman** | 100 | 50 | 15 | Médio | Precise Shot (-15 mana, 30% crítico) |
| **✨ Cleric** | 90 | 120 | 8 | Médio | Holy Smite / Heal |

### 🎒 Sistema de Inventário
- Máximo de **5 itens** por personagem
- Poções de Vida e Mana
- Itens com raridade (Comum → Lendário)
- Restrições por classe

### ⚔️ Sistema de Combate
- Batalhas por turnos entre 2 jogadores
- Cada jogador escolhe até **3 lutadores**
- Escolha estratégica de:
  - 🎯 Personagem atacante
  - 🔥 Ação (ataque básico ou habilidade)
  - 🎯 Alvo inimigo
- Barras de HP/Mana em tempo real
- Console de batalha com logs detalhados

### 🛡️ Sistema de Raridade de Itens
```
Common → Uncommon → Rare → Epic → Legendary
```

---

## 🏗️ Arquitetura

```
rpg-arena/
├── src/
│   ├── enums/
│   │   ├── ClassCharacter.ts    # Warrior, Mage, Arrowman, Cleric
│   │   ├── Rarity.ts            # Common, Uncommon, Rare, Epic, Legendary
│   │   └── WhoCanUse.ts         # Restrições de uso de itens
│   │
│   ├── interfaces/
│   │   └── IItem.ts             # Interface para itens
│   │
│   ├── errors/
│   │   ├── InventoryFullError.ts
│   │   ├── NoEnoughManaError.ts
│   │   ├── MaxFightersError.ts
│   │   └── FighterDontFoundError.ts
│   │
│   ├── models/
│   │   ├── Character.ts         # Classe base abstrata
│   │   ├── Warrior.ts           # Herda de Character
│   │   ├── Mage.ts              # Herda de Character
│   │   ├── Arrowman.ts          # Herda de Character
│   │   └── Cleric.ts            # Herda de Character
│   │
│   ├── items/
│   │   ├── HealthPotion.ts      # Implementa IItem
│   │   ├── ManaPotion.ts        # Implementa IItem
│   │   └── DiamondSword.ts      # Implementa IItem
│   │
│   ├── game/
│   │   └── Arena.ts             # Gerencia batalhas e lutadores
│   │
│   ├── public/
│   │   ├── index.html           # Interface do jogo
│   │   ├── styles/
│   │   │   └── style.css
│   │   └── assets/              # Ícones dos personagens
│   │
│   ├── app.ts                   # Arquivo principal (integração frontend/backend)
│   └── dist/                    # Código compilado
│
├── tsconfig.json
└── package.json
```

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/LarissaGiovanna/rpg-arena.git

# Entre na pasta do projeto
cd rpg-arena

# Instale as dependências
npm install

# Compile o TypeScript
npx tsc

# Inicie o servidor local
npx live-server src/public
```

O jogo abrirá automaticamente em `http://localhost:8080` 🎮

---

## 🎲 Como Jogar

### 1️⃣ Seleção de Time
- **Player 1** e **Player 2** escolhem até **3 lutadores** cada
- Escolha classes diferentes para estratégias variadas

### 2️⃣ Início da Batalha
- Clique em **"Start Battle"** após selecionar os times
- A interface de batalha será exibida

### 3️⃣ Turnos
Cada jogador, em seu turno, deve:
1. Escolher qual personagem do seu time vai atacar
2. Escolher a ação:
   - **Ataque Básico** (sem custo)
   - **Habilidade Especial** (consome mana)
3. Escolher o alvo inimigo
4. Clicar em **"Execute Action"**

### 4️⃣ Vitória
- O jogo termina quando todos os personagens de um time forem derrotados
- O vencedor é anunciado! 🏆

---

## 📚 Documentação

### 🧩 Classes Principais

#### `Character` (Abstrata)
Classe base para todos os personagens.

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
Gerencia os lutadores e a lógica de batalha.

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

### 🔥 Habilidades Especiais

| Personagem | Habilidade | Custo Mana | Efeito |
|------------|-----------|------------|--------|
| Warrior | `WarriorAttack()` | - | Dano: `level * 2 + attackPower` |
| Mage | `Fireball()` | 30 | Dano: `level * 3 + attackPower` |
| Mage | `Meditate()` | - | Recupera 25 mana |
| Arrowman | `PreciseShot()` | 15 | Dano: `level * 1.5 + attackPower` |
| Arrowman | `attack()` (Override) | - | 30% chance de crítico (dano 2x) |
| Cleric | `HolySmite()` | 20 | Dano: `level * 2 + attackPower` |
| Cleric | `ClericHeal()` | - | Cura: `level * 5` |

### 🎯 Fórmula de Dano

```typescript
// Dano recebido
actualDamage = Math.max(damage - defense, 0);

// Ataque básico
damage = level * 5;
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** 5.9.3 - Linguagem principal
- **HTML5** - Estrutura da interface
- **CSS3** - Estilização
- **Live Server** - Servidor de desenvolvimento

### Configurações do TypeScript
```json
{
  "target": "es2020",
  "module": "esnext",
  "strict": true,
  "outDir": "./src/dist"
}
```

---

## 🎓 Conceitos de POO Aplicados

### 1. **Herança**
```typescript
// Character (base) → Warrior, Mage, Arrowman, Cleric (derivadas)
export class Warrior extends Character { ... }
```

### 2. **Polimorfismo**
```typescript
// Arrowman sobrescreve o método attack() com chance de crítico
public attack(target: Character): number {
    if (Math.random() <= 0.3) {
        return damage * 2; // Crítico!
    }
    return damage;
}
```

### 3. **Encapsulamento**
```typescript
private maxLife: number;

public getLife(): number {
    return this.life;
}
```

### 4. **Abstração**
```typescript
export abstract class Character {
    // Força subclasses a implementarem suas próprias características
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

### 6. **Tratamento de Exceções**
```typescript
if (this.mana < 30) {
    throw new NoEnoughManaError("Not enough mana!");
}
```

---

## 🐛 Erros Personalizados

| Erro | Quando ocorre |
|------|---------------|
| `InventoryFullError` | Inventário tem 5 itens |
| `NoEnoughManaError` | Mana insuficiente para habilidade |
| `MaxFightersError` | Tentativa de adicionar mais de 3 lutadores |
| `FighterDontFoundError` | Lutador não encontrado na arena |

---

## 👩‍💻 Autora

Desenvolvido por **LarissaGiovanna** como projeto final do curso de TypeScript.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LarissaGiovanna)

- ChatGPT foi usado para a criação das imagens;
- GitHub Copilot foi usado para completar e sugerir alguns códigos para acelerar o processo de desenvolvimento.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

<div align="center">

**⚔️ Que a melhor estratégia vença! ⚔️**

</div>
