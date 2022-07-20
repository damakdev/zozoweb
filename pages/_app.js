import Head from "next/head";
import Layout from "../components/layout";
import { store } from "../store";
import { Provider } from "react-redux";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Zozo</title>
      </Head>
      <Component {...pageProps} />
      {/* <Layout>
      </Layout> */}
    </Provider>
  );
}

export default MyApp;
