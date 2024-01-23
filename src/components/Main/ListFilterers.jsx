import React, { useEffect, useState } from "react";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

// styles
import { Filterer, ListFiltererContainer } from "./ListFilterersStyles";

function ListFilterers() {
  // redux
  const activeFilter = useSelector((state) => state.ui.activeFilter);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(activeFilter);

  const getAllItemsList = () => {
    dispatch(uiActions.switchFilter("all"));
    setIsActive("all");
  };

  const getActiveItemsList = () => {
    dispatch(uiActions.switchFilter("active"));
    setIsActive("active");
  };

  const getCompletedItemsList = () => {
    dispatch(uiActions.switchFilter("completed"));
    setIsActive("completed");
  };

  useEffect(() => {
    setIsActive(activeFilter);
  }, [activeFilter]);

  return (
    <ListFiltererContainer>
      <Filterer $active={isActive === "all"} onClick={getAllItemsList}>
        All
      </Filterer>
      <Filterer $active={isActive === "active"} onClick={getActiveItemsList}>
        Active
      </Filterer>
      <Filterer
        $active={isActive === "completed"}
        onClick={getCompletedItemsList}
      >
        Completed
      </Filterer>
    </ListFiltererContainer>
  );
}

export default ListFilterers;
