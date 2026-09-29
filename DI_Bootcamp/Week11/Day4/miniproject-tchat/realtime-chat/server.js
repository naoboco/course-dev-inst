const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 5003;

app.use(express.static(path.join(__dirname, "public")));

const users = new Map();

function getUsersInRoom(room) {
    return Array.from(users.values()).filter(
        user => user.room === room
    );
}

function updateRoomUsers(room) {
    io.to(room).emit("roomUsers", {
        room,
        users: getUsersInRoom(room)
    });
}

function leaveCurrentRoom(socket) {
    const user = users.get(socket.id);

    if (!user) {
        return;
    }

    socket.leave(user.room);

    socket.to(user.room).emit("systemMessage", {
        message: `${user.username} left the room`
    });

    users.delete(socket.id);

    updateRoomUsers(user.room);
}

io.on("connection", socket => {
    socket.on("joinRoom", ({ username, room }) => {
        leaveCurrentRoom(socket);

        const user = {
            id: socket.id,
            username,
            room
        };

        users.set(socket.id, user);

        socket.join(room);

        socket.emit("systemMessage", {
            message: `Welcome to ${room}`
        });

        socket.to(room).emit("systemMessage", {
            message: `${username} joined the room`
        });

        updateRoomUsers(room);
    });

    socket.on("chatMessage", message => {
        const user = users.get(socket.id);

        if (!user) {
            return;
        }

        io.to(user.room).emit("message", {
            username: user.username,
            message,
            time: new Date().toLocaleTimeString()
        });
    });

    socket.on("leaveRoom", () => {
        leaveCurrentRoom(socket);
    });

    socket.on("disconnect", () => {
        leaveCurrentRoom(socket);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});