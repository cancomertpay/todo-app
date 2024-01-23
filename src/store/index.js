import { configureStore } from "@reduxjs/toolkit";
// slices
import themeSlice from "./theme-slice";
import todoSlice from "./todo-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    todo: todoSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
