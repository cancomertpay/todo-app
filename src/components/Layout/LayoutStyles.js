import styled, {keyframes} from "styled-components";

const boxShadowAnimation = (imgBorderColor) => keyframes`
  0%, 100% {
    box-shadow: ${imgBorderColor[1]} 0px 10px,
    ${imgBorderColor[2]} 0px 20px, ${imgBorderColor[3]} 0px 30px,
    ${imgBorderColor[4]} 0px 40px, ${imgBorderColor[5]} 0px 50px;
  }
  50% {
    box-shadow: none;
  }
`;

export const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    animation: ${props => boxShadowAnimation(props.theme.imgBorderColor)} 5s ease infinite;
  }

  @media screen and (min-width: 1200px) {
    img {
      height: 17.5rem !important;
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding-top: 5rem;
    align-items: center;
    justify-content: center;
  }
`;
