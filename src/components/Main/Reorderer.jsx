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
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop === clientHeight) {
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
