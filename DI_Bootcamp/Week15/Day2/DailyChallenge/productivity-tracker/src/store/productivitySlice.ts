import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Category = {
  id: number;
  name: string;
};

export type Task = {
  id: number;
  title: string;
  categoryId: number;
  completed: boolean;
};

type ProductivityState = {
  tasks: Task[];
  categories: Category[];
};

const initialState: ProductivityState = {
  categories: [
    {
      id: 1,
      name: "Work"
    },
    {
      id: 2,
      name: "Study"
    },
    {
      id: 3,
      name: "Personal"
    }
  ],

  tasks: [
    {
      id: 1,
      title: "Finish Redux exercise",
      categoryId: 2,
      completed: false
    },
    {
      id: 2,
      title: "Reply to emails",
      categoryId: 1,
      completed: true
    }
  ]
};

const productivitySlice = createSlice({
  name: "productivity",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{
        title: string;
        categoryId: number;
      }>
    ) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        categoryId: action.payload.categoryId,
        completed: false
      });
    },

    editTask: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
      }>
    ) => {
      const task = state.tasks.find(
        task => task.id === action.payload.id
      );

      if (task) {
        task.title = action.payload.title;
      }
    },

    deleteTask: (
      state,
      action: PayloadAction<number>
    ) => {
      state.tasks = state.tasks.filter(
        task => task.id !== action.payload
      );
    },

    updateTaskProgress: (
      state,
      action: PayloadAction<number>
    ) => {
      const task = state.tasks.find(
        task => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    addCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.categories.push({
        id: Date.now(),
        name: action.payload
      });
    },

    editCategory: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
      }>
    ) => {
      const category = state.categories.find(
        category => category.id === action.payload.id
      );

      if (category) {
        category.name = action.payload.name;
      }
    },

    deleteCategory: (
      state,
      action: PayloadAction<number>
    ) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload
      );

      state.tasks = state.tasks.filter(
        task => task.categoryId !== action.payload
      );
    }
  }
});

export const {
  addTask,
  editTask,
  deleteTask,
  updateTaskProgress,
  addCategory,
  editCategory,
  deleteCategory
} = productivitySlice.actions;

export default productivitySlice.reducer;