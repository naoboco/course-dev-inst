const form = document.querySelector("form");
console.log(form);

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");

console.log(firstNameInput);
console.log(lastNameInput);

const firstNameByName = document.querySelector('[name="firstname"]');
const lastNameByName = document.querySelector('[name="lastname"]');

console.log(firstNameByName);
console.log(lastNameByName);

const usersAnswer = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    if (firstName !== "" && lastName !== "") {
        usersAnswer.innerHTML = "";

        const firstNameLi = document.createElement("li");
        const lastNameLi = document.createElement("li");

        firstNameLi.textContent = firstName;
        lastNameLi.textContent = lastName;

        usersAnswer.appendChild(firstNameLi);
        usersAnswer.appendChild(lastNameLi);
    }
});