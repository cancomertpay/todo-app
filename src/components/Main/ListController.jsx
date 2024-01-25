import React, { useEffect, useState } from "react";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

// components
import ListFilterers from "./ListFilterers"

// styles
import { StyledController } from "./ListControllerStyles";

function ListController() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  // redux
  const list = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const activeItemsLength = list.filter((item) => !item.isCompleted).length;

  const clearCompletedItems = () => {
    dispatch(todoActions.clearCompletedItems());
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledController>
      {activeItemsLength > 0 ? <span>{activeItemsLength} items left</span> : <span>All tasks done</span>}
      {isDesktop && <ListFilterers />}
      <span onClick={clearCompletedItems}>Clear completed</span>
    </StyledController>
  );
}

export default ListController;
