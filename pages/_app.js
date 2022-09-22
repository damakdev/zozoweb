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
let adminToken, merchanToken, customerToken
  axios.interceptors.request.use(
    function (config) {
      let url = config.url.split("/")
   if(adminToken || merchanToken || customerToken){
    if(url[1] == "admin") config.headers.Authorization= `Bearer ${adminToken}`
    if(url[1] == "merchant") config.headers.Authorization= `Bearer ${merchanToken}`
    if(url[1] == "customer") config.headers.Authorization= `Bearer ${customerToken}`
   }
      return config;
         // console.log(config);
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
      const { admin, customer, merchant  } = JSON.parse(localStorage.getItem("persist:zozo"));
     adminToken = JSON.parse(admin).token;
    customerToken = JSON.parse(customer).token;
     merchanToken = JSON.parse(merchant).token;
  
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
