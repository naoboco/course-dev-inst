const path = require("path");
const { readFile, writeFile } = require("./fileManager");

const helloPath = path.join(__dirname, "Hello World.txt");
const byePath = path.join(__dirname, "Bye World.txt");

console.log(readFile(helloPath));
writeFile(byePath, "Writing to the file");
console.log(readFile(byePath));
