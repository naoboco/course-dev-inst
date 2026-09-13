const { greet } = require("./greeting");
const { displayColorfulMessage } = require("./colorful-message");
const { displayFileContent } = require("./read-file");

const userName = "Naomie";

console.log(greet(userName));

displayColorfulMessage();

console.log("\nFile content:");

displayFileContent();