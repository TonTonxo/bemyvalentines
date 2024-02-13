import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Be My Valentine" />
        <meta
          name="description"
          content="This is site personal project made by Anthony D. Sulpico/TonTon"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bemyvalentines-eta.vercel.app/" />
        <meta property="og:title" content="BeMyValentine" />
        <meta property="og:image" content="/bmvBanner.png" />

        <meta
          property="og:description"
          content="This is site personal project made by Anthony D. Sulpico/TonTon"
        />
        <meta property="og:image" content="/bmvBanner.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://bemyvalentines-eta.vercel.app/"
        />
        <meta property="twitter:title" content="BeMyValentine" />
        <meta
          property="twitter:description"
          content="This is site personal project made by Anthony D. Sulpico/TonTon"
        />
        <meta property="twitter:image" content="/bmvBanner.png" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
        <meta property="og:image" content="/bmvBanner.png" />
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
