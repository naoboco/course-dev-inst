const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
article.lastElementChild.remove();
const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    h3.style.display = "none";
});

const button = document.getElementById("boldButton");

button.addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("p");

    for (let paragraph of paragraphs) {
        paragraph.style.fontWeight = "bold";
    }
});

h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
});