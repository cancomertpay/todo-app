import React from "react";
// styles
import { CheckboxContainer, CheckboxInput, Checkmark } from "../UI/CheckboxStyles";

function SubmitterCheckbox({...props}) {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        {...props}
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
}

export default SubmitterCheckbox;
