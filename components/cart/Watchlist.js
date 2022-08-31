import Link from "next/link";

import styles from "../../styles/cart.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import headphones from "../../assets/headphones.svg";
import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from "react-countdown-circle-timer";
import { useState } from "react";
import { formatNumber, truncateString } from "../../utils";
import { removeCartItem, clearCart } from "../../store/slices/cartSlice";

const Watchlist = ({ details }) => {
	// const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	console.log(details);
	return (
		<Link
			href={user ? `/product/${details.id}` : "javascript:void(0)"}
			className=""
		>
			<div className="bg-white cursor-pointer ">
				<div className="py-8 w-10/12 mx-auto flex justify-between">
					<img src={details.image} alt={details.name} width="120" />
					<div>
						<h4> Name: {details.name}</h4>
						<h4>Minimum bid : #{formatNumber(details.minimum_amount)}</h4>
						<h4>Access amount: #{formatNumber(details.access_amount)}</h4>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Watchlist;
