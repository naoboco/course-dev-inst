console.log("Hello, World!");

function showPersonInfo(): void {
    const age: number = 25;
    const name: string = "Naomie";
    console.log(name, age);
}

showPersonInfo();

let id: string | number = 19851;
console.log(id);
id = "student-19851";
console.log(id);

function describeNumber(value: number): string {
    if (value > 0) {
        return "positive";
    } else if (value < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));

function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
}

const details = getDetails("Alice", 25);
console.log(details);

type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person = createPerson("David", 30);
console.log(person);

const nameInput = document.getElementById("username") as HTMLInputElement | null;

if (nameInput) {
    nameInput.value = "Naomie";
    console.log(nameInput.value);
}

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

function greet(): string;
function greet(name: string): string;
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Sarah"));
