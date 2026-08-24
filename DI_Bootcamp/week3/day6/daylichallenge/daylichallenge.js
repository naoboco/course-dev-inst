const tasks = [];

let nextTaskId = 0;

const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const task = {
        task_id: nextTaskId,
        text: text,
        done: false
    };

    tasks.push(task);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.dataset.taskId = task.task_id;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `task-${task.task_id}`;

    const label = document.createElement("label");
    label.setAttribute("for", `task-${task.task_id}`);
    label.textContent = task.text;

    deleteButton.addEventListener("click", function () {
        deleteTask(task.task_id);
    });

    checkbox.addEventListener("change", function () {
        doneTask(task.task_id, checkbox.checked);
    });

    taskDiv.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    listTasks.appendChild(taskDiv);

    nextTaskId++;
    taskInput.value = "";
}

function doneTask(taskId, checked) {
    const task = tasks.find(function (task) {
        return task.task_id === taskId;
    });

    task.done = checked;

    const taskDiv = document.querySelector(
        `[data-task-id="${taskId}"]`
    );

    if (task.done) {
        taskDiv.classList.add("done");
    } else {
        taskDiv.classList.remove("done");
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(function (task) {
        return task.task_id === taskId;
    });

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }

    const taskDiv = document.querySelector(
        `[data-task-id="${taskId}"]`
    );

    taskDiv.remove();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});