import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/plannerSlice";
import type { RootState, AppDispatch } from "../store/store";

function AddTask() {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const selectedDate = useSelector(
    (state: RootState) => state.planner.selectedDate
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(
      addTask({
        date: selectedDate,
        text: text.trim()
      })
    );

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={event => setText(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;