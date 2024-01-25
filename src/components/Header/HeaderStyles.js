import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  user-select: none;
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

  @media screen and (min-width: 760px) {
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    padding-bottom: 1rem;
    width: 40%;

    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.8rem;
    }
    svg {
      margin-bottom: 0.8rem;
    }
  }
`;

export default StyledHeader;
