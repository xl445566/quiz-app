import type { NextPage } from "next";
import type { AppProps } from "next/app";

import styled from "styled-components";

import GlobalStyle from "../styles/globalStyle";
import Header from "../src/common/components/Header";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 50px);
  max-height: calc(100vh - 50px);
`;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
