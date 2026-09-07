class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        this.tasks.push({ title, completed: false });
    }

    markTaskComplete(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
        }
    }

    listTasks() {
        this.tasks.forEach(task => {
            const status = task.completed ? "Complete" : "Pending";
            console.log(`${task.title} - ${status}`);
        });
    }
}

export { TodoList };
