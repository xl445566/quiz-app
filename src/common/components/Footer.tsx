import type { NextPage } from "next";

import styled from "styled-components";

const Title = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: var(--white-color);
  background-color: var(--light-gray-color);
`;

const Footer: NextPage = () => {
  return (
    <Title>
      <p>@ 2022 Seo Dongsu</p>
    </Title>
  );
};

export default Footer;
