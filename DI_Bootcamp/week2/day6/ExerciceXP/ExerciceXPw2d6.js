const people = ["Greg", "Mary", "Devon", "James"];

// partie 1 - ARRAYS

people.shift();

people[people.indexOf("James")] = "Jason";

people.push("Naomie");

console.log(people.indexOf("Mary")); // 0

const peopleCopy = people.slice(1, -1);

console.log(peopleCopy); // ["Devon", "Jasn"]

console.log(people.indexOf("Foo")); // -1

const last = people[people.length - 1];

console.log(last); // Naomie


// partie deux - LOOPS

for (const person of people) {
    console.log(person);
}

for (const person of people) {
    console.log(person);

    if (person === "Devon") {
        break;
    }
}