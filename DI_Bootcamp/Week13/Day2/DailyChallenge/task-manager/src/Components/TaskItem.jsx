import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const editInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleTask = () => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: task.id
    });
  };

  const startEditing = () => {
    setIsEditing(true);

    setTimeout(() => {
      editInputRef.current?.focus();
    }, 0);
  };

  const saveEdit = () => {
    const newText = editInputRef.current.value.trim();

    if (!newText) {
      return;
    }

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: newText
      }
    });

    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            ref={editInputRef}
            type="text"
            defaultValue={task.text}
          />

          <button onClick={saveEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={toggleTask}
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
              cursor: "pointer"
            }}
          >
            {task.text}
          </span>

          <button onClick={startEditing}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;