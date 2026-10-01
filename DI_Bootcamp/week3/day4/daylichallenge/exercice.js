const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

let words = {};
let lastStoryIndex = -1;

const stories = [
    ({ noun, adjective, person, verb, place }) =>
        `One day, ${person} found a ${adjective} ${noun} in ${place}. Suddenly, it started to ${verb}!`,

    ({ noun, adjective, person, verb, place }) =>
        `${person} went to ${place} with a ${adjective} ${noun}. Everyone was surprised when they began to ${verb}.`,

    ({ noun, adjective, person, verb, place }) =>
        `In ${place}, ${person} discovered that a ${noun} could ${verb}. It was the most ${adjective} day ever!`,

    ({ noun, adjective, person, verb, place }) =>
        `${person} wanted to ${verb} in ${place}, but a ${adjective} ${noun} changed everything!`
];

function generateStory() {
    let index;

    do {
        index = Math.floor(Math.random() * stories.length);
    } while (index === lastStoryIndex);

    lastStoryIndex = index;
    story.textContent = stories[index](words);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields!");
        return;
    }

    words = { noun, adjective, person, verb, place };

    generateStory();
    shuffleButton.hidden = false;
});

shuffleButton.addEventListener("click", generateStory);