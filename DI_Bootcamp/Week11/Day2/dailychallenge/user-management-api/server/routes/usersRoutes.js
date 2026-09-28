const express = require("express");

const {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUser
} = require("../controllers/usersController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);

module.exports = router;