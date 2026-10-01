const characterInfo = document.getElementById("character-info");
const findButton = document.getElementById("find-character");

function showLoading() {
    characterInfo.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin loader"></i>
        <p>Loading...</p>
    `;
}

function showError() {
    characterInfo.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation loader"></i>
        <p class="error">Oh No! That person isn't available.</p>
    `;
}

function showCharacter(character, homeWorld) {
    characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Height:</strong> ${character.height}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Home World:</strong> ${homeWorld}</p>
    `;
}

async function getCharacter() {
    showLoading();
    findButton.disabled = true;

    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);

        if (!response.ok) {
            throw new Error("Character not found");
        }

        const data = await response.json();
        const character = data.result.properties;
        const planetResponse = await fetch(character.homeworld);

        if (!planetResponse.ok) {
            throw new Error("Planet not found");
        }

        const planetData = await planetResponse.json();
        showCharacter(character, planetData.result.properties.name);
    } catch (error) {
        console.log(error);
        showError();
    } finally {
        findButton.disabled = false;
    }
}

findButton.addEventListener("click", getCharacter);