// Material UI x Next.js setup file
// https://material-ui.com/styles/advanced/#next-js

import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../styles/theme/theme';

export default class MyDocument extends Document {
  render(): ReactElement {
    const pageTitle = 'Digital Waves NL';
    const baseUri = 'https://digitalwavesnl.ca';

    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WZDS93L');`,
            }}
          >
          </script>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta charSet="utf-8" />
          <meta name="color-scheme" content="light only" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;700&display=swap" rel="stylesheet" />
          <meta name="description" property="description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
          <meta name="og:locale" property="og:locale" content="en_US" />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={pageTitle} />
          <meta name="og:description" property="og:description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
          <meta name="og:url" property="og:url" content={baseUri} />
          <meta name="og:site_name" property="og:site_name" content="Digital Waves NL" />
          <meta name="og:image" property="og:image" content={`${baseUri}/assets/images/social/social-facebook.png`} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DigitalWavesNL" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:creator" property="twitter:creator" content="@DigitalWavesNL" />
          <meta name="twitter:image" content={`${baseUri}/assets/images/social/social-twitter.png`} />
          <meta name="twitter:url" content={baseUri} />
          <meta name="twitter:description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZDS93L"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          >
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
