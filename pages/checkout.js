import React, { useState } from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "./../styles/watchlist.module.scss";
import Image from "next/image";
import email from "../assets/email.svg";
import card from "../assets/card.svg";
import item from "../assets/item.svg";
import padlock from "../assets/padlock.svg";
import profile from "../assets/profile.svg";
import flag from "../assets/flag.svg";
import Button from "../components/ui/Button";
import { useSelector } from "react-redux";
import Link from "next/link";
import { usePaystackPayment } from "react-paystack";
import { _wonBidPayment } from "../store/slices/eventsSlice";
import axios from "axios";
import Modal from "../components/modal/modal";
import { CheckoutIcon } from "../public/svg/icons";
import { formatNumber } from "../utils";
import { useRouter } from "next/router";

const Checkout = () => {
	const { user } = useSelector((state) => state.auth.customer);
	const [modalDisplay, setModalDisplay] = useState(false);
	const router = useRouter();
	const modalFunc = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	const redirectHome = () => {
		router.push("/");
	};
	const { events, subTotal, winners_id } = useSelector(
		(state) => state.events.won
	);
	console.log(user);
	console.log(subTotal);
	const config = {
		reference: new Date().getTime().toString(),
		email: user.email,
		amount: (subTotal + 2000) * 100,
		publicKey: "pk_test_69632545288d812cae292185bebcfb87ca0feded",
	};
	const initializePayment = usePaystackPayment(config);
	const onSuccess = (reference) => {
		axios
			.post(`/customer/bidding/checkout`, {
				winner_ids: winners_id,
				payment_reference: reference.reference,
			})
			.then((response) => {
				console.log(response);
			});

		modalFunc();
	};

	const onClose = (reference) => {
		console.log(reference);
		// dispatch(_wonBidPayment(body));
	};

	const makePayment = () => {
		initializePayment(onSuccess);
	};

	return (
		<CustomerLayout>
			<div className="checkout-wrapper bg-white p-20">
				<div className="flex justify-between">
					<div className="">
						<h1 className="mb-5">Delivery Details</h1>
						<p className="mb-20">
							Enter your personal details to complete your profile
						</p>
						<div className="mb-10 ">
							<span className="mr-10">Email address</span>
							<span className={`${styles.email_icon}`}>
								<Image src={email} />
							</span>
							<input
								className={`${styles.email}`}
								type="email"
								placeholder="email address"
								defaultValue={user.email}
							/>
						</div>
						<div className="mb-10">
							<span className="mr-20">Country</span>
							<span className={`${styles.email_icon}`}>
								<Image src={flag} />
							</span>
							<input
								className={`${styles.email}`}
								style={{ marginLeft: "2px" }}
								type="text"
								placeholder="Nigeria"
								defaultValue={`${user.address.country}`}
							/>
						</div>

						<div className="mb-10">
							<span className="">State</span>

							<input
								className={`${styles.email}`}
								type="text"
								style={{ marginLeft: "100px" }}
								placeholder="Nigeria"
								defaultValue={` ${user.address.state}`}
							/>
						</div>

						<div className="mb-10">
							<span className="">City</span>

							<input
								className={`${styles.email}`}
								style={{ marginLeft: "110px" }}
								type="text"
								placeholder="Nigeria"
								defaultValue={` ${user.address.city}`}
							/>
						</div>

						<div className="mb-20">
							<span className="mr-10">Street</span>

							<input
								className={`${styles.email}`}
								style={{ marginLeft: "70px" }}
								type="text"
								placeholder="Nigeria"
								defaultValue={` ${user.address.street}`}
							/>
						</div>

						<div className="w-2/3">
							<div className="flex justify-between mb-5 mt-16">
								<div>SUBTOTAL</div>
								<div>N{subTotal.toLocaleString()}</div>
							</div>

							<div className="flex justify-between">
								<div>SHIPPING EST</div>
								<div>N2,000</div>
							</div>
							<div className={`${styles.text_lg} flex justify-between mt-10`}>
								<div>TOTAL PRICE</div>
								<div>
									N <span>{(subTotal + 2000).toLocaleString()}</span>
								</div>
							</div>
							<hr />

							<div className="mt-6">
								<Link href="/checkout">
									<a>
										<Button
											name="PAY TO CONTINUE"
											paddingY="7px"
											paddingX="30px"
											fontSize="14px"
											width="400px"
											onClick={makePayment}
										/>
									</a>
								</Link>
							</div>
							<div className="text-center mt-4">
								<Image src={padlock} />
								Payments are secure and encrypted
							</div>
						</div>
					</div>
					<div>
						<Image src={item} />
						<p className={`${styles.text_lg} text-center`}>Won item</p>
					</div>
				</div>
			</div>

			<Modal display={modalDisplay} close={redirectHome} width={50}>
				<div className="w-10/12 mx-auto">
					<CheckoutIcon className="flex justify-self-center w-full" />

					<h3 className="text-green-600 text-center lg:my-20 my-10 text-3xl leading-relaxed">
						Hurray! Your Payment was successful
					</h3>

					<h3 className="text-green-600 text-center  my-10 t text-3xl leading-loose">
						Payment Amount <br />
						&#x20A6; {formatNumber(subTotal)}
					</h3>
					<Link href="/">
						<div className="flex justify-center">
							<Button
								name="Return Home"
								bgColor="#27AE60"
								paddingX="20px"
								paddingY="5px"
								border="none"
								className="mt-6 "
							/>
						</div>
					</Link>
				</div>
			</Modal>
		</CustomerLayout>
	);
};

export default Checkout;
