import { Html, Head, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";
import { FB_PIXEL_ID } from "../utils/fpixel";

export default function DocumentPage() {
  return (
    <Html lang={AppConfig.locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </Head>
      <body className="antialiased text-slate-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
