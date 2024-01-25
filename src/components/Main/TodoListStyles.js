import styled from "styled-components";

export const TodoListContainer = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  position: relative;
  user-select: none;
  touch-action: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.5s;

`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Empty = styled.div`
  box-sizing: border-box;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${(props) => props.theme.checkboxBorder};
  transition: all 0.5s;
`;
