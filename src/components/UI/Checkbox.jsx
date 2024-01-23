import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

// styles
import { CheckboxContainer, CheckboxInput, Checkmark } from "./CheckboxStyles";

const Checkbox = ({ id, isCompleted = false }) => {
  // redux
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    setIsChecked((prev) => !prev);
  };

  const handleActive = () => {
    dispatch(
      todoActions.handleCheck({
        id,
        isCompleted: isChecked,
      })
    );
  };

  useEffect(() => {
    handleActive();
  }, [isChecked]);

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkmark>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7 10 1"
          />
        </svg>
      </Checkmark>
    </CheckboxContainer>
  );
};

export default Checkbox;
