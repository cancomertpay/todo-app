import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NotificationContainer } from "./NotificationStyles";

function Notification() {
  const [showNotify, setShowNotify] = useState(false);

  const handleClick = () => {
    setShowNotify(false);
  };

  useEffect(() => {
    const firstTimeoutId = setTimeout(() => {
      setShowNotify(true);
      const secondTimeoutId = setTimeout(() => {
        setShowNotify(false);
      }, 5000);

      return () => clearTimeout(secondTimeoutId);
    }, 2000);

    return () => clearTimeout(firstTimeoutId);
  }, []);
  return (
    showNotify &&
    ReactDOM.createPortal(
      <NotificationContainer onClick={handleClick}>
        If the task's text overflows, you can click on the task to show all
        text.
      </NotificationContainer>,
      document.body
    )
  );
}

export default Notification;
