import { Character } from "./models/Character.js";
import { Warrior } from "./models/Warrior.js";
import { Arena } from "./game/Arena.js";
import { Cleric } from "./models/Cleric.js";
import { Mage } from "./models/Mage.js";
import { Arrowman } from "./models/ArrowMan.js";

const arena = new Arena();

// Função para adicionar mensagens no console do HTML
function logToConsole(message: string): void {
    const consoleDiv = document.querySelector('.console');
    if (consoleDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        consoleDiv.appendChild(p);
        // Auto-scroll para a última mensagem
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }
}
let player1Fighters: string[] = [];
let player2Fighters: string[] = [];

//initial setup
function selectFighter(name: string, charClass: string, level: number, player: number): void {
    switch (charClass.toLowerCase()) {
        case "warrior":
            arena.addFighter(new Warrior(name, level), player);
            logToConsole(`Player ${player}: ${name} (Warrior) added to the team!`);
            if (player === 1) {
                player1Fighters.push('Warrior: ' + name);
                logToConsole(player1Fighters.toString());
            } else {
                player2Fighters.push('Warrior: ' + name);
                logToConsole(player2Fighters.toString());
            }
            break;
        case "mage":
            arena.addFighter(new Mage(name, level), player);
            logToConsole(`Player ${player}: ${name} (Mage) added to the team!`);
            if (player === 1) {
                player1Fighters.push('Mage: ' + name);
                logToConsole(player1Fighters.toString());
            } else {
                player2Fighters.push('Mage: ' + name);
                logToConsole(player2Fighters.toString());
            }
            break;
        case "cleric":
            arena.addFighter(new Cleric(name, level), player);
            logToConsole(`Player ${player}: ${name} (Cleric) added to the team!`);
            if (player === 1) {
                player1Fighters.push('Cleric: ' + name);
                logToConsole(player1Fighters.toString());
            } else {
                player2Fighters.push('Cleric: ' + name);
                logToConsole(player2Fighters.toString());
            }
            break;
        case "arrowman":
            arena.addFighter(new Arrowman(name, level), player);
            logToConsole(`Player ${player}: ${name} (ArrowMan) added to the team!`);
            if (player === 1) {
                player1Fighters.push('ArrowMan: ' + name);
                logToConsole(player1Fighters.toString());
            } else {
                player2Fighters.push('ArrowMan: ' + name);
                logToConsole(player2Fighters.toString());
            }
            break;
        default:
            logToConsole(`Class ${charClass} not recognized`);
            throw new Error(`Class ${charClass} not recognized`);
    }
}

function startBattle(): void {
    //initial setup
    const fightersContainer = document.getElementById('fighters_container');
    if (fightersContainer) {
        fightersContainer.style.display = 'none';
    }

    logToConsole("Battle started between Player 1 and Player 2!");
    const areaPlayer1 = document.getElementById('player1-area');
    const areaPlayer2 = document.getElementById('player2-area');
    if (areaPlayer1 && areaPlayer2) {
        player1Fighters.forEach(fighterInfo => {
            const fighterDiv = document.createElement('div');
            fighterDiv.className = 'fighter-card';
            fighterDiv.textContent = fighterInfo;
            console.log(fighterInfo);
            if (fighterInfo.includes('Warrior')) {
                const warriorImg = document.createElement('img');
                warriorImg.src = './assets/warrior.svg';
                warriorImg.alt = 'Warrior';
                fighterDiv.appendChild(warriorImg);
            } else if (fighterInfo.includes('Mage')) {
                const mageImg = document.createElement('img');
                mageImg.src = './assets/mage.svg';
                mageImg.alt = 'Mage';
                fighterDiv.appendChild(mageImg);
            } else if (fighterInfo.includes('Cleric')) {
                const clericImg = document.createElement('img');
                clericImg.src = './assets/cleric.svg';
                clericImg.alt = 'Cleric';
                fighterDiv.appendChild(clericImg);
            } else if (fighterInfo.includes('ArrowMan')) {
                const arrowmanImg = document.createElement('img');
                arrowmanImg.src = './assets/arrowman.svg';
                arrowmanImg.alt = 'ArrowMan';
                fighterDiv.appendChild(arrowmanImg);
            }
            areaPlayer1.appendChild(fighterDiv);
        });

        player2Fighters.forEach(fighterInfo => {
            const fighterDiv = document.createElement('div');
            fighterDiv.className = 'fighter-card';
            fighterDiv.textContent = fighterInfo;
            console.log(fighterInfo);
            if (fighterInfo.includes('Warrior')) {
                const warriorImg = document.createElement('img');
                warriorImg.src = './assets/warrior.svg';
                warriorImg.alt = 'Warrior';
                fighterDiv.appendChild(warriorImg);
            } else if (fighterInfo.includes('Mage')) {
                const mageImg = document.createElement('img');
                mageImg.src = './assets/mage.svg';
                mageImg.alt = 'Mage';
                fighterDiv.appendChild(mageImg);
            } else if (fighterInfo.includes('Cleric')) {
                const clericImg = document.createElement('img');
                clericImg.src = './assets/cleric.svg';
                clericImg.alt = 'Cleric';
                fighterDiv.appendChild(clericImg);
            } else if (fighterInfo.includes('ArrowMan')) {
                const arrowmanImg = document.createElement('img');
                arrowmanImg.src = './assets/arrowman.svg';
                arrowmanImg.alt = 'ArrowMan';
                fighterDiv.appendChild(arrowmanImg);
            }
            areaPlayer2.appendChild(fighterDiv);
        });
        areaPlayer1.style.display = 'block';
        areaPlayer2.style.display = 'block';
    }

    //battle
    
}

// destaque personagens style
// Expondo para o HTML (script type="module")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).selectFighter = selectFighter;
(window as any).startBattle = startBattle;