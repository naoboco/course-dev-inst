import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTask,
  deleteTask,
  updateTaskProgress
} from "../store/productivitySlice";
import {
  selectTasksByCategory,
  selectCompletedTasks,
  selectCategoryById
} from "../store/selectors";
import type { RootState, AppDispatch } from "../store/store";

type TaskListProps = {
  selectedCategoryId: number;
};

function TaskList({ selectedCategoryId }: TaskListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [editingTaskId, setEditingTaskId] =
    useState<number | null>(null);

  const [editText, setEditText] =
    useState<string>("");

  const tasks = useSelector((state: RootState) =>
    selectTasksByCategory(state, selectedCategoryId)
  );

  const completedTasks = useSelector(selectCompletedTasks);

  const category = useSelector((state: RootState) =>
    selectCategoryById(state, selectedCategoryId)
  );

  const handleToggle = useCallback(
    (id: number) => {
      dispatch(updateTaskProgress(id));
    },
    [dispatch]
  );

  const startEditing = useCallback(
    (id: number, title: string) => {
      setEditingTaskId(id);
      setEditText(title);
    },
    []
  );

  const saveEdit = useCallback(() => {
    if (editingTaskId === null || !editText.trim()) {
      return;
    }

    dispatch(
      editTask({
        id: editingTaskId,
        title: editText.trim()
      })
    );

    setEditingTaskId(null);
    setEditText("");
  }, [dispatch, editingTaskId, editText]);

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  return (
    <div>
      <h2>
        Tasks - {category?.name || "Unknown Category"}
      </h2>

      <p>
        Total completed tasks: {completedTasks}
      </p>

      {tasks.length === 0 ? (
        <p>No tasks in this category</p>
      ) : (
        tasks.map(task => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={event =>
                    setEditText(event.target.value)
                  }
                />

                <button onClick={saveEdit}>
                  Save
                </button>

                <button
                  onClick={() =>
                    setEditingTaskId(null)
                  }
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none"
                  }}
                >
                  {task.title}
                </span>

                <button
                  onClick={() =>
                    handleToggle(task.id)
                  }
                >
                  {task.completed
                    ? "Mark Active"
                    : "Complete"}
                </button>

                <button
                  onClick={() =>
                    startEditing(
                      task.id,
                      task.title
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(task.id)
                  }
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;