import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const selectTasks = (state: RootState) =>
  state.productivity.tasks;

const selectCategories = (state: RootState) =>
  state.productivity.categories;

export const selectTasksByCategory = createSelector(
  [
    selectTasks,
    (_state: RootState, categoryId: number) => categoryId
  ],
  (tasks, categoryId) =>
    tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  tasks =>
    tasks.filter(task => task.completed).length
);

export const selectCategoryById = createSelector(
  [
    selectCategories,
    (_state: RootState, categoryId: number) => categoryId
  ],
  (categories, categoryId) =>
    categories.find(category => category.id === categoryId)
);