import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    activeFilter: "all",
  },
  reducers: {
    switchFilter(state, action) {
      state.activeFilter = action.payload;
    },
    nextFilter(state) {
      switch (state.activeFilter) {
        case "all":
          state.activeFilter = "active";
          break;
        case "active":
          state.activeFilter = "completed";
          break;
        case "completed":
          state.activeFilter = "all";
          break;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
