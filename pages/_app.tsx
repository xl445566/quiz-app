import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globalStyle";

import Head from "next/head";
import Header from "../src/common/components/Header";
import Loading from "../src/common/components/Loading";

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
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>퀴즈 앱</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />

        <Layout>{loading ? <Loading /> : <Component {...pageProps} />}</Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
