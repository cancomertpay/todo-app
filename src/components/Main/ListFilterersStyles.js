import styled from "styled-components";

export const ListFiltererContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.cardColor};
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.5s;
`;

export const Filterer = styled.span`
  text-align: center;
  margin: 0 0.1rem;
  color: ${(props) =>
    props.$active ? "hsl(220, 98%, 61%)" : props.theme.secondaryTextColor};
  font-weight: bold;

  user-select: none;
  transition: all 0.5;

  &:hover {
    color: hsl(220, 98%, 61%);
  }
`;
