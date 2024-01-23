import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

// utils
import generateUniqueId from "../../utils/idGeneretor";

// styles
import StyledMain from "./MainStyles";

// components
import Card from "../UI/Card";
import Input from "../UI/Input";
import TodoList from "./TodoList";
import SubmitterCheckbox from "./SubmitterCheckbox";
import ListFilterers from "./ListFilterers";
import Reorderer from "./Reorderer";

function Main() {
  // redux
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    if (userInput.length > 3) {
      setIsChecked((prev) => !prev);
    }
  };

  const handleSubmit = () => {
    if (isChecked) {
      dispatch(
        todoActions.addItemToList({
          id: generateUniqueId(),
          isCompleted: false,
          text: userInput,
        })
      );
      setUserInput("");
      setTimeout(() => {
        setIsChecked(false);
      }, 1000);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [isChecked]);

  return (
    <StyledMain>
      <Card>
        <SubmitterCheckbox
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <Input onChange={handleInputChange} value={userInput} />
      </Card>
      <TodoList />
      <ListFilterers />
      <Reorderer />
    </StyledMain>
  );
}

export default Main;
