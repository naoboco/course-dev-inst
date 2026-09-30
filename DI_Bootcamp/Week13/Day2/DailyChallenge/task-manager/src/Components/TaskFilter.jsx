import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFilter() {
  const { filter, dispatch } = useContext(TaskContext);

  const changeFilter = newFilter => {
    dispatch({
      type: "FILTER_TASKS",
      payload: newFilter
    });
  };

  return (
    <div>
      <button
        onClick={() => changeFilter("all")}
        disabled={filter === "all"}
      >
        All
      </button>

      <button
        onClick={() => changeFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>

      <button
        onClick={() => changeFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;