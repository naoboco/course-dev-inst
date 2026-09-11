const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const cells = [...document.querySelectorAll(".cell")];
const symbolButtons = document.querySelectorAll(".symbol");
const levelButtons = document.querySelectorAll(".level");
const statusText = document.querySelector("#status");
const restartButton = document.querySelector("#restart");

let board = Array(9).fill("");
let playerSymbol = "";
let computerSymbol = "";
let level = "easy";
let gameOver = false;
let computerThinking = false;

function getWinner(currentBoard) {
    for (const combo of winCombos) {
        const [first, second, third] = combo;

        if (
            currentBoard[first] &&
            currentBoard[first] === currentBoard[second] &&
            currentBoard[first] === currentBoard[third]
        ) {
            return currentBoard[first];
        }
    }

    return null;
}

function getEmptyCells(currentBoard) {
    return currentBoard.reduce((emptyCells, value, index) => {
        if (!value) {
            emptyCells.push(index);
        }
        return emptyCells;
    }, []);
}

function showBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        cell.disabled = Boolean(board[index]) || gameOver || computerThinking || !playerSymbol;
    });
}

function finishTurn() {
    const winner = getWinner(board);

    if (winner) {
        gameOver = true;
        statusText.textContent = winner === playerSymbol ? "You won!" : "The computer won!";
        restartButton.style.display = "block";
        showBoard();
        return true;
    }

    if (getEmptyCells(board).length === 0) {
        gameOver = true;
        statusText.textContent = "Tie game";
        restartButton.style.display = "block";
        showBoard();
        return true;
    }

    return false;
}

function minimax(currentBoard, isComputerTurn, depth) {
    const winner = getWinner(currentBoard);

    if (winner === computerSymbol) {
        return 10 - depth;
    }

    if (winner === playerSymbol) {
        return depth - 10;
    }

    const emptyCells = getEmptyCells(currentBoard);

    if (emptyCells.length === 0) {
        return 0;
    }

    const scores = emptyCells.map((index) => {
        currentBoard[index] = isComputerTurn ? computerSymbol : playerSymbol;
        const score = minimax(currentBoard, !isComputerTurn, depth + 1);
        currentBoard[index] = "";
        return score;
    });

    return isComputerTurn ? Math.max(...scores) : Math.min(...scores);
}

function getComputerMove() {
    const emptyCells = getEmptyCells(board);

    if (level === "easy") {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomIndex];
    }

    let bestScore = -Infinity;
    let bestMove = emptyCells[0];

    emptyCells.forEach((index) => {
        board[index] = computerSymbol;
        const score = minimax(board, false, 0);
        board[index] = "";

        if (score > bestScore) {
            bestScore = score;
            bestMove = index;
        }
    });

    return bestMove;
}

function computerTurn() {
    if (gameOver) {
        return;
    }

    computerThinking = true;
    statusText.textContent = "Computer is playing...";
    showBoard();

    setTimeout(() => {
        const move = getComputerMove();
        board[move] = computerSymbol;
        computerThinking = false;

        if (!finishTurn()) {
            statusText.textContent = `Your turn (${playerSymbol})`;
            showBoard();
        }
    }, 450);
}

function startGame() {
    board = Array(9).fill("");
    gameOver = false;
    computerThinking = false;
    restartButton.style.display = "none";

    if (!playerSymbol) {
        statusText.textContent = "Choose X or O to start.";
        showBoard();
        return;
    }

    statusText.textContent = `Your turn (${playerSymbol})`;
    showBoard();

    if (computerSymbol === "X") {
        computerTurn();
    }
}

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const index = Number(cell.dataset.index);

        if (board[index] || gameOver || computerThinking || !playerSymbol) {
            return;
        }

        board[index] = playerSymbol;
        showBoard();

        if (!finishTurn()) {
            computerTurn();
        }
    });
});

symbolButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSymbol = button.dataset.symbol;
        computerSymbol = playerSymbol === "X" ? "O" : "X";
        symbolButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        startGame();
    });
});

levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
        level = button.dataset.level;
        levelButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        startGame();
    });
});

restartButton.addEventListener("click", startGame);

startGame();