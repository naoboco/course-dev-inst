import { people } from "./data.js";

function calculateAverageAge(personList) {
    const totalAge = personList.reduce((total, person) => total + person.age, 0);
    return totalAge / personList.length;
}

const averageAge = calculateAverageAge(people);
console.log(`Average age: ${averageAge}`);

export { calculateAverageAge };
