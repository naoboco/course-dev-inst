const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

async function register(req, res, next) {
    try {
        const {
            email,
            username,
            password,
            first_name,
            last_name
        } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({
                message: "Email, username and password are required"
            });
        }

        const existingUser = await usersModel.getUserByUsername(username);

        if (existingUser) {
            return res.status(409).json({
                message: "Username already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await usersModel.registerUser(
            {
                email,
                username,
                first_name,
                last_name
            },
            hashedPassword
        );

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
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

        const userPassword = await usersModel.getPasswordByUsername(username);

        if (!userPassword) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            userPassword.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const user = await usersModel.getUserByUsername(username);

        res.status(200).json({
            message: "Login successful",
            user
        });
    } catch (error) {
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users);
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

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const updatedUser = await usersModel.updateUser(
            req.params.id,
            req.body
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(updatedUser);
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