const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

async function register(req, res, next) {
    try {
        const {
            first_name,
            last_name,
            email,
            username,
            password
        } = req.body;

        if (
            !first_name ||
            !last_name ||
            !email ||
            !username ||
            !password
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const users = await usersModel.getAllUsers();

        const usernameExists = users.some(
            user => user.username === username
        );

    const passwordChecks = await Promise.all(
    users.map(user =>
        bcrypt.compare(password, user.password)
    )
        );

    const passwordExists = passwordChecks.some(
    result => result === true
        );

        if (usernameExists || passwordExists) {
            return res.status(409).json({
                message: "Username or password already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await usersModel.createUser({
            first_name,
            last_name,
            email,
            username,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Your account is now created!",
            user: {
                id: newUser.id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                username: newUser.username
            }
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        const user = await usersModel.getUserByUsername(username);

        if (!user) {
            return res.status(401).json({
                message: "Username is not registered"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: `Hi ${user.username} welcome back again!`
        });
    } catch (error) {
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await usersModel.getAllUsers();

        const safeUsers = users.map(user => ({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username
        }));

        res.status(200).json(safeUsers);
    } catch (error) {
        next(error);
    }
}

async function getUserById(req, res, next) {
    try {
        const user = await usersModel.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const user = await usersModel.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const updatedData = {
            ...req.body
        };

        if (updatedData.password) {
            updatedData.password = await bcrypt.hash(
                updatedData.password,
                10
            );
        }

        const updatedUser = await usersModel.updateUser(
            req.params.id,
            updatedData
        );

        res.status(200).json({
            id: updatedUser.id,
            first_name: updatedUser.first_name,
            last_name: updatedUser.last_name,
            email: updatedUser.email,
            username: updatedUser.username
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUser
};