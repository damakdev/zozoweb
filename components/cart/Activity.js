import Link from "next/link";

import styles from "../../styles/cart.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import headphones from "../../assets/headphones.svg";
import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from "react-countdown-circle-timer";
import { useState } from "react";
import { formatNumber } from "../../utils";
import { removeCartItem, clearCart } from "../../store/slices/cartSlice";

const Activity = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className="activity_form w-11/12 mx-auto">
			<div className="flex justify-between py-20">
				<div>
					<p className="text-3xl text-semibold">Items in my cart</p>
				</div>
				<div className="flex gap-6 cursor-pointer">
					<div
						className="text-3xl text-semibold"
						onClick={() => dispatch(clearCart())}
					>
						Clear cart
					</div>

					{/* <div>
						<Image src={greenswitch} />
					</div> */}
				</div>
			</div>

			<div>
				<table className="w-full border-separate border-spacing-x-0 border-spacing-y-20">
					<tr>
						<td className="text-3xl">Items</td>
						<td className="text-3xl">Bid price</td>
						<td className="text-3xl">Timer</td>
						<td className="text-3xl">Remove</td>
					</tr>

					{cart.length > 0 &&
						cart.map((item, index) => {
							return (
								<tr key={index} className="text-2xl">
									<td className="flex items-center">
										<img src={item.image} width="100px" height="100px" />
										<span className="ml-5">{item.name}</span>
									</td>
									<td>
										# <span>{Number(item.price).toLocaleString()}</span>
									</td>

									<td> {item.timer}</td>
									<td onClick={() => dispatch(removeCartItem(item))}>
										<svg
											width="11"
											height="10"
											viewBox="0 0 11 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.71881 4.98928L10.5051 1.35242L9.46596 0.270631L5.67971 3.90749L2.04285 0.121237L0.961058 1.16034L4.59792 4.9466L0.811665 8.58346L1.85077 9.66525L5.63702 6.02838L9.27389 9.81464L10.3557 8.77554L6.71881 4.98928Z"
												fill="black"
											/>
										</svg>
									</td>
								</tr>
							);
						})}
				</table>
			</div>
		</div>
	);
};

export default Activity;
