import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Finish Node.js exercises");
todoList.addTask("Review TypeScript");
todoList.addTask("Push the work to GitHub");
todoList.markTaskComplete(0);
todoList.markTaskComplete(1);
todoList.listTasks();
