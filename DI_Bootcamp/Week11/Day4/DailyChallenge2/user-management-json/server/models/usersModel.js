const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../../data/users.json");

async function readUsers() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

async function writeUsers(users) {
    await fs.writeFile(
        filePath,
        JSON.stringify(users, null, 2)
    );
}

async function getAllUsers() {
    return readUsers();
}

async function getUserById(id) {
    const users = await readUsers();

    return users.find(
        user => user.id === Number(id)
    );
}

async function getUserByUsername(username) {
    const users = await readUsers();

    return users.find(
        user => user.username === username
    );
}

async function createUser(userData) {
    const users = await readUsers();

    const newUser = {
        id: users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1,
        ...userData
    };

    users.push(newUser);

    await writeUsers(users);

    return newUser;
}

async function updateUser(id, userData) {
    const users = await readUsers();

    const index = users.findIndex(
        user => user.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    users[index] = {
        ...users[index],
        ...userData,
        id: Number(id)
    };

    await writeUsers(users);

    return users[index];
}

module.exports = {
    readUsers,
    writeUsers,
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser,
    updateUser
};