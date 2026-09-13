import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Study Node.js");
todoList.addTask("Finish exercises");
todoList.addTask("Push project to GitHub");

todoList.markComplete(0);
todoList.markComplete(1);

todoList.listTasks();