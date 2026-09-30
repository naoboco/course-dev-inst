import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "active") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;