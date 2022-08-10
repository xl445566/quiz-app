import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Random quiz web app" />
          <meta
            name="description"
            content="You can check the results of the quiz on the chart
          You can create incorrect answer notes."
          />
          <meta
            name="keywords"
            content="Quiz, App, Problem, Solve, Random, Note"
          />
          <meta property="og:title" content="Random Quiz App" />
          <meta property="og:url" content="https://quizquizapp.netlify.app" />
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
          <link rel="icon" href="/logo.ico" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
