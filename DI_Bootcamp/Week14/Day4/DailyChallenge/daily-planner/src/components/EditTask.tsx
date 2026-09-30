import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, type Task } from "../store/plannerSlice";
import type { AppDispatch } from "../store/store";

type EditTaskProps = {
  task: Task;
  date: string;
};

function EditTask({ task, date }: EditTaskProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(task.text);

  const dispatch = useDispatch<AppDispatch>();

  const saveTask = () => {
    if (!text.trim()) {
      return;
    }

    dispatch(
      editTask({
        date,
        id: task.id,
        text: text.trim()
      })
    );

    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
          />

          <button onClick={saveTask}>
            Save
          </button>

          <button onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
}

export default EditTask;