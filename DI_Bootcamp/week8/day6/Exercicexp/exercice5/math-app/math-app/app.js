const _ = require("lodash");
const math = require("./math");

const addition = math.add(10, 5);
const multiplication = math.multiply(10, 5);

console.log(`Addition: ${addition}`);
console.log(`Multiplication: ${multiplication}`);

const numbers = [5, 10, 15, 20];

console.log(`Sum with lodash: ${_.sum(numbers)}`);
console.log(`Maximum: ${_.max(numbers)}`);