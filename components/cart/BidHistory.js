import styles from "../../styles/cart.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import shoes from "../../assets/shoes.svg";
import star from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { _getWonBidEvents } from "../../store/slices/eventsSlice";
import { useEffect } from "react";

const BidHistory = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { biddingEvents } = useSelector((state) => state.events);
	console.log(biddingEvents);

	console.log(user);
	useEffect(() => {
		dispatch(_getWonBidEvents(user.customer.id));
	}, [dispatch]);
	return (
		<div className={`${styles.bid_history} pb-60`}>
			{/* <div className="flex justify-between px-12 mb-12 ">
				<div>
					<ul className="flex gap-20 ">
						<li className={`${styles.grey}`}>Unsettled</li>
						<li className={`${styles.purple}`}>Settled</li>
						<li className={`${styles.grey}`}>All</li>
					</ul>
				</div>
				<div className={`${styles.dates}`}>
					<select name="" id="">
						<option value="">All dates</option>
					</select>
				</div>
			</div> */}

			{/* <hr className="" /> */}

			{biddingEvents.length > 0 && (
				<div>
					<div className="flex gap-6 justify-end  p-10">
						<p>Show only my winning bids</p>
						<span>
							<Image src={greenswitch} />
						</span>
					</div>
					<div className="flex gap-40 px-20 ">
						<div>12 June</div>
						<div className={`${styles.rectangle} flex justify-between`}>
							<div className="text-white">Won</div>
							<div>
								<Image src={star} />
							</div>
						</div>
					</div>
					<div>
						<table className="w-2/3 ml-96 mt-10">
							<tr>
								<td>Items</td>
								<td>Bid price</td>
								<td>Final price</td>
								<td>Timer</td>
								<td>Remove</td>
							</tr>

							<tr>
								<td>
									<Image src={shoes} />
								</td>
								<td>
									# <span>5,000</span>
								</td>
								<td>
									# <span>7,000</span>
								</td>
								<td>00:00:00:00</td>
								<td>x</td>
							</tr>
						</table>
					</div>
				</div>
			)}

			{biddingEvents.length == 0 && (
				<p className="justify-center text-center mt-20 text-3xl">
					You currently have no ongoing Bids
				</p>
			)}
		</div>
	);
};

export default BidHistory;
