const robots = [
    {
        id: 1,
        name: "perle eli",
        username: "perlouch",
        email: "Perle@abbkj.com",
        image: "https://robohash.org/1?200x200"
    },
    {
        id: 2,
        name: "esther levy",
        username: "esti",
        email: "estherllll@gmail.com",
        image: "https://robohash.org/2?200x200"
    },
    {
        id: 3,
        name: "David cohen",
        username: "Banana",
        email: "David@gnail.com",
        image: "https://robohash.org/3?200x200"
    },
    {
        id: 4,
        name: "Patricia dibinski",
        username: "ashkenaz",
        email: "Julianne.OConner@gmail.com",
        image: "https://robohash.org/4?200x200"
    },
    {
        id: 5,
        name: "melin lenchanteur",
        username: "knight",
        email: "magi@gmail.com",
        image: "https://robohash.org/5?200x200"
    },
    {
        id: 6,
        name: "Sarah pelle",
        username: "phony",
        email: "Allo@gmail.com",
        image: "https://robohash.org/6?200x200"
    },
    {
        id: 7,
        name: "bratt pitt",
        username: "omgitsbraaaaad",
        email: "fann6@gmail.com",
        image: "https://robohash.org/7?200x200"
    },
    {
        id: 8,
        name: "maux depasse",
        username: "274375",
        email: "correct@gmail.com",
        image: "https://robohash.org/8?200x200"
    },
    {
        id: 9,
        name: "Sherlock holmes",
        username: "sher",
        email: "lock@gmail.com",
        image: "https://robohash.org/9?200x200"
    },
    {
        id: 10,
        name: "bad examples",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@gmail.com",
        image: "https://robohash.org/10?200x200"
    }
];

//je me suis permise de changer les noms hihi

const searchInput = document.querySelector("#search");
const robotList = document.querySelector("#robot-list");

function displayRobots(robotArray) {
    robotList.innerHTML = "";

    robotArray.forEach((robot) => {
        const card = document.createElement("article");
        const image = document.createElement("img");
        const name = document.createElement("h2");
        const username = document.createElement("p");
        const email = document.createElement("p");

        card.classList.add("robot-card");
        image.src = robot.image;
        image.alt = robot.name;
        name.textContent = robot.name;
        username.textContent = `@${robot.username}`;
        email.textContent = robot.email;

        card.append(image, name, username, email);
        robotList.append(card);
    });

    if (robotArray.length === 0) {
        const message = document.createElement("p");
        message.classList.add("empty-message");
        message.textContent = "No robot found.";
        robotList.append(message);
    }
}

searchInput.addEventListener("input", () => {
    const searchedName = searchInput.value.trim().toLowerCase();
    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchedName)
    );

    displayRobots(filteredRobots);
});

displayRobots(robots);