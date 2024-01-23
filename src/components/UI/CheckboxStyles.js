import styled from "styled-components";

export const CheckboxContainer = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding-left: 25px;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  top: -9px;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: -9px;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.5s;
  border: 1px solid ${(props) => props.theme.checkboxBorder};
  -webkit-tap-highlight-color: transparent; 
  -webkit-focus-ring-color: transparent; 

  svg {
    visibility: hidden;
    font-size: 12px;
  }

  ${CheckboxInput}:checked + & {
    height: 17px;
    width: 17px;
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
