const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

function showAlert() {
    alert("Hello World");
}

setTimeout(showAlert, 2000);


function addParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}

setTimeout(addParagraph, 2000);


const interval = setInterval(function () {
    addParagraph();

    if (container.querySelectorAll("p").length >= 5) {
        clearInterval(interval);
    }
}, 2000);


clearButton.addEventListener("click", function () {
    clearInterval(interval);
});