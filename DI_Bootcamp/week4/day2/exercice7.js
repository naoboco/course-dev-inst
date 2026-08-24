(function (username) {
    const navbar = document.getElementById("navbar");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const name = document.createElement("span");
    name.textContent = username;

    const picture = document.createElement("img");
    picture.src = "https://i.pravatar.cc/100";

    userDiv.appendChild(name);
    userDiv.appendChild(picture);

    navbar.appendChild(userDiv);
})("John");