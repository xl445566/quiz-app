import type { NextPage } from "next";
import { ButtonProps } from "../../types/index";

import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--point-color);
  color: var(--white-color);
  font-size: 1rem;
`;

const Button: NextPage<ButtonProps> = ({ label, onClick }) => {
  return <Wrapper onClick={onClick}>{label}</Wrapper>;
};

export default Button;
