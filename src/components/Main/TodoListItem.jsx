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

function TodoListItem({ item, removeItem, allScroll, ...props }) {
  const [showFullText, setShowFullText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <ListItem
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $allScroll={allScroll}
      {...props}
      id={item.id}
    >
      <TodoWrapper>
        <Checkbox id={item.id} isCompleted={item.isCompleted} />
        <TodoText
          $allScroll={allScroll}
          onClick={toggleShowFullText}
          $checked={item.isCompleted}
          $showFull={showFullText}
        >
          {item.text}
        </TodoText>
      </TodoWrapper>
      <DeleteIcon $isHovered={isHovered} onClick={() => removeItem(item.id)}>
        <RxCross1 />
      </DeleteIcon>
    </ListItem>
  );
}

export default TodoListItem;
