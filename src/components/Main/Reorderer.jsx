import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

// styles
import { ReordererContainer } from "./ReordererStyles";

function Reorderer() {
  // redux
  const dispatch = useDispatch();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (
      scrollPosition + windowHeight >= totalHeight &&
      scrollPosition < totalHeight
    ) {
      dispatch(uiActions.nextFilter());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <ReordererContainer>Drag and drop to reorder list</ReordererContainer>;
}

export default Reorderer;
