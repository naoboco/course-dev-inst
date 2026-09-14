const express = require("express");
const path = require("path");
const { createQuestion } = require("./gameData");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const players = {};

app.get("/api/game", (req, res) => {
    const player = req.query.player;

    if (!player) {
        return res.status(400).json({
            message: "Player name is required"
        });
    }

    if (!players[player]) {
        players[player] = {
            score: 0,
            answer: ""
        };
    }

    const question = createQuestion();

    players[player].answer = question.answer;

    res.json({
        emoji: question.emoji,
        options: question.options,
        score: players[player].score
    });
});

app.post("/api/guess", (req, res) => {
    const { player, guess } = req.body;

    if (!player || !guess) {
        return res.status(400).json({
            message: "Player and guess are required"
        });
    }

    if (!players[player]) {
        return res.status(404).json({
            message: "Player not found"
        });
    }

    const correct =
        guess === players[player].answer;

    if (correct) {
        players[player].score++;
    }

    res.json({
        correct,
        correctAnswer: players[player].answer,
        score: players[player].score
    });
});

app.get("/api/leaderboard", (req, res) => {
    const leaderboard = Object.entries(players)
        .map(([name, data]) => ({
            name,
            score: data.score
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});