import { Character } from "./models/Character.js";
import { Warrior } from "./models/Warrior.js";
import { Arena } from "./game/Arena.js";
import { Cleric } from "./models/Cleric.js";
import { Mage } from "./models/Mage.js";
import { Arrowman } from "./models/ArrowMan.js";
const arena = new Arena();
// Função para adicionar mensagens no console do HTML
function logToConsole(message) {
    const consoleDiv = document.querySelector('.console');
    if (consoleDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        consoleDiv.appendChild(p);
        // Auto-scroll para a última mensagem
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }
}
let player1Fighters = [];
let player2Fighters = [];
//initial setup
function selectFighter(name, charClass, level, player) {
    switch (charClass.toLowerCase()) {
        case "warrior":
            arena.addFighter(new Warrior(name, level), player);
            logToConsole(`Player ${player}: ${name} (Warrior) added to the team!`);
            if (player === 1) {
                player1Fighters.push('Warrior: ' + name);
                logToConsole(player1Fighters.toString());
            }
            else {
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
            }
            else {
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
            }
            else {
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
            }
            else {
                player2Fighters.push('ArrowMan: ' + name);
                logToConsole(player2Fighters.toString());
            }
            break;
        default:
            logToConsole(`Class ${charClass} not recognized`);
            throw new Error(`Class ${charClass} not recognized`);
    }
}
function startBattle() {
    //initial setup
    const chooseFighter = document.getElementById('choose_fighter');
    const startBattleBtn = document.getElementById('start_battle_btn');
    if (startBattleBtn) {
        startBattleBtn.style.display = 'none';
    }
    if (chooseFighter) {
        chooseFighter.style.display = 'none';
    }
    logToConsole("Battle started between Player 1 and Player 2!");
    //placing the fighters in the battle area
    showBattleInterface();
    logToConsole("Fighters are in position. Player 1 starts the battle!");
    //battle
    createActionPanel();
}
function showBattleInterface() {
    const areaPlayer1 = document.getElementById('player1-area');
    const areaPlayer2 = document.getElementById('player2-area');
    if (areaPlayer1 && areaPlayer2) {
        // Renderizar personagens do Player 1
        areaPlayer1.innerHTML = '<h2>Player 1 Team</h2>';
        arena.listFighters(1).forEach(fighter => {
            areaPlayer1.innerHTML += createFighterCard(fighter, 1);
        });
        // Renderizar personagens do Player 2
        areaPlayer2.innerHTML = '<h2>Player 2 Team</h2>';
        arena.listFighters(2).forEach(fighter => {
            areaPlayer2.innerHTML += createFighterCard(fighter, 2);
        });
        areaPlayer1.style.display = 'block';
        areaPlayer2.style.display = 'block';
    }
}
function createFighterCard(fighter, player) {
    return `
        <div class="fighter-card ${fighter.isAlive() ? 'alive' : 'dead'}" 
             id="fighter-${player}-${fighter.name}">
            <h3>${fighter.name}</h3>
            <img src="src/public/assets/${fighter.constructor.name.toLowerCase()}.svg" alt="${fighter.constructor.name}">
            <p>Class: ${fighter.class}</p>
            <div class="hp-bar">
                <div class="hp-fill" style="width: ${(fighter.getLife() / fighter['maxLife']) * 100}%"></div>
                <span>${fighter.getLife()} HP</span>
            </div>
            <p>Mana: ${fighter.mana}</p>
            <p>Attack: ${fighter.attackPower} | Defense: ${fighter.defense}</p>
        </div>
    `;
}
function createActionPanel() {
    const actionPanel = document.getElementById('action-panel');
    if (!actionPanel) {
        // Criar elemento se não existir
        const panel = document.createElement('div');
        panel.id = 'action-panel';
        document.querySelector('main')?.appendChild(panel);
    }
    updateActionPanel();
}
function updateActionPanel() {
    const actionPanel = document.getElementById('action-panel');
    const fightContainer = document.getElementById('fight-container');
    if (fightContainer) {
        fightContainer.style.display = 'flex';
    }
    if (!actionPanel)
        createActionPanel();
    else {
        const currentPlayer = arena.getCurrentPlayer();
        const aliveFighters = arena.getAliveFighters(currentPlayer);
        actionPanel.innerHTML = `
        <h2>Player ${currentPlayer}'s Turn</h2>
        
        <div class="action-section">
            <label>1. Choose your attacker:</label>
            <select id="attacker-select" onchange="updateActionOptions()">
                ${aliveFighters.map(f => `<option value="${f.name}">${f.name} (${f.class})</option>`).join('')}
            </select>
        </div>

        <div class="action-section">
            <label>2. Choose action:</label>
            <select id="action-select" onchange="updateActionOptions()">
                <option value="basic">Basic Attack</option>
                <option value="skill">Special Skill</option>
            </select>
        </div>

        <div class="action-section" id="skill-options" style="display: none;">
            <label>Choose skill:</label>
            <select id="skill-select">
                <!-- Preenchido dinamicamente -->
            </select>
        </div>

        <div class="action-section">
            <label>3. Choose target:</label>
            <select id="target-select">
                ${arena.getAliveFighters(currentPlayer === 1 ? 2 : 1).map(f => `<option value="${f.name}">${f.name} (${f.class})</option>`).join('')}
            </select>
        </div>

        <button onclick="executeAction()">Execute Action</button>
    `;
    }
}
function updateActionOptions() {
    const actionSelect = document.getElementById('action-select');
    const skillOptions = document.getElementById('skill-options');
    const skillSelect = document.getElementById('skill-select');
    const attackerSelect = document.getElementById('attacker-select');
    if (!actionSelect || !skillOptions || !skillSelect || !attackerSelect)
        return;
    if (actionSelect.value === 'skill') {
        // Pegar o lutador selecionado
        const currentPlayer = arena.getCurrentPlayer();
        const attackerName = attackerSelect.value;
        const attacker = arena.findFighterByName(attackerName, currentPlayer);
        // Determinar as habilidades baseado na classe
        let skills = [];
        if (attacker instanceof Warrior) {
            skills = ['Warrior Attack'];
        }
        else if (attacker instanceof Mage) {
            skills = ['Fireball'];
        }
        else if (attacker instanceof Arrowman) {
            skills = ['Precise Shot'];
        }
        else if (attacker instanceof Cleric) {
            skills = ['Holy Smite'];
        }
        // Popular o select com as habilidades
        skillSelect.innerHTML = skills.map(skill => `<option value="${skill}">${skill}</option>`).join('');
        // Mostrar o skill-options
        skillOptions.style.display = 'block';
    }
    else {
        // Esconder o skill-options se "Basic Attack" foi selecionado
        skillOptions.style.display = 'none';
    }
}
function executeAction() {
    const attackerName = document.getElementById('attacker-select').value;
    const actionType = document.getElementById('action-select').value;
    const targetName = document.getElementById('target-select').value;
    const currentPlayer = arena.getCurrentPlayer();
    const enemyPlayer = currentPlayer === 1 ? 2 : 1;
    try {
        const attacker = arena.findFighterByName(attackerName, currentPlayer);
        const target = arena.findFighterByName(targetName, enemyPlayer);
        let damage = 0;
        if (actionType === 'basic') {
            damage = attacker.attack(target);
            logToConsole(`${attacker.name} attacks ${target.name} for ${damage} damage!`);
        }
        else if (actionType === 'skill') {
            damage = executeSkill(attacker, target);
            // Atualizar o atacante também (depois de usar skill que consome mana)
            updateFighterDisplay(attacker, currentPlayer);
        }
        // Atualizar interface do alvo
        updateFighterDisplay(target, enemyPlayer);
        // Verificar se há vencedor
        const winner = arena.checkWinner();
        if (winner) {
            endBattle(winner);
            return;
        }
        // Trocar turno
        arena.switchTurn();
        logToConsole(`\n--- Player ${arena.getCurrentPlayer()}'s turn ---`);
        updateActionPanel();
    }
    catch (error) {
        logToConsole(`ERROR: ${error.message}`);
    }
}
function executeSkill(attacker, target) {
    let damage = 0;
    if (attacker instanceof Warrior) {
        damage = attacker.WarriorAttack(target);
        logToConsole(`${attacker.name} uses Warrior Attack on ${target.name}! ${damage} damage!`);
    }
    else if (attacker instanceof Mage) {
        damage = attacker.Fireball(target);
        logToConsole(`${attacker.name} casts Fireball on ${target.name}! ${damage} damage!`);
    }
    else if (attacker instanceof Arrowman) {
        damage = attacker.PreciseShot(target);
        logToConsole(`${attacker.name} shoots Precise Shot at ${target.name}! ${damage} damage!`);
    }
    else if (attacker instanceof Cleric) {
        damage = attacker.HolySmite(target);
        logToConsole(`${attacker.name} uses Holy Smite on ${target.name}! ${damage} damage!`);
    }
    return damage;
}
function updateFighterDisplay(fighter, player) {
    const card = document.getElementById(`fighter-${player}-${fighter.name}`);
    if (!card)
        return;
    // Atualizar HP
    const hpPercentage = (fighter.getLife() / fighter['maxLife']) * 100;
    card.querySelector('.hp-fill')?.setAttribute('style', `width: ${hpPercentage}%`);
    const hpSpan = card.querySelector('.hp-fill + span');
    if (hpSpan) {
        hpSpan.textContent = `${fighter.getLife()} HP`;
    }
    // Atualizar Mana
    const manaP = Array.from(card.querySelectorAll('p')).find(p => p.textContent.includes('Mana:'));
    if (manaP) {
        manaP.textContent = `Mana: ${fighter.mana}`;
    }
    // Marcar como morto
    if (!fighter.isAlive()) {
        card.classList.add('dead');
        logToConsole(`💀 ${fighter.name} has been defeated!`);
    }
}
function endBattle(winner) {
    logToConsole(`\n🏆 === PLAYER ${winner} WINS! === 🏆`);
    const actionPanel = document.getElementById('action-panel');
    if (actionPanel) {
        actionPanel.innerHTML = `
            <h1>🎉 Player ${winner} Wins! 🎉</h1>
            <button onclick="location.reload()">Play Again</button>
        `;
    }
}
// destaque personagens style
// Expondo para o HTML (script type="module")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.selectFighter = selectFighter;
window.startBattle = startBattle;
window.executeAction = executeAction;
window.updateActionOptions = updateActionOptions;
//# sourceMappingURL=app.js.map