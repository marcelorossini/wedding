import GlobalStyles from "../styles/global";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
