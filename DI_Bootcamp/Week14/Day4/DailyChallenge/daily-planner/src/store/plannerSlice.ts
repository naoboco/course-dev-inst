import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  text: string;
};

type PlannerState = {
  selectedDate: string;
  tasksByDate: Record<string, Task[]>;
};

const initialState: PlannerState = {
  selectedDate: new Date().toISOString().split("T")[0],
  tasksByDate: {}
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },

    addTask: (
      state,
      action: PayloadAction<{ date: string; text: string }>
    ) => {
      const { date, text } = action.payload;

      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }

      state.tasksByDate[date].push({
        id: Date.now(),
        text
      });
    },

    editTask: (
      state,
      action: PayloadAction<{
        date: string;
        id: number;
        text: string;
      }>
    ) => {
      const { date, id, text } = action.payload;

      const task = state.tasksByDate[date]?.find(
        task => task.id === id
      );

      if (task) {
        task.text = text;
      }
    },

    deleteTask: (
      state,
      action: PayloadAction<{
        date: string;
        id: number;
      }>
    ) => {
      const { date, id } = action.payload;

      if (state.tasksByDate[date]) {
        state.tasksByDate[date] =
          state.tasksByDate[date].filter(
            task => task.id !== id
          );
      }
    }
  }
});

export const {
  setSelectedDate,
  addTask,
  editTask,
  deleteTask
} = plannerSlice.actions;

export default plannerSlice.reducer;