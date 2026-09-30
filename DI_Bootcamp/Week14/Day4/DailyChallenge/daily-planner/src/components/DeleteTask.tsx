import { useDispatch } from "react-redux";
import { deleteTask, type Task } from "../store/plannerSlice";
import type { AppDispatch } from "../store/store";

type DeleteTaskProps = {
  task: Task;
  date: string;
};

function DeleteTask({ task, date }: DeleteTaskProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        date,
        id: task.id
      })
    );
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteTask;