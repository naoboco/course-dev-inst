const tasksModel = require("../models/tasksModel");

async function getAllTasks(req, res, next) {
    try {
        const tasks = await tasksModel.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}

async function getTaskById(req, res, next) {
    try {
        const task = await tasksModel.getTaskById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
}

async function createTask(req, res, next) {
    try {
        const { title, description, completed } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        const newTask = await tasksModel.createTask({
            title,
            description: description || "",
            completed: completed ?? false
        });

        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
}

async function updateTask(req, res, next) {
    try {
        const { title, description, completed } = req.body;

        if (
            title === undefined &&
            description === undefined &&
            completed === undefined
        ) {
            return res.status(400).json({
                message: "At least one field is required"
            });
        }

        const updatedTask = await tasksModel.updateTask(
            req.params.id,
            {
                ...(title !== undefined && { title }),
                ...(description !== undefined && { description }),
                ...(completed !== undefined && { completed })
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
}

async function deleteTask(req, res, next) {
    try {
        const deletedTask = await tasksModel.deleteTask(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted",
            task: deletedTask
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};