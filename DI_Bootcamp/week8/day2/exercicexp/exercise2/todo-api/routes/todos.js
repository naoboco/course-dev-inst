const express = require("express");

const router = express.Router();
const todos = [];
let nextId = 1;

router.get("/", (req, res) => {
    res.json(todos);
});

router.post("/", (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }

    const todo = { id: nextId++, task, completed: false };
    todos.push(todo);
    res.status(201).json(todo);
});

router.put("/:id", (req, res) => {
    const todo = todos.find(item => item.id === Number(req.params.id));

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todo.task = req.body.task ?? todo.task;
    todo.completed = req.body.completed ?? todo.completed;
    res.json(todo);
});

router.delete("/:id", (req, res) => {
    const todoIndex = todos.findIndex(item => item.id === Number(req.params.id));

    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todos.splice(todoIndex, 1)[0]);
});

module.exports = { router, todos };
