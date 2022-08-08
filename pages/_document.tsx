import type { NextPage } from "next";

import { Html, Head, Main, NextScript } from "next/document";

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
