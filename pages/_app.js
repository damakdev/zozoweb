import axios from "axios";
import Head from "next/head";
import Layout from "../components/layout";
import { MerchantAuthGuard } from "../components/authGuards";
import { CustomerAuthGuard } from "../components/authGuards";
import { AdminAuthGuard } from "../components/authGuards";
import { useState, useEffect } from "react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }) {
  const [errorMessage, setErrorMessage] = useState(null);

  axios.interceptors.request.use(
    function (config) {
      // console.log(config);
      return config;
    },
    function (error) {
      // console.log(error);
      setErrorMessage("Something went wrong with this request");
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      // console.log("response interceptor", response);
      return response;
    },
    function (error) {
      console.log("error interceptor", error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred.");
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (localStorage.getItem("persist:zozo")) {
      const { customer  } = JSON.parse(localStorage.getItem("persist:zozo"));
      const { token } = JSON.parse(customer);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}
      `;
      console.log(token);
    }
    axios.defaults.baseURL = "https://bilikie.com/api/v1";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Zozo</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
        transition={Zoom}
      />
      <PersistGate loading={null} persistor={persistor}>
        <Layout key={router.route}>
          {Component.requireMerchantAuth ? (
            <MerchantAuthGuard>
              <Component {...pageProps} />
            </MerchantAuthGuard>
          ) : Component.requireCustomerAuth ? (
            <CustomerAuthGuard>
              <Component {...pageProps} />
            </CustomerAuthGuard>
          ) : Component.requireAdminAuth ? (
            <AdminAuthGuard>
              <Component {...pageProps} />
            </AdminAuthGuard>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
