import React from "react";
import { InputContainer } from "./InputStyles";

function Input(props) {
  return (
    <InputContainer htmlFor="text-input">
      <input
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        value={props.value}
        id="text-input"
        type="text"
        placeholder="Create a new todo..."
        autoComplete="off"
      />
    </InputContainer>
  );
}

export default Input;
