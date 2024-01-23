import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }

  #root {
    min-height: 100vh;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
