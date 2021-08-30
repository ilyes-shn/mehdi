import "../styles/globals.css";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Konfigg</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
