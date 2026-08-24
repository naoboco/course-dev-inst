// 1. Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);


// 2. Retrieve both ul elements
const lists = document.querySelectorAll(".list");


// Change Pete to Richard
lists[0].children[1].textContent = "Richard";


// Delete the second li of the second ul
lists[1].children[1].remove();


// Change the first li of each ul to my name
for (let list of lists) {
    list.children[0].textContent = "Naomie";
}


// Add student_list class to both ul
for (let list of lists) {
    list.classList.add("student_list");
}


// Add university and attendance classes to first ul
lists[0].classList.add("university", "attendance");


// Add light blue background and padding to div
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";


// Hide the li containing Dan
const allLi = document.querySelectorAll("li");

for (let li of allLi) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
}


// Add border to Richard
for (let li of allLi) {
    if (li.textContent === "Richard") {
        li.style.border = "1px solid black";
    }
}


// Change font size of whole body
document.body.style.fontSize = "20px";
