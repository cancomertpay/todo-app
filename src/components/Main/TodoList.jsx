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
    const listClone = [...activeList];
    const temp = listClone[dragItem.current];
    listClone[dragItem.current] = listClone[draggedOverItem.current];
    listClone[draggedOverItem.current] = temp;
    dispatch(todoActions.updateSortOrder(listClone));
  };

  return (
    <TodoListContainer>
      <List>
        {activeList.length > 0 ? (
          activeList.map((item, index) => (
            <TodoListItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              // dragging events
              draggable={true}
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (draggedOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            />
          ))
        ) : (
          <Empty>Empty</Empty>
        )}
      </List>
      {activeList.length > 0 && <ListController list={activeList} />}
    </TodoListContainer>
  );
}

export default TodoList;
