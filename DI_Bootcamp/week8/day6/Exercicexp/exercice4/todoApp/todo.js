export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            task,
            completed: false
        });
    }

    markComplete(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
        }
    }

    listTasks() {
        this.tasks.forEach((task, index) => {
            console.log(
                `${index}: ${task.task} - ${task.completed ? "Completed" : "Not completed"}`
            );
        });
    }
}
