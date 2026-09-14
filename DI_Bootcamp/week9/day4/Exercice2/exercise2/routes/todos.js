const express = require("express");

const router = express.Router();

const todos = [];

router.get("/", (req, res) => {
    res.json(todos);
});

router.post("/", (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({
            message: "Task is required"
        });
    }

    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const { task, completed } = req.body;

    if (task !== undefined) {
        todo.task = task;
    }

    if (completed !== undefined) {
        todo.completed = completed;
    }

    res.json(todo);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = todos.findIndex(
        todo => todo.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const deletedTodo = todos.splice(index, 1);

    res.json({
        message: "Todo deleted",
        todo: deletedTodo[0]
    });
});

module.exports = router;