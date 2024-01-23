import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ContentContainer = styled.div`
padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
`;
