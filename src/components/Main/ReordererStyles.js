import styled from "styled-components";

export const ReordererContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.secondaryTextColor};
  user-select: none;

  @media screen and (min-width: 1000px) {
    margin-top: 2rem;
  }
`
