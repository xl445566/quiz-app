import type { NextPage } from "next";
import type { AppProps } from "next/app";

import styled from "styled-components";

import GlobalStyle from "../styles/globals";
import Header from "../src/common/components/Header";
import Footer from "../src/common/components/Footer";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
`;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </>
  );
};

export default MyApp;
