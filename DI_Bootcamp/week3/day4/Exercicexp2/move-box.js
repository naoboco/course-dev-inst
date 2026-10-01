const button = document.getElementById("move-button");
const box = document.getElementById("animate");
const container = document.getElementById("container");

let interval;

function myMove() {
    clearInterval(interval);

    let position = 0;
    const limit = container.clientWidth - box.offsetWidth;

    box.style.left = "0px";

    interval = setInterval(function () {
        if (position >= limit) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }, 1);
}

button.addEventListener("click", myMove);