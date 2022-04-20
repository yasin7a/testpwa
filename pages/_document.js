import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="theme-color" content="#c82222" />
          <meta name="author" content="noteact" />

          <meta name="application-name" content="noteact" />
          <meta name="apple-mobile-web-app-title" content="noteact" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />

          <link rel="icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
