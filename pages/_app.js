import axios from "axios";
import Head from "next/head";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, Slide, toast } from "react-toastify";
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
			setErrorMessage(error.response.data.message);
			// setErrorMessage("error");
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
			const { customer } = JSON.parse(localStorage.getItem("persist:zozo"));
			const { token } = JSON.parse(customer);
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}
      `;
		}
		axios.defaults.baseURL = "https://bilikie.com/api/v1";
		axios.defaults.headers.post["Content-Type"] = "application/json";
	}, []);

	return (
		<Provider store={store}>
			<Head>
				<title>Zozo</title>
			</Head>
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={true}
				pauseOnFocusLoss={false}
				transition={Slide}
			/>
			<PersistGate loading={null} persistor={persistor}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
