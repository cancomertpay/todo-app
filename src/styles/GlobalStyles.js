import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
 from {
  opacity: 0;
  transform: translateY(10%);
 }
 to {
  opacity: 1;
  transform: translateY(0);
 }
`;

const GlobalStyles = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    box-sizing: border-box;
    animation: ${fadeIn} 0.8s ease;
  }
`;

export default GlobalStyles;
