import styled from "styled-components";

export const TodoListContainer = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  cursor: pointer;
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  position: relative;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  touch-action: none;
`;

export const Empty = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${(props) => props.theme.checkboxBorder};
`;
