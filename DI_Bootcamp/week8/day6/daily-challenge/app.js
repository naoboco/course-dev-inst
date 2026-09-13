const { greet } = require("./greeting");
const { displayColorfulMessage } = require("./colorful-message");
const { displayFileContent } = require("./read-file");

console.log(greet("Naomie"));

displayColorfulMessage();

displayFileContent();