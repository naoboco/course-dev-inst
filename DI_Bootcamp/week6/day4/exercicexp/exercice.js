"use strict";
console.log("Hello, World!");
function showPersonInfo() {
    const age = 25;
    const name = "Naomie";
    console.log(name, age);
}
showPersonInfo();
let id = 19851;
console.log(id);
id = "student-19851";
console.log(id);
function describeNumber(value) {
    if (value > 0) {
        return "positive";
    }
    else if (value < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
function getDetails(name, age) {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
}
const details = getDetails("Alice", 25);
console.log(details);
function createPerson(name, age) {
    return { name, age };
}
const person = createPerson("David", 30);
console.log(person);
const nameInput = document.getElementById("username");
if (nameInput) {
    nameInput.value = "Naomie";
    console.log(nameInput.value);
}
function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Sarah"));
