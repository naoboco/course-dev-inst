const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const form = document.getElementById("gif-form");
const categoryInput = document.getElementById("category");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");
const message = document.getElementById("message");

async function fetchGif(category) {
    try {
        message.textContent = "Loading GIF...";

        const params = new URLSearchParams({
            api_key: API_KEY,
            tag: category,
            rating: "g"
        });

        const response = await fetch(
            `https://api.giphy.com/v1/gifs/random?${params}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch GIF");
        }

        const result = await response.json();

        const gifUrl = result.data?.images?.original?.url;

        if (!gifUrl) {
            throw new Error("No GIF found for this category");
        }

        displayGif(gifUrl, category);

        message.textContent = "";
    } catch (error) {
        message.textContent = error.message;
        console.error(error);
    }
}

function displayGif(url, category) {
    const gifWrapper = document.createElement("div");

    const gif = document.createElement("img");
    gif.src = url;
    gif.alt = category;
    gif.width = 250;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";

    deleteButton.addEventListener("click", () => {
        gifWrapper.remove();
    });

    gifWrapper.appendChild(gif);
    gifWrapper.appendChild(deleteButton);

    gifContainer.appendChild(gifWrapper);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const category = categoryInput.value.trim();

    if (!category) {
        message.textContent = "Please enter a category";
        return;
    }

    fetchGif(category);

    categoryInput.value = "";
});

deleteAllButton.addEventListener("click", () => {
    gifContainer.replaceChildren();
    message.textContent = "";
});