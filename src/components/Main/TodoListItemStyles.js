import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.checkboxBorder};

  &:last-child {
    border: none;
  }
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 4px;
`;

export const TodoText = styled.p`
  max-width: 100%;
  margin: 0;
  cursor: pointer;
  font-size: 12px;
  text-decoration: ${(props) => (props.$checked ? "line-through" : "none")};
  color: ${(props) =>
    props.$checked ? props.theme.checkboxBorder : props.theme.textColor};
  transition: all 0.5s;
  overflow-x: auto;
  overflow-wrap: ${(props) => (props.$showFull ? "break-word" : "normal")};
  white-space: ${(props) => (props.$showFull ? "normal" : "no-wrap")};
`;

export const DeleteIcon = styled.div`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.checkboxBorder};
`;