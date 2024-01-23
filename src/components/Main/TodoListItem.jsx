import React, { useState } from "react";

// styles
import {
  DeleteIcon,
  ListItem,
  TodoText,
  TodoWrapper,
} from "./TodoListItemStyles";

// ui-components
import Checkbox from "../UI/Checkbox";

// icon
import { RxCross1 } from "react-icons/rx";

function TodoListItem({ item, removeItem }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <ListItem id={item.id}>
      <TodoWrapper>
        <Checkbox id={item.id} isCompleted={item.isCompleted} />
        <TodoText onClick={toggleShowFullText} $checked={item.isCompleted} $showFull={showFullText}>{item.text}</TodoText>
      </TodoWrapper>
      <DeleteIcon onClick={() => removeItem(item.id)}>
        <RxCross1 />
      </DeleteIcon>
    </ListItem>
  );
}

export default TodoListItem;
