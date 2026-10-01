const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();

    if (!name || !lastname) {
        return;
    }

    const user = {
        name: name,
        lastname: lastname
    };

    const jsonString = JSON.stringify(user);

    output.textContent = jsonString;
});