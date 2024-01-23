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

  span {
  }

  span:hover {
    color: hsl(220, 98%, 61%);
  }
`;

export const Filterer = styled.span`
  transition: all 0.3s;
  text-align: center;
  margin: 0 0.5rem;
  color: ${(props) =>
    props.$active ? "hsl(220, 98%, 61%)" : props.theme.checkboxBorder};
  font-weight: ${(props) => (props.$active ? "700" : "400")};

  &:hover {
    color: hsl(220, 98%, 61%);
    font-weight: bold;
  }
`;
