import people from "./data.js";

function calculateAverageAge(persons) {
    const totalAge = persons.reduce(
        (total, person) => total + person.age,
        0
    );

    return totalAge / persons.length;
}

console.log(people);
console.log(`Average age: ${calculateAverageAge(people)}`);