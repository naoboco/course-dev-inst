const socket = io();

const joinScreen = document.getElementById("join-screen");
const chatScreen = document.getElementById("chat-screen");

const joinForm = document.getElementById("join-form");
const usernameInput = document.getElementById("username");
const roomSelect = document.getElementById("room");

const roomName = document.getElementById("room-name");
const currentUser = document.getElementById("current-user");
const usersList = document.getElementById("users-list");

const messages = document.getElementById("messages");

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

const leaveButton = document.getElementById("leave-button");

let username = "";
let room = "";

joinForm.addEventListener("submit", event => {
    event.preventDefault();

    username = usernameInput.value.trim();
    room = roomSelect.value;

    if (!username || !room) {
        return;
    }

    socket.emit("joinRoom", {
        username,
        room
    });

    roomName.textContent = room;
    currentUser.textContent = `Logged in as ${username}`;

    joinScreen.classList.remove("active");
    chatScreen.classList.add("active");

    messageInput.focus();
});

messageForm.addEventListener("submit", event => {
    event.preventDefault();

    const message = messageInput.value.trim();

    if (!message) {
        return;
    }

    socket.emit("chatMessage", message);

    messageInput.value = "";
    messageInput.focus();
});

leaveButton.addEventListener("click", () => {
    socket.emit("leaveRoom");

    chatScreen.classList.remove("active");
    joinScreen.classList.add("active");

    messages.innerHTML = "";
    usersList.innerHTML = "";

    username = "";
    room = "";

    usernameInput.value = "";
    roomSelect.value = "";
});

socket.on("message", data => {
    const div = document.createElement("div");
    div.classList.add("message");

    div.innerHTML = `
        <div class="meta">
            ${data.username} · ${data.time}
        </div>
        <div>
            ${data.message}
        </div>
    `;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;

    if (document.hidden) {
        document.title = "New message!";
    }
});

socket.on("systemMessage", data => {
    const div = document.createElement("div");
    div.classList.add("system-message");

    div.textContent = data.message;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
});

socket.on("roomUsers", data => {
    usersList.innerHTML = "";

    data.users.forEach(user => {
        const li = document.createElement("li");

        li.textContent = user.username;

        usersList.appendChild(li);
    });
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        document.title = "Real-Time Chat";
    }
});