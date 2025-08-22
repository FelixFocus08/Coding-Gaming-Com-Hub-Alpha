const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');
const choiceMenu = document.getElementById('choiceMenu');
const selectedSymbolText = document.getElementById('selectedSymbol');
const timerElement = document.getElementById('timer');
const popupOverlay = document.getElementById('popupOverlay');
const popupText = document.getElementById('popupText');
const difficultySelect = document.getElementById('difficultySelect');



let humanClass, botClass, humanTurn;
let startTime, timerInterval;

restartButton.addEventListener('click', () => {
    choiceMenu.style.display = 'block';
    winningMessageElement.innerText = '';
    winningMessageElement.style.display = 'none';
    selectedSymbolText.innerText = '';
    timerElement.innerText = 'Zeit: 0 Sekunden';
    clearInterval(timerInterval);
    resetBoard();
});

function chooseSymbol(symbol) {
    humanClass = symbol;
    botClass = symbol === 'x' ? 'o' : 'x';
    humanTurn = humanClass === 'x';
    selectedSymbolText.innerText = `Du spielst als: ${symbol.toUpperCase()}`;
    choiceMenu.style.display = 'none';
    startGame();
    startTimer();
    if (!humanTurn) botMove(); // Bot beginnt
}

function startGame() {
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS, O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    if (!humanTurn) return;
    const cell = e.target;
    placeMark(cell, humanClass);
    if (checkEnd(humanClass)) return;
    humanTurn = false;
    setTimeout(botMove, 500);
}

function botMove() {
    const difficulty = difficultySelect.value;
    let move;

    if (difficulty === 'easy') {
        move = getRandomMove();
    } else if (difficulty === 'medium') {
        move = getBlockingMove() || getRandomMove();
    } else if (difficulty === 'hard') {
        move = getSmartMove() || getBlockingMove() || getRandomMove();
    } else {
        move = getBestMove(); // Unmöglich
    }

    if (move) {
        placeMark(move, botClass);
        if (checkEnd(botClass)) return;
        humanTurn = true;
    }
}

function placeMark(cell, markClass) {
    cell.classList.add(markClass);
    cell.removeEventListener('click', handleClick);
}

function checkEnd(currentClass) {
    if (checkWin(currentClass)) {
        endGame(false, currentClass);
        return true;
    } else if (isDraw()) {
        endGame(true);
        return true;
    }
    return false;
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination =>
        combination.every(index => cellElements[index].classList.contains(currentClass))
    );
}

function isDraw() {
    return [...cellElements].every(cell =>
        cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    );
}

function endGame(draw, winnerClass = null) {
    clearInterval(timerInterval);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    let message;
    if (draw) {
        message = `Unentschieden! (${timeTaken} Sek.)`;
    } else {
        message = `${winnerClass.toUpperCase()} gewinnt in ${timeTaken} Sek.!`;
    }
    popupText.innerText = message;
    popupOverlay.style.display = 'flex';
}

function resetBoard() {
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS, O_CLASS);
        cell.removeEventListener('click', handleClick);
    });
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        timerElement.innerText = `Zeit: ${seconds} Sekunden`;
    }, 1000);
}

function restartFromPopup() {
    popupOverlay.style.display = 'none';
    choiceMenu.style.display = 'block';
    selectedSymbolText.innerText = '';
    timerElement.innerText = 'Zeit: 0 Sekunden';
    clearInterval(timerInterval);
    resetBoard();
}

function getRandomMove() {
    const empty = [...cellElements].filter(c => !c.classList.contains(X_CLASS) && !c.classList.contains(O_CLASS));
    return empty[Math.floor(Math.random() * empty.length)];
}

function getBlockingMove() {
    return findCriticalMove(humanClass);
}

function getSmartMove() {
    return findCriticalMove(botClass); // versuche zu gewinnen
}

function findCriticalMove(player) {
    for (const combo of WINNING_COMBINATIONS) {
        const cells = combo.map(i => cellElements[i]);
        const marks = cells.map(cell => cell.classList.contains(player));
        const empties = cells.filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS));
        if (marks.filter(Boolean).length === 2 && empties.length === 1) {
            return empties[0];
        }
    }
    return null;
}

function getBestMove() {
    let bestScore = -Infinity;
    let move = null;
    cellElements.forEach((cell, index) => {
        if (!cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS)) {
            cell.classList.add(botClass);
            const score = minimax(false);
            cell.classList.remove(botClass);
            if (score > bestScore) {
                bestScore = score;
                move = cell;
            }
        }
    });
    return move;
}

function minimax(isMaximizing) {
    if (checkWin(botClass)) return 1;
    if (checkWin(humanClass)) return -1;
    if (isDraw()) return 0;

    const scores = [];

    cellElements.forEach(cell => {
        if (!cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS)) {
            cell.classList.add(isMaximizing ? botClass : humanClass);
            const score = minimax(!isMaximizing);
            cell.classList.remove(isMaximizing ? botClass : humanClass);
            scores.push(score);
        }
    });

    return isMaximizing ? Math.max(...scores) : Math.min(...scores);
}
