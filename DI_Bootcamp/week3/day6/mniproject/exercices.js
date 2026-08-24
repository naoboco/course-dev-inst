const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "black",
    "gray",
    "cyan",
    "lime"
];

const colorsContainer = document.getElementById("colors");
const drawingGrid = document.getElementById("drawingGrid");
const clearButton = document.getElementById("clear");

let selectedColor = "black";
let isDrawing = false;

for (let color of colors) {
    const colorBox = document.createElement("div");

    colorBox.classList.add("color");
    colorBox.style.backgroundColor = color;

    colorBox.addEventListener("click", function () {
        selectedColor = color;

        const allColors = document.querySelectorAll(".color");

        for (let box of allColors) {
            box.classList.remove("selected");
        }

        colorBox.classList.add("selected");
    });

    colorsContainer.appendChild(colorBox);
}

for (let i = 0; i < 600; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.addEventListener("mousedown", function () {
        isDrawing = true;
        square.style.backgroundColor = selectedColor;
    });

    square.addEventListener("mouseover", function () {
        if (isDrawing) {
            square.style.backgroundColor = selectedColor;
        }
    });

    drawingGrid.appendChild(square);
}

document.addEventListener("mouseup", function () {
    isDrawing = false;
});

clearButton.addEventListener("click", function () {
    const squares = document.querySelectorAll(".square");

    for (let square of squares) {
        square.style.backgroundColor = "white";
    }
});