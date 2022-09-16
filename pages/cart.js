import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/slices/cartSlice";
import { getWonBidEvents } from "../services/customer";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/watchlist.module.scss";
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
	const { events, subTotal } = useSelector((state) => state.events.won);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(_getWonBidEvents(user?.customer.id));
	}, [dispatch]);

	return (
		<CustomerLayout>
			<h1 className="text-5xl pt-10 pl-5">Your Bids</h1>
			<div className={` flex  flex-col md:flex-row gap-20 mt-16 `}>
				<div className={`${styles.wrapper} bg-white  lg:px-10 pt-10 w-full `}>
					<div className={`${styles.nav} flex justify-between px-4 lg:w-6/12`}>
						<div
							className={`${
								currentItem == 1
									? " lg:ml-7 sm:ml-4   lg:px-5 pb-4  border-b-2 border-violet-700 "
									: " "
							}`}
							onClick={() => setCurrentItem(1)}
						>
							<a href="#">Won Bids</a>
						</div>
						<div
							className={`${
								currentItem == 2
									? "    lg:px-5 pb-4  border-b-2 border-violet-700 "
									: " "
							}`}
							onClick={() => setCurrentItem(2)}
						>
							<a href="#"> My Ongoing bid</a>{" "}
						</div>
						<div
							className={`${
								currentItem == 3
									? "    lg:px-5 pb-4  border-b-2 border-violet-700 "
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
					<div className="bg-white lg:w-1/4  md:w-full p-10  ">
						<h3>Bid Summary</h3>

						<div className="flex justify-between mb-5 mt-16">
							<div>SUBTOTAL</div>
							{subTotal > 0 ? <div>N{subTotal?.toLocaleString()}</div> : "---"}
						</div>

						<div className="flex justify-between">
							<div>SHIPPING EST</div>
							<div>{subTotal > 0 ? "N2,000" : "---"}</div>
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
							{subTotal > 0 ? (
								<div>
									N <span>{(subTotal + 2000).toLocaleString()}</span>
								</div>
							) : (
								"---"
							)}
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
		</CustomerLayout>
	);
};

export default Cart;
