import styled from "styled-components";

export const StyledController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${props => props.theme.checkboxBorder};
  background-color: ${(props) => props.theme.cardColor};
  cursor: pointer;
  padding: 1.1rem;
  position: relative;
  border-radius: 4px;
  border-top: 1px solid ${props => props.checkboxBorder};
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;

  span {
    transition: color 0.3s;
  }

  span:hover {
    color: hsl(220, 98%, 61%);
  }
`;
