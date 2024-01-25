import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  @media screen and (min-width: 760px) {
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export default StyledMain;
