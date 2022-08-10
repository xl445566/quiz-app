import type { NextPage } from "next";
import type { AppProps } from "next/app";

import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";

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
      <Head>
        <title>퀴즈 앱</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
