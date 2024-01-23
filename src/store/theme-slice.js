import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../styles/theme";

const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  theme: prefersDarkMode ? "dark" : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
