const express = require("express");
const quizRouter = require("./routes/quiz");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/quiz", quizRouter);

app.get("/", (req, res) => {
    res.send(`
        <h1>Trivia Quiz</h1>
        <a href="/quiz">Start Quiz</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});