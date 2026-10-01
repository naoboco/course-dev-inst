const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

setTimeout(function () {
    alert("Hello World");
}, 2000);

function addParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}

setTimeout(addParagraph, 2000);

const interval = setInterval(function () {
    if (container.children.length >= 5) {
        clearInterval(interval);
        return;
    }

    addParagraph();

    if (container.children.length >= 5) {
        clearInterval(interval);
    }
}, 2000);

clearButton.addEventListener("click", function () {
    clearInterval(interval);
});