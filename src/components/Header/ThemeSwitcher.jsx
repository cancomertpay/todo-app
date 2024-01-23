import React from "react";

// redux
import { useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { useSelector } from "react-redux";

// icons
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const switchTheme = (themeName) => {
    dispatch(themeActions.changeTheme(themeName));
  };
  return (
    <React.Fragment>
      {theme === "dark" ? (
        <IoSunnySharp onClick={() => switchTheme("light")} />
      ) : (
        <IoMoonSharp onClick={() => switchTheme("dark")} />
      )}
    </React.Fragment>
  );
}

export default ThemeSwitcher;
