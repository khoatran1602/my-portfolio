import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to domains for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Preload critical assets */}
          <link
            rel="preload"
            href="/favicon.ico"
            as="image"
            type="image/x-icon"
          />

          {/* Add font display swap for better performance */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Your Font';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/your-font.woff2') format('woff2');
              }
            `,
            }}
          />
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
