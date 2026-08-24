const planets = [
    {
        name: "Mercury",
        color: "gray",
        moons: 0
    },
    {
        name: "Venus",
        color: "orange",
        moons: 0
    },
    {
        name: "Earth",
        color: "blue",
        moons: 1
    },
    {
        name: "Mars",
        color: "red",
        moons: 2
    },
    {
        name: "Jupiter",
        color: "brown",
        moons: 4
    },
    {
        name: "Saturn",
        color: "gold",
        moons: 5
    },
    {
        name: "Uranus",
        color: "lightblue",
        moons: 5
    },
    {
        name: "Neptune",
        color: "darkblue",
        moons: 2
    }
];


// Retrieve the section
const section = document.querySelector(".listPlanets");


// Loop through all planets
for (let planet of planets) {

    // Create the planet div
    const planetDiv = document.createElement("div");

    // Add the planet class
    planetDiv.classList.add("planet");

    // Give it a different background color
    planetDiv.style.backgroundColor = planet.color;

    // Add planet name
    planetDiv.textContent = planet.name;


    // BONUS : create moons
    for (let i = 0; i < planet.moons; i++) {

        const moon = document.createElement("div");

        moon.classList.add("moon");

        // Move each moon so they don't all appear in the same place
        moon.style.left = (110 + i * 35) + "px";
        moon.style.top = (10 + i * 15) + "px";

        // Add moon to the planet
        planetDiv.appendChild(moon);
    }


    // Add planet to the section
    section.appendChild(planetDiv);
}