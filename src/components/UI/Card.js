import styled from "styled-components"

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.cardColor};
  cursor: pointer;
  padding: 0.8rem;
  position: relative;
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent; 
  -webkit-focus-ring-color: transparent; 
`

export default Card;