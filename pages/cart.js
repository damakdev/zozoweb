import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/slices/cartSlice";
import { getWonBidEvents } from "../services/customer";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import box1 from "./../assets/emptybox.png";
import box2 from "./../assets/cartoon.png";
import arrow from "./../assets/arrow.svg";
import Activity from "../components/cart/Activity";
import OngoingBid from "../components/cart/OngoingBid";
import BidHistory from "../components/cart/BidHistory";
import { _getWonBidEvents } from "../store/slices/eventsSlice";

const Cart = () => {
	const [currentItem, setCurrentItem] = useState(1);

	const { user } = useSelector((state) => state.auth.customer);
	// const { subTotal, cart } = useSelector((state) => state.cart);
	const { events } = useSelector((state) => state.events.wonBids);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(_getWonBidEvents(user.customer.id));
	}, [dispatch]);


	let subTotal = events.reduce((prev, cur)=>{
			return prev + cur.winner.amount
	}, 0)


	return (
		<CustomerLayout>
			<h1>Your BIDS</h1>
			<div className="wrapper flex gap-20 mt-16">
					<div className="bg-white px-10 pt-10 w-full">
						<div className={`${styles.nav} flex gap-60 `}>
							<div
								className={`${
									currentItem == 1
										? " ml-7 px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(1)}
							>
								{" "}
								<a href="#">Won Bids</a>{" "}
							</div>
							<div
								className={`${
									currentItem == 2
										? "  px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(2)}
							>
								
								<a href="#"> My Ongoing bid</a>{" "}
							</div>
							<div
								className={`${
									currentItem == 3
										? "  px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(3)}
							>
								{" "}
								<a href="#">Bid History</a>{" "}
							</div>
						</div>
						<hr className="mb-10" />

						{currentItem === 1 ? (
							<Activity />
						) : currentItem === 2 ? (
							<OngoingBid />
						) : (
							<BidHistory />
						)}
					</div>

					{currentItem === 1 && (
						<div className="bg-white w-1/4 p-10  ">
							<h3>Bid Summary</h3>

							<div className="flex justify-between mb-5 mt-16">
								<div>SUBTOTAL</div>
								<div>N{subTotal.toLocaleString()}</div>
							</div>

							<div className="flex justify-between">
								<div>SHIPPING EST</div>
								<div>N2,000</div>
							</div>
							<div className="flex justify-between mt-40">
								{/* <div>Enter code</div>
								<div>
									<Image src={arrow} />
								</div> */}
							</div>
							<hr />
							<div className="flex justify-between mt-10">
								<div>TOTAL PRICE</div>
								<div>
									N <span>{(subTotal + 2000).toLocaleString()}</span>
								</div>
							</div>
							<div className="mt-6">
								<Link href="/checkout">
									<a>
										<Button
											name="PROCEED TO CHECKOUT"
											paddingY="7px"
											paddingX="30px"
											fontSize="14px"
											width="270px"
										/>
									</a>
								</Link>
							</div>
						</div>
					)}
				</div>
			{/* {cart.length > 0 && user ? (
				<div className="wrapper flex gap-20 mt-16">
					<div className="bg-white px-10 pt-10 w-full">
						<div className={`${styles.nav} flex gap-60 `}>
							<div
								className={`${
									currentItem == 1
										? " ml-7 px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(1)}
							>
								{" "}
								<a href="#">Activity</a>{" "}
							</div>
							<div
								className={`${
									currentItem == 2
										? "  px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(2)}
							>
								{" "}
								<a href="#"> My Ongoing bid</a>{" "}
							</div>
							<div
								className={`${
									currentItem == 3
										? "  px-5 pb-5 border-b-2 border-violet-700 "
										: " "
								}`}
								onClick={() => setCurrentItem(3)}
							>
								{" "}
								<a href="#">Bid History</a>{" "}
							</div>
						</div>
						<hr className="mb-10" />

						{currentItem === 1 ? (
							<Activity />
						) : currentItem === 2 ? (
							<OngoingBid />
						) : (
							<BidHistory />
						)}
					</div>

					{currentItem === 1 && (
						<div className="bg-white w-1/4 p-10  ">
							<h3>Bid Summary</h3>

							<div className="flex justify-between mb-5 mt-16">
								<div>SUBTOTAL</div>
								<div>N{subTotal.toLocaleString()}</div>
							</div>

							<div className="flex justify-between">
								<div>SHIPPING EST</div>
								<div>N2,000</div>
							</div>
							<div className="flex justify-between mt-40">
								<div>Enter code</div>
								<div>
									<Image src={arrow} />
								</div>
							</div>
							<hr />
							<div className="flex justify-between mt-10">
								<div>TOTAL PRICE</div>
								<div>
									N <span>{(subTotal + 2000).toLocaleString()}</span>
								</div>
							</div>
							<div className="mt-6">
								<Link href="/checkout">
									<a>
										<Button
											name="PROCEED TO CHECKOUT"
											paddingY="7px"
											paddingX="30px"
											fontSize="14px"
											width="270px"
										/>
									</a>
								</Link>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="cart-wrapper flex justify-between gap-10 mt-20">
					<div className={` ${styles.cart} bg-white w-2/3`}>
						<div className="flex gap-16 mt-20">
							<div>
								<Image src={box2} alt="cart" width={200} height={200} />
							</div>
							<div>
								<h1 className="text-black">Your Zozo cart is empty</h1>
								<p className={`${styles.purple_text} mt-3`}>
									Bid on today's deals
								</p>
								{!user && (
									<div className="flex gap-10 mt-12">
										<div className="">
											<Link href="/login">
												<a>
													<Button
														name="SIGN IN TO YOUR ACCOUNT"
														paddingY="7px"
														paddingX="30px"
														fontSize="14px"
														width="270px"
													/>
												</a>
											</Link>
										</div>
										<div>
											<Link href="/signup">
												<a>
													<Button
														name="SIGN UP NOW"
														paddingY="7px"
														paddingX="30px"
														fontSize="14px"
														bgColor="white"
														color="black"
													/>
												</a>
											</Link>
										</div>
									</div>
								)}

								{user && (
									<Link href="/">
										<Button
											name="Continue Shopping"
											paddingX="30px"
											paddingY="15px"
											width="90%"
											className="mt-20 w-11/12"
										/>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className={`${styles.white_strip}`}></div>
					<div className="bg-white w-1/3 p-10">
						<h1 className="text-black">Bid Summary</h1>
						<div className="p-20">
							<Image src={box1} width={200} height={200} />
						</div>
						<p className={`${styles.bid_text}`}>
							Don't miss out on great deals! Start shopping or log in to view
							products added.
						</p>
					</div>
				</div>
			)} */}
		</CustomerLayout>
	);
};

export default Cart;
