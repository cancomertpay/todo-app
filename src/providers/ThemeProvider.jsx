// redux
import { useSelector } from "react-redux";
// styled-components
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

const ThemeWrapper = ({ children }) => {
  // redux
  const themeState = useSelector((state) => state.theme.theme);

  const theme = themeState === "dark" ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
