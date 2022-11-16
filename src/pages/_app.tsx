import type { AppProps } from "next/app";

import FacebookPixel from "../components/FacebookPixel";

import "../utils/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <FacebookPixel />
    <Component {...pageProps} />
  </>
);

export default MyApp;
