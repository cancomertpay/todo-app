import React from "react";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

// ui-component
import Card from "../UI/Card";

// styles
import { StyledController } from "./ListControllerStyles";

function ListController() {
  // redux
  const list = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const activeItemsLength = list.filter((item) => !item.isCompleted).length;

  const clearCompletedItems = () => {
    dispatch(todoActions.clearCompletedItems());
  };
  return (
    <StyledController>
      <span>{activeItemsLength} items left</span>
      <span onClick={clearCompletedItems}>Clear completed</span>
    </StyledController>
  );
}

export default ListController;
