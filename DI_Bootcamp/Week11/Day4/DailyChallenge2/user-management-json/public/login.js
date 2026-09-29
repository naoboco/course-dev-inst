const form = document.getElementById("login-form");
const button = document.getElementById("login-button");
const message = document.getElementById("message");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function checkInputs() {
    const allFilled =
        usernameInput.value.trim() !== "" &&
        passwordInput.value.trim() !== "";

    button.disabled = !allFilled;
}

usernameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

form.addEventListener("submit", async event => {
    event.preventDefault();

    const loginData = {
        username: usernameInput.value.trim(),
        password: passwordInput.value
    };

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
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