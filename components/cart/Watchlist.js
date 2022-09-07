import Link from "next/link";

import styles from "../../styles/watchlist.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import headphones from "../../assets/headphones.svg";
import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from '../../hooks/useCountdown';
import { useState } from "react";
import { formatNumber, truncateString } from "../../utils";
import { removeCartItem, clearCart } from "../../store/slices/cartSlice";

const Watchlist = ({ details }) => {
	// const { cart } = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const [days, hours, minutes, seconds] = useCountdown(
		details.start,
		details.end
	);
	return (
		<Link
			href={user ? `/product/${details.id}` : "javascript:void(0)"}
			className=""
		>
			<div className={styles.watch_item}>
				<div className={styles.cancel}>x</div>
				<div className="py-8 w-10/12 mx-auto flex justify-between mt-7">
					<img src={details.image} alt={details.name} width="120" />
					<div>
						<h4>
							<span>Name:</span> {details.name}
						</h4>
						<h4>
							{" "}
							<span>Minimum bid :</span> #{formatNumber(details.minimum_amount)}
						</h4>
						<h4>
							<span>Access amount:</span> #{formatNumber(details.access_amount)}
						</h4>
					{!details.ended && (
						<p>
							Ends in: {formatNumber(days)}:{formatNumber(hours)}:
							{formatNumber(minutes)}:{formatNumber(seconds)}
						</p>
					)}
					{details.ended && (
						<p style={{ color: "#cd3737" }}>Ended: 00:00:00:00</p>
					)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Watchlist;
