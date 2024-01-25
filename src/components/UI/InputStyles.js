import styled from "styled-components";

export const InputContainer = styled.label`
  width: 100%;
  input {
    margin: 1px 0 0 5px;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
    font-family: "Josefin Sans", sans-serif;

    @media screen and (min-width: 1000px) {
      padding: 0.2rem;
      padding-top: 0.3rem;
      font-size: 18px;
    }
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.secondaryTextColor};
  }

  input:focus {
    background-color: initial;
  }
`;
