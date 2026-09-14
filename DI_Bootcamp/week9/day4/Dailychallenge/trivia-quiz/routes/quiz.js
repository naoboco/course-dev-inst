const express = require("express");

const router = express.Router();

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion(res, feedback = "") {
    const question = triviaQuestions[currentQuestion];

    res.send(`
        <h1>Trivia Quiz</h1>

        <p>${feedback}</p>

        <h2>
            Question ${currentQuestion + 1} of ${triviaQuestions.length}
        </h2>

        <p>${question.question}</p>

        <form action="/quiz" method="POST">
            <input
                type="text"
                name="answer"
                placeholder="Your answer"
                required
            >

            <button type="submit">
                Submit
            </button>
        </form>

        <p>Score: ${score}</p>
    `);
}

router.get("/", (req, res) => {
    currentQuestion = 0;
    score = 0;

    displayQuestion(res);
});

router.post("/", (req, res) => {
    const userAnswer = req.body.answer.trim();

    const correctAnswer =
        triviaQuestions[currentQuestion].answer;

    let feedback;

    if (
        userAnswer.toLowerCase() ===
        correctAnswer.toLowerCase()
    ) {
        score++;

        feedback = "Correct!";
    } else {
        feedback =
            `Incorrect! The correct answer was ${correctAnswer}.`;
    }

    currentQuestion++;

    if (currentQuestion >= triviaQuestions.length) {
        return res.redirect("/quiz/score");
    }

    displayQuestion(res, feedback);
});

router.get("/score", (req, res) => {
    res.send(`
        <h1>Quiz Finished!</h1>

        <h2>
            Your score: ${score} / ${triviaQuestions.length}
        </h2>

        <a href="/quiz">
            Play Again
        </a>
    `);
});

module.exports = router;