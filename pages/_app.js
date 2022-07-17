import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zozo</title>
      </Head>
      <Component {...pageProps} />
      {/* <Layout>
      </Layout> */}
    </>
  );
}

export default MyApp;
