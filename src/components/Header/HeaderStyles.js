import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  h1 {
    letter-spacing: 0.5rem;
    margin: 0;
    color: #fff;
    font-size: 1.8rem;
  }

  svg {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
`;

export default StyledHeader;
