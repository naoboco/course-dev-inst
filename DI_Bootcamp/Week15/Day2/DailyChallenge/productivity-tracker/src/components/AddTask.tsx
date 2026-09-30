import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/productivitySlice";
import type { AppDispatch } from "../store/store";

type AddTaskProps = {
  selectedCategoryId: number;
};

function AddTask({ selectedCategoryId }: AddTaskProps) {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    dispatch(
      addTask({
        title: title.trim(),
        categoryId: selectedCategoryId
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;