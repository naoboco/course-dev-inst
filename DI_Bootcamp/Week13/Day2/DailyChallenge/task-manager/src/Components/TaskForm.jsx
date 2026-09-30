import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: text.trim()
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Add a task"
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;