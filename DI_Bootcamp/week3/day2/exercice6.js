// Retrieve the div
const navBar = document.getElementById("navBar");

// Change the id attribute
navBar.setAttribute("id", "socialNetworkNavigation");


// Retrieve the ul
const ul = document.querySelector("ul");


// Create a new li
const newLi = document.createElement("li");

// Create the text node "Logout"
const logoutText = document.createTextNode("Logout");

// Add the text inside the li
newLi.appendChild(logoutText);

// Add the new li to the ul
ul.appendChild(newLi);


// Retrieve the first li
const firstLi = ul.firstElementChild;

// Retrieve the last li
const lastLi = ul.lastElementChild;


// Display their text
console.log(firstLi.textContent);
console.log(lastLi.textContent);