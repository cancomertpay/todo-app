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
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (min-width: 1000px) {
    box-shadow: none;
    padding: 0;
    width: 40%;
    font-size: 0.8rem;
  }
`;

export const Filterer = styled.span`
  text-align: center;
  margin: 0 0.1rem;
  color: ${(props) =>
    props.$active ? "hsl(220, 98%, 61%)" : props.theme.secondaryTextColor};
  font-weight: bold;
  user-select: none;
  transition: all 0.5s;

  &:hover {
    color: ${(props) =>
      !props.$active ? props.theme.textColor : "hsl(220, 98%, 61%)"};
  }
`;
