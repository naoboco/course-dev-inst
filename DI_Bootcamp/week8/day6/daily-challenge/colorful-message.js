const chalk = require("chalk");

function displayColorfulMessage() {
    console.log(
        chalk.blue.bold("Node.js is awesome!")
    );

    console.log(
        chalk.green("Welcome to the colorful Daily Challenge!")
    );
}

module.exports = {
    displayColorfulMessage
};