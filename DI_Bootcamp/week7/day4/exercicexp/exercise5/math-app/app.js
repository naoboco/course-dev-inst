const _ = require("lodash");
const { add, multiply } = require("./math");

const numbers = [7, 12, 4, 19, 8];

console.log(`Addition: ${add(8, 5)}`);
console.log(`Multiplication: ${multiply(6, 7)}`);
console.log(`Lodash sum: ${_.sum(numbers)}`);
console.log(`Largest number: ${_.max(numbers)}`);
