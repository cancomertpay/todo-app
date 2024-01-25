import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.checkboxBorder};
  cursor: ${(props) => (props.$allScroll ? "all-scroll" : "not-allowed")};

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
  gap: 0.5rem;
  @media screen and (min-width: 1000px) {
    gap: 1rem;
  }
`;

export const TodoText = styled.p`
  max-width: 100%;
  margin: 0;
  cursor: ${(props) => (props.$allScroll ? "all-scroll" : "not-allowed")};
  font-size: 15px;
  text-decoration: ${(props) => (props.$checked ? "line-through" : "none")};
  color: ${(props) =>
    props.$checked ? props.theme.checkedTextColor : props.theme.textColor};
  transition: all 0.5s;
  overflow-x: auto;
  overflow-wrap: ${(props) => (props.$showFull ? "break-word" : "normal")};
  white-space: ${(props) => (props.$showFull ? "normal" : "no-wrap")};

  @media screen and (min-width: 1000px) {
    font-size: 18px;
    margin-top: 0.3rem;
  }
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.checkedTextColor};

  @media screen and (min-width: 1000px) {
    visibility: ${(props) => (props.$isHovered ? "visible" : "hidden")};
  }
`;
