// Ex 1
console.log("Hello, World!");


// Ex 2
let age: number = 25;
let userName: string = "Alice";

console.log(age);
console.log(userName);


// Ex 3
let id: string | number;

id = 123;
console.log(id);

id = "ABC123";
console.log(id);


//ex 4
function checkNumber(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));


// ex 5
function getDetails(name: string, age: number): [string, number, string] {
    return [
        name,
        age,
        `Hello, ${name}! You are ${age} years old.`
    ];
}

const details = getDetails("Alice", 25);

console.log(details);


// Exercice 6
type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {
        name,
        age
    };
}

const person = createPerson("Alice", 25);

console.log(person);


//ex 8
function getAction(role: string): string {
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


//ex 9
function greet(): string;
function greet(name: string): string;

function greet(name: string = "Guest"): string {
    if (name === "Guest") {
        return "Hello!";
    }

    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));