import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "./../styles/cart.module.scss";
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

const Checkout = () => {
	const { user } = useSelector((state) => state.auth.customer);

	const { events, subTotal } = useSelector((state) => state.events.won);
	console.log(user);
	console.log(subTotal);
	const config = {
		reference: new Date().getTime().toString(),
		email: user.email,
		amount: subTotal,
		// amount: subTotal * 100,
		publicKey: "pk_test_69632545288d812cae292185bebcfb87ca0feded",
	};
	const initializePayment = usePaystackPayment(config);
	const onSuccess = (reference) => {
		axios.post(`/customer/bidding/checkout`, {
			winner_id: user.id.toString(),
			payment_reference: reference.reference,
		}).then((response)=>{
			console.log(response)
		})
		// dispatch(
		// 	_wonBidPayment({
		// 		winner_id: user.customer.id,
		// 		payment_reference: reference.reference,
		// 	})
		// );
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
						{/* <div className="mb-10">
							<span className="mr-12">Card Number</span>
							<span className={`${styles.email_icon}`}>
								<Image src={card} />
							</span>
							<input
								className={`${styles.email}`}
								type="text"
								// placeholder="card number"
							/>
							<input
								className={`${styles.dm}`}
								type="email"
								datatype="DD MM"
								placeholder="MM/YY"
							/>
							<input
								className={`${styles.cvc}`}
								type="text"
								placeholder="cvc"
							/>
						</div> */}
						{/* <div className="mb-10">
							<span className="mr-4">Cardholder Name</span>
							<span className={`${styles.email_icon}`}>
								<Image src={profile} />
							</span>
							<input
								className={`${styles.email}`}
								type="email"
								// placeholder="Emmanuel Okorie"
							/>
						</div> */}
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
		</CustomerLayout>
	);
};

export default Checkout;
