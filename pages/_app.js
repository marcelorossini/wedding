import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
}
