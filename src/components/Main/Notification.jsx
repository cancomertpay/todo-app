import React, { useState } from "react";
import ReactDOM from "react-dom";

// styles
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translatex(100%);
  }
  to {
    opacity: 1;
    transform: translatex(0);
  }
`;

const StyledNotification = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 0;
  background-color: hsl(220, 98%, 61%);
  padding: 0.7rem;
  text-align: center;
  color: #1a1a1ac4;
  font-weight: bold;
  animation: ${fadeIn} 1s ease;
  cursor: pointer;
  z-index: 1000;
`;

function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  const openTheNotification = () => {
    setShowNotification(true);
  };

  const closeTheNotification = () => {
    setShowNotification(false);
  };

  useState(() => {
    const openNotification = setTimeout(openTheNotification, 3000);
    const closeNotification = setTimeout(closeTheNotification, 10000);

    return () => {
      clearTimeout(closeNotification);
      clearTimeout(openNotification);
    };
  }, []);

  return (
    showNotification &&
    ReactDOM.createPortal(
      <StyledNotification onClick={closeTheNotification}>
        If any task's text overflows, you can click on the text to view the entire task
        content.
      </StyledNotification>,
      document.body
    )
  );
}

export default Notification;
