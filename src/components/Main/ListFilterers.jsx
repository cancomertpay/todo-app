import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

// styles
import { Filterer, ListFiltererContainer } from "./ListFilterersStyles";

function ListFilterers() {
  // redux
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const getAllItemsList = () => {
    dispatch(uiActions.switchFilter("all"));
    setIsActive({ all: true, active: false, completed: false });
  };

  const getActiveItemsList = () => {
    dispatch(uiActions.switchFilter("active"));
    setIsActive({ all: false, active: true, completed: false });
  };

  const getCompletedItemsList = () => {
    dispatch(uiActions.switchFilter("completed"));
    setIsActive({ all: false, active: false, completed: true });
  };

  return (
    <ListFiltererContainer>
      <Filterer $active={isActive.all} onClick={getAllItemsList}>
        All
      </Filterer>
      <Filterer $active={isActive.active} onClick={getActiveItemsList}>
        Active
      </Filterer>
      <Filterer $active={isActive.completed} onClick={getCompletedItemsList}>
        Completed
      </Filterer>
    </ListFiltererContainer>
  );
}

export default ListFilterers;
