const form = document.querySelector("#gif-form");
const apiKeyInput = document.querySelector("#api-key");
const categoryInput = document.querySelector("#category");
const gifList = document.querySelector("#gif-list");
const deleteAllButton = document.querySelector("#delete-all");
const message = document.querySelector("#message");

function displayGif(gif, category) {
  const card = document.createElement("article");
  const image = document.createElement("img");
  const deleteButton = document.createElement("button");

  card.className = "gif-card";
  image.src = gif.images.original.url;
  image.alt = gif.title || `Random ${category} GIF`;
  deleteButton.className = "delete-one";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => card.remove());

  card.append(image, deleteButton);
  gifList.append(card);
}

async function getRandomGif(category, apiKey) {
  const url = new URL("https://api.giphy.com/v1/gifs/random");
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("tag", category);
  url.searchParams.set("rating", "g");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Giphy request failed with status ${response.status}`);
  }

  const result = await response.json();

  if (!result.data || !result.data.images) {
    throw new Error(`No GIF was found for "${category}"`);
  }

  return result.data;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const category = categoryInput.value.trim();
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey || !category) {
    message.textContent = "Please enter an API key and a category.";
    return;
  }

  message.textContent = "Loading...";

  try {
    const gif = await getRandomGif(category, apiKey);
    displayGif(gif, category);
    message.textContent = "";
    categoryInput.value = "";
    categoryInput.focus();
  } catch (error) {
    message.textContent = error.message;
  }
});

deleteAllButton.addEventListener("click", () => {
  gifList.replaceChildren();
  message.textContent = "All GIFs were deleted.";
});
