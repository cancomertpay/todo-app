import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";
import { List, TodoListContainer, Empty } from "./TodoListStyles";
import TodoListItem from "./TodoListItem";
import ListController from "./ListController";

function TodoList() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.ui.activeFilter);
  const todoList = useSelector((state) => state.todo.todoList);
  const [activeList, setActiveList] = useState(todoList);

  const getActiveList = () => {
    switch (activeFilter) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((item) => !item.isCompleted);
      case "completed":
        return todoList.filter((item) => item.isCompleted);
      default:
        return todoList;
    }
  };

  const removeItem = (id) => {
    dispatch(todoActions.removeFromList(id));
  };

  useEffect(() => {
    setActiveList(getActiveList());
  }, [activeFilter, todoList]);

  // reorderer logic
  const dragItem = useRef(0);
  const draggedOverItem = useRef(0);

  const handleSort = () => {
    const listClone = [...todoList];
    const temp = listClone[dragItem.current];
    listClone[dragItem.current] = listClone[draggedOverItem.current];
    listClone[draggedOverItem.current] = temp;
    dispatch(todoActions.updateSortOrder(listClone));
  };

  // touch event handlers
  const draggedItem = useRef(null);
  const listRef = useRef(null);

  const handleTouchStart = (index, e) => {
    if (activeFilter === "all") {
      draggedItem.current = index;
      document.body.style.overflow = "hidden";
    }

    return;
  };

  const handleTouchMove = (e) => {
    if (draggedItem.current === null || activeFilter !== "all") return;

    const touch = e.touches[0];
    const listRect = listRef.current.getBoundingClientRect();
    const draggedOverItem = document.elementFromPoint(
      touch.clientX - listRect.left,
      touch.clientY - listRect.top
    );
    if (draggedOverItem) {
      const closestLi = draggedOverItem.closest("li");

      if (closestLi) {
        const draggedOverItemIndex = Array.from(
          closestLi.parentNode.children
        ).indexOf(closestLi);

        if (draggedOverItemIndex !== -1) {
          const listClone = [...todoList];
          const temp = listClone[draggedItem.current];
          listClone[draggedItem.current] = listClone[draggedOverItemIndex];
          listClone[draggedOverItemIndex] = temp;
          dispatch(todoActions.updateSortOrder(listClone));

          draggedItem.current = draggedOverItemIndex;
        }
      }
    }
  };

  const handleTouchEnd = () => {
    if (activeFilter === "all") {
      draggedItem.current = null;
      document.body.style.overflow = "auto";
    }

    return;
  };

  return (
    <TodoListContainer>
      <List
        ref={listRef}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {activeList.length > 0 ? (
          activeList.map((item, index) => (
            <TodoListItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              allScroll={activeFilter === "all"}
              // dragging events
              draggable={activeFilter === "all"}
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (draggedOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              // touch events
              onTouchStart={(e) => handleTouchStart(index, e)}
            />
          ))
        ) : (
          <Empty>Empty</Empty>
        )}
      </List>
      {todoList.length > 0 && <ListController list={todoList} />}
    </TodoListContainer>
  );
}

export default TodoList;
