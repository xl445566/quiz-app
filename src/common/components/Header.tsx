import type { NextPage } from "next";

import styled from "styled-components";

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: var(--white-color);
  background-color: var(--point-color);
`;

const Header: NextPage = () => {
  return (
    <Title>
      <h1>Quiz-App</h1>
    </Title>
  );
};

export default Header;
