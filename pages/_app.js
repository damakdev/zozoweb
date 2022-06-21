import Head from "next/head";
import AdBanner from "../components/ui/ad-banner/ad-banner";
import Layout from "../components/ui/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zozo</title>
      </Head>
      <AdBanner />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
