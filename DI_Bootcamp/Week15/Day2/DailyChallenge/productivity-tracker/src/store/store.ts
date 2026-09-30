import { configureStore } from "@reduxjs/toolkit";
import productivityReducer from "./productivitySlice";

export const store = configureStore({
  reducer: {
    productivity: productivityReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;