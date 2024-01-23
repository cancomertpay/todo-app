import React, { useEffect, useState } from "react";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

// styles
import { List, TodoListContainer, Empty } from "./TodoListStyles";

// components
import TodoListItem from "./TodoListItem";
import Notification from "./Notification";
import ListController from "./ListController";

function TodoList() {
  // redux
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.ui.activeFilter);
  const todoList = useSelector((state) => state.todo.todoList);

  const [activeList, setActiveList] = useState(todoList);

  const getActiveList = () => {
    switch (activeFilter) {
      case "all":
        setActiveList(todoList);
        break;
      case "active":
        const activeList = todoList.filter((item) => !item.isCompleted);
        setActiveList(activeList);
        break;
      case "completed":
        const completedList = todoList.filter((item) => item.isCompleted);
        setActiveList(completedList);
        break;
    }
  };

  const removeItem = (id) => {
    dispatch(todoActions.removeFromList(id));
  };

  useEffect(() => {
    getActiveList();
  }, [activeFilter, todoList]);

  return (
    <TodoListContainer>
      <List>
        {activeList.length > 0 ? (
          activeList.map((item) => (
            <TodoListItem key={item.id} item={item} removeItem={removeItem} />
          ))
        ) : (
          <Empty>Empty</Empty>
        )}
      </List>
      {activeList.length > 0 && <ListController list={activeList} />}
      <Notification />
    </TodoListContainer>
  );
}

export default TodoList;
