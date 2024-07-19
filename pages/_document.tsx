import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://platform.twitter.com" />
        <link rel="preconnect" href="https://static.cdninstagram.com" />
        <link rel="preconnect" href="https://scontent.cdninstagram.com" />
        <link rel="preconnect" href="https://syndication.twitter.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
