// Exercice 1

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

// Exercise 2 Your favorite colors

const colors = ["pink", "purple", "blue", "black", "green"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Le Bonus
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let userInput;
// let number;

do {
    userInput = prompt("Enter a number:");

    console.log(typeof userInput); // "string"

    number = Number(userInput);
} while (number < 10);

console.log(`Your final number is ${number}`);

// Exercise 4: Building Management

// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,

    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },



    nameOfTenants: ["Sarah", "Dan", "David"],

    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};



console.log(building.numberOfFloors); // 4

const apartmentsFloorsOneAndThree =
    building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor;

console.log(apartmentsFloorsOneAndThree); // 12

const secondTenant = building.nameOfTenants[1];
const danRooms = building.numberOfRoomsAndRent.dan[0];

console.log(secondTenant, danRooms); 

const sarahAndDavidRent =
    building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1];

const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahAndDavidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]); // 1200

// Exercise 5: Family
//Create an object called family with a few key value pairs.
//Using a for in loop, console.log the keys of the object.
//Using a for in loop, console.log the values of the object.

const family = {
    mother: "lea",
    father: "Dan",
    daughter: "Naomie",
    city: "Jerusalem",
};

for (const key in family) {
    console.log(key);
}

for (const key in family) {
    console.log(family[key]);
}


// Exercise 6: Rudolf
//Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
};

let sentence = "";

for (const key in details) {
    sentence += `${key} ${details[key]} `;
}

console.log(sentence.trim());

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// Exercise 7: Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = [];

for (const name of names) {
    firstLetters.push(name[0]);
}

firstLetters.sort();

const secretSociety = firstLetters.join("");

console.log(secretSociety); 
