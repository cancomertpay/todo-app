import styled from "styled-components";

export const CheckboxContainer = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding-left: 25px;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  top: -11px;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: -11px;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  border: 1px solid ${(props) => props.theme.checkboxBorder};
  -webkit-tap-highlight-color: transparent; 
  -webkit-focus-ring-color: transparent; 

  svg {
    padding-top: 0.1rem;
    visibility: hidden;
  }

  ${CheckboxInput}:checked + & {
    height: 20px;
    width: 20px;
    background: linear-gradient(
      to right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    border: none;
    svg {
      visibility: visible;
    }
  }

  &:hover {
    background: linear-gradient(
          ${(props) => props.theme.cardColor},
          ${(props) => props.theme.cardColor}
        )
        padding-box,
      linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        border-box;
    border: 1px solid transparent;
  }
`;
