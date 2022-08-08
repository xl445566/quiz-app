import styled, { ButtonContainerProps } from "styled-components";

const BottonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
  min-height: 20vh;
`;

export default BottonContainer;
