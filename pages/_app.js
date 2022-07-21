import axios from "axios";
import Head from "next/head";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [errorMessage, setErrorMessage] = useState(null);

  axios.interceptors.request.use(
    function (config) {
      // console.log(config);
      return config;
    },
    function (error) {
      setErrorMessage("error");
      // console.log(error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      // console.log(response);
      return response;
    },
    function (error) {
      setErrorMessage(error.message);
      // console.log(error);
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      setErrorMessage(null);
    }
    // const { token } = JSON.parse(localStorage.getItem("zozo"));

    axios.defaults.baseURL = "https://smart-park.xyz/api/v1";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }, [errorMessage]);

  return (
    <Provider store={store}>
      <Head>
        <title>Zozo</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
      {/* <Layout>
      </Layout> */}
    </Provider>
  );
}

export default MyApp;
