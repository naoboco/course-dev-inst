const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");

const playerInput = document.querySelector("#player-name");
const startButton = document.querySelector("#start-button");

const playerDisplay = document.querySelector("#player-display");
const emojiDisplay = document.querySelector("#emoji");
const optionsContainer = document.querySelector("#options");

const guessForm = document.querySelector("#guess-form");

const scoreDisplay = document.querySelector("#score");
const feedback = document.querySelector("#feedback");

const leaderboardList =
    document.querySelector("#leaderboard-list");

let playerName = "";

startButton.addEventListener("click", () => {
    playerName = playerInput.value.trim();

    if (!playerName) {
        alert("Please enter your name");
        return;
    }

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    playerDisplay.textContent =
        `Player: ${playerName}`;

    loadQuestion();
    loadLeaderboard();
});

async function loadQuestion() {
    const response = await fetch(
        `/api/game?player=${encodeURIComponent(playerName)}`
    );

    const data = await response.json();

    emojiDisplay.textContent = data.emoji;
    scoreDisplay.textContent = data.score;

    optionsContainer.innerHTML = "";

    data.options.forEach(option => {
        const label = document.createElement("label");

        label.innerHTML = `
            <input
                type="radio"
                name="guess"
                value="${option}"
            >
            ${option}
        `;

        optionsContainer.appendChild(label);
    });
}

guessForm.addEventListener("submit", async event => {
    event.preventDefault();

    const selected =
        document.querySelector(
            'input[name="guess"]:checked'
        );

    if (!selected) {
        feedback.textContent =
            "Please choose an answer.";

        return;
    }

    const response = await fetch("/api/guess", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            player: playerName,
            guess: selected.value
        })
    });

    const data = await response.json();

    scoreDisplay.textContent = data.score;

    if (data.correct) {
        feedback.textContent =
            "Correct! 🎉";
    } else {
        feedback.textContent =
            `Wrong! Correct answer: ${data.correctAnswer}`;
    }

    await loadLeaderboard();

    setTimeout(() => {
        feedback.textContent = "";
        loadQuestion();
    }, 1200);
});

async function loadLeaderboard() {
    const response =
        await fetch("/api/leaderboard");

    const players =
        await response.json();

    leaderboardList.innerHTML = "";

    players.forEach(player => {
        const item =
            document.createElement("li");

        item.textContent =
            `${player.name}: ${player.score}`;

        leaderboardList.appendChild(item);
    });
}