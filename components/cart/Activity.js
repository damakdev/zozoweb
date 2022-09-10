import Link from "next/link";

import styles from "../../styles/watchlist.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import headphones from "../../assets/headphones.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatNumber, truncateString } from "../../utils";
import { removeCartItem, clearCart } from "../../store/slices/cartSlice";
import Button from "../ui/Button";
import { _getWonBidEvents } from "../../store/slices/eventsSlice";
import useWindowDimension from "../../hooks/useWindowDimension";

const Activity = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	let thead = ["Item", "Access amount", "Minimum bid", "Final price"];
	const { user } = useSelector((state) => state.auth.customer);
	const { events, loading } = useSelector((state) => state.events.won);
	const { width } = useWindowDimension();
	useEffect(() => {
		dispatch(_getWonBidEvents(user?.customer.id));
	}, [dispatch]);

	let unpaid_bids;

	if (events) unpaid_bids = events.filter((item) => item.payment_made  == false);

	const content = (
		<>
			<div className="flex justify-between py-20">
				<div>
					<p className="text-3xl text-semibold">Won Bids</p>
				</div>
				<div className="flex gap-6 cursor-pointer">
					<div
						className="text-3xl text-semibold"
						// onClick={() => dispatch(clearCart())}
					>
						Forfeit Bid
					</div>
				</div>
			</div>

			<div>
				{width >= 790 && events && (
					<div className={`${styles.won_bid}`}>
						<div className={`flex justify-between mb-10`}>
							<h3 className={`${styles.item_row}`}>Items</h3>
							<h3 className="">Access amount</h3>
							<h3 className="">Minimum amount</h3>
							<h3 className="">Final Price</h3>
							{/* <h3 className="">Started</h3>
              <h3 className="">Ended</h3> */}
						</div>

						<div>
							{unpaid_bids?.map((item, index) => {
								return (
									<div
										key={index}
										className=" flex items-center justify-between text-2xl mb-20"
									>
										<p className={`flex items-center ${styles.item_row}`}>
											<img src={item.product.images.main} />
											<span className="ml-4">
												{truncateString(item.product.name, 15)}
											</span>
										</p>
										<p>
											&#x20A6;{" "}
											<span>{Number(item.access_amount).toLocaleString()}</span>
										</p>
										<p>
											&#x20A6;
											<span>
												{Number(item.minimum_amount).toLocaleString()}
											</span>
										</p>
										<p>
											&#x20A6;{" "}
											<span>{Number(item.last_amount).toLocaleString()}</span>
										</p>
										{/* <p> {new Date(item.start_time).toDateString()}</p>
                  <p> {new Date(item.end_time).toDateString()}</p> */}
									</div>
								);
							})}
						</div>
					</div>
				)}

				{width < 780 &&
					unpaid_bids &&
					unpaid_bids.map((item, index) => {
						return (
							<div
								className={` grid grid-cols-2  text-2xl my-8 py-5   ${styles.mobile_table}`}
								key={index}
							>
								<div
									className="py-9 pl-8  shadow-lg font-bold"
									style={{ background: "#F3F3F3" }}
								>
									<ul>
										{thead.map((item, index) =>
											item !== "No" ? <li key={index}>{item}</li> : ""
										)}
									</ul>
								</div>
								<div className="py-9  pl-5 bg-white  shadow-lg ">
									<ul>
										<li>{truncateString(item.product.name, 20)}</li>
										<li>{Number(item.access_amount).toLocaleString()}</li>
										<li>{Number(item.minimum_amount).toLocaleString()}</li>
										<li>{Number(item.last_amount).toLocaleString()}</li>

										<li>
											<Button name="Forfeit" paddingY="12px" paddingX="20px" />
										</li>
									</ul>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
	return (
		<div className="activity_form w-11/12 mx-auto mt-20">
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					{unpaid_bids?.length > 0 ? (
						content
					) : (
						<div className="mt-40">
							{" "}
							<h3 className="text-center mt-20"> No Won Bids</h3>{" "}
							<Link href="/">
								<Button
									name="Continue Shopping"
									paddingY="15px"
									width="90%"
									className="mt-20 ml-10"
								/>
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Activity;
