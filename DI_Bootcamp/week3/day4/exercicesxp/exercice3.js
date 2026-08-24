let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

getBoldItems();

const paragraph = document.querySelector("p");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);