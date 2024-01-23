import styled from "styled-components";

export const InputContainer = styled.label`
  width: 100%;
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
  }

  input::placeholder {
    font-size: 14px;
  }

  input:focus {
    background-color: initial;
  }
`;
