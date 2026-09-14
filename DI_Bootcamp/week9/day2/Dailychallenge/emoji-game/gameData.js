const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🍕", name: "Pizza" },
    { emoji: "🐱", name: "Cat" },
    { emoji: "🚗", name: "Car" },
    { emoji: "🌞", name: "Sun" },
    { emoji: "❤️", name: "Heart" },
    { emoji: "⚽", name: "Football" },
    { emoji: "🍎", name: "Apple" }
];

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function createQuestion() {
    const correctEmoji =
        emojis[Math.floor(Math.random() * emojis.length)];

    const wrongOptions = emojis
        .filter(item => item.name !== correctEmoji.name)
        .map(item => item.name);

    const distractors = shuffle(wrongOptions).slice(0, 3);

    const options = shuffle([
        correctEmoji.name,
        ...distractors
    ]);

    return {
        emoji: correctEmoji.emoji,
        answer: correctEmoji.name,
        options
    };
}

module.exports = {
    createQuestion
};