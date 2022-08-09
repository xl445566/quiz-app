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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Random quiz web app" />
        <meta
          name="description"
          content="You can check the results of the quiz on the chart
          You can create incorrect answer notes."
        />
        <meta
          name="keywords"
          content="Quiz, App, Problem, Solve, Random, Note"
        ></meta>
        <meta property="og:title" content="Random Quiz App" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="Web-App" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/78071591/183364643-d2a50dab-07da-457e-9566-8ec5f525b43c.png"
        />
        <meta property="og:site_name" content="Quiz-App" />
        <meta
          property="og:description"
          content="You can check the results of the quiz on the chart
          You can create incorrect answer notes."
        />
        <title>퀴즈 앱</title>
        <link rel="icon" href="/logo.ico" />
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
