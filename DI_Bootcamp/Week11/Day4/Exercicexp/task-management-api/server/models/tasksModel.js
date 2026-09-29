const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../../data/tasks.json");

async function getAllTasks() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

async function getTaskById(id) {
    const tasks = await getAllTasks();

    return tasks.find(
        task => task.id === Number(id)
    );
}

async function createTask(taskData) {
    const tasks = await getAllTasks();

    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        ...taskData
    };

    tasks.push(newTask);

    await fs.writeFile(
        filePath,
        JSON.stringify(tasks, null, 2)
    );

    return newTask;
}

async function updateTask(id, taskData) {
    const tasks = await getAllTasks();

    const index = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    tasks[index] = {
        ...tasks[index],
        ...taskData,
        id: Number(id)
    };

    await fs.writeFile(
        filePath,
        JSON.stringify(tasks, null, 2)
    );

    return tasks[index];
}

async function deleteTask(id) {
    const tasks = await getAllTasks();

    const index = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedTask = tasks.splice(index, 1)[0];

    await fs.writeFile(
        filePath,
        JSON.stringify(tasks, null, 2)
    );

    return deletedTask;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};