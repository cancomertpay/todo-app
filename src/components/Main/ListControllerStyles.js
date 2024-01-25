import styled from "styled-components";

export const StyledController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${props => props.theme.secondaryTextColor};
  background-color: ${(props) => props.theme.cardColor};
  cursor: pointer;
  padding: 1.1rem;
  position: relative;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid ${props => props.theme.checkboxBorder};
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  transition: all 0.5s;

  span {
    user-select: none;
  }

  span:hover {
    transition: color 0.3s;
    color: ${props => props.theme.textColor};
  }
`;
