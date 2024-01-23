import { createSlice } from "@reduxjs/toolkit";

const initialList = [
  { id: 0, isCompleted: true, text: "Complete online JavaScript course" },
  { id: 1, isCompleted: false, text: "Jog around the park 3x" },
  { id: 2, isCompleted: false, text: "10 minutes meditation" },
  { id: 3, isCompleted: false, text: "Read for 1 hour" },
  { id: 4, isCompleted: false, text: "Pick up groceries" },
  {
    id: 5,
    isCompleted: true,
    text: "Complete Todo App on Frontend Mentor",
  },
];

const initialState = {
  todoList: initialList,
  activeList: initialList.filter((item) => !item.isCompleted),
  completedList: initialList.filter((item) => item.isCompleted),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItemToList(state, action) {
      const newItem = action.payload;

      state.todoList.unshift({
        id: newItem.id,
        isCompleted: newItem.isCompleted,
        text: newItem.text,
      });

      state.activeList = state.todoList.filter((item) => !item.isCompleted);
    },
    removeFromList(state, action) {
      const id = action.payload;
      const newArr = state.todoList.filter((item) => item.id !== id);
      state.todoList = newArr;
    },
    clearCompletedItems(state) {
      const activeItemList = state.todoList.filter((item) => !item.isCompleted);

      state.todoList = activeItemList;
    },
    handleCheck(state, action) {
      const { id, isCompleted } = action.payload;
      const updatedItems = state.todoList.map((item) =>
        item.id === id ? { ...item, isCompleted: isCompleted } : item
      );
      state.todoList = updatedItems;

      state.completedList = state.todoList.filter((item) => item.isCompleted);

      state.activeList = state.todoList.filter((item) => !item.isCompleted);
    },
    // getFilteredList(state, action) {
    //   switch (action.payload) {
    //     case "all":
    //       return state.todoList;
    //       break;
    //     case "active":
    //       return state.activeList;
    //       break;
    //     case "completed":
    //       return state.completedList;
    //       break;
    //   }
    // },
    // getAllItems(state) {
    //   state.shownList = [...state.todoList];
    // },
    // getCompletedList(state) {
    //   state.shownList = [...state.completedList];
    // },
    // getActiveItemList(state) {
    //   state.shownList = [...state.activeList];
    // },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
