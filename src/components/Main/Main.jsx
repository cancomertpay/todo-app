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
import Notification from "./Notification";

function Main() {
  // redux
  const dispatch = useDispatch();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isUserHittedEnter, setIsUserHittedEnter] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    if (userInput.length > 3) {
      setIsChecked((prev) => !prev);
    }
    return;
  };

  const handleSubmit = () => {
    if (isChecked && userInput.length > 3) {
      dispatch(
        todoActions.addItemToList({
          id: generateUniqueId(),
          isCompleted: false,
          text: userInput,
        })
      );
      setUserInput("");
      setIsUserHittedEnter(false);
      setTimeout(() => {
        setIsChecked(false);
      }, 1000);
    }

    if (isUserHittedEnter && userInput.length > 3) {
      setIsUserHittedEnter(false);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Enter" || e.key === "Enter") {
      e.preventDefault();
      setIsUserHittedEnter(true);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [isChecked, isUserHittedEnter]);

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
    <StyledMain>
      <Card>
        <SubmitterCheckbox
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <Input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={userInput}
        />
      </Card>
      <TodoList />
      {!isDesktop && <ListFilterers />}
      <Reorderer />
      <Notification />
    </StyledMain>
  );
}

export default Main;
