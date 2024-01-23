import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NotificationContainer = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  animation: ${fadeIn} 0.5s ease-in-out;
  z-index: 100;
`;
