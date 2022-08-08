import type { NextPage } from "next";
import { ButtonProps } from "../../types/index";

import styled, { ButtonStyleProps } from "styled-components";

const Wrapper = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => {
    if (!props.color) {
      return "var(--point-color)";
    } else if (props.color === "red") {
      return "var(--red-color)";
    }
  }};
  color: var(--white-color);
  font-size: 1rem;
  :hover {
    ${(props) => {
      if (!props.color) {
        return "background-color: var(--pointSub-color)";
      } else if (props.color === "red") {
        return "background-color: var(--redSub-color)";
      }
    }};
  }
`;

const Button: NextPage<ButtonProps> = ({
  label,
  onClick,
  color = "",
  hoverColor = "",
}) => {
  return (
    <Wrapper onClick={onClick} color={color} hoverColor={hoverColor}>
      {label}
    </Wrapper>
  );
};

export default Button;
