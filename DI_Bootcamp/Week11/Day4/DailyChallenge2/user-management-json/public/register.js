const form = document.getElementById("register-form");
const button = document.getElementById("register-button");
const message = document.getElementById("message");

const inputs = [
    document.getElementById("first_name"),
    document.getElementById("last_name"),
    document.getElementById("email"),
    document.getElementById("username"),
    document.getElementById("password")
];

function checkInputs() {
    const allFilled = inputs.every(
        input => input.value.trim() !== ""
    );

    button.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
});

form.addEventListener("submit", async event => {
    event.preventDefault();

    const userData = {
        first_name: inputs[0].value.trim(),
        last_name: inputs[1].value.trim(),
        email: inputs[2].value.trim(),
        username: inputs[3].value.trim(),
        password: inputs[4].value
    };

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        message.textContent = data.message;

        if (response.ok) {
            form.reset();
            button.disabled = true;
        }
    } catch (error) {
        message.textContent = "Something went wrong";
    }
});