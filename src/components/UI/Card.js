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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.3s;
`

export default Card;