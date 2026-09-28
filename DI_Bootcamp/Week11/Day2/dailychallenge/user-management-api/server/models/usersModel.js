const db = require("../config/db");

async function registerUser(user, hashedPassword) {
    return db.transaction(async (trx) => {
        const [newUser] = await trx("users")
            .insert({
                email: user.email,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name
            })
            .returning([
                "id",
                "email",
                "username",
                "first_name",
                "last_name"
            ]);

        await trx("hashpwd").insert({
            username: user.username,
            password: hashedPassword
        });

        return newUser;
    });
}

async function getPasswordByUsername(username) {
    return db("hashpwd")
        .where({ username })
        .first();
}

async function getAllUsers() {
    return db("users")
        .select(
            "id",
            "email",
            "username",
            "first_name",
            "last_name"
        )
        .orderBy("id");
}

async function getUserById(id) {
    return db("users")
        .where({ id })
        .first();
}

async function getUserByUsername(username) {
    return db("users")
        .where({ username })
        .first();
}

async function updateUser(id, userData) {
    const [updatedUser] = await db("users")
        .where({ id })
        .update(userData)
        .returning([
            "id",
            "email",
            "username",
            "first_name",
            "last_name"
        ]);

    return updatedUser;
}

module.exports = {
    registerUser,
    getPasswordByUsername,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUser
};