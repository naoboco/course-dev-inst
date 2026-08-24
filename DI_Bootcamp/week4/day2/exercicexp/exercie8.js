function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const juice = document.getElementById("juice");

        juice.textContent =
            `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("strawberry", "mango", "kiwi");

    displayJuice();
}

makeJuice("large");