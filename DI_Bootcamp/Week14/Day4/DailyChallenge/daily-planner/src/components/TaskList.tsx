import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function TaskList() {
  const selectedDate = useSelector(
    (state: RootState) => state.planner.selectedDate
  );

  const tasks = useSelector(
    (state: RootState) =>
      state.planner.tasksByDate[selectedDate] || []
  );

  return (
    <div>
      <h2>Tasks for {selectedDate}</h2>

      {tasks.length === 0 ? (
        <p>No tasks for this day</p>
      ) : (
        tasks.map(task => (
          <div key={task.id}>
            <p>{task.text}</p>

            <EditTask
              task={task}
              date={selectedDate}
            />

            <DeleteTask
              task={task}
              date={selectedDate}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;