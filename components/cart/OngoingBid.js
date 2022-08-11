import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getBiddingEventByStatus } from "../../store/slices/eventsSlice";
import styles from "../../styles/cart.module.scss";

const OngoingBid = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { biddingEvents } = useSelector((state) => state.events);
	console.log(biddingEvents);

	useEffect(() => {
		dispatch(_getBiddingEventByStatus({ status: "ongoing" }));
	}, [dispatch]);

	return (
		<div className={`${styles.ob_container} `}>
			{biddingEvents.length > 0 && (
				<div>
					<table className="w-full border-separate border-spacing-x-0 border-spacing-y-20">
						<tr>
							<td className="text-3xl">Items</td>
							<td className="text-3xl">Bid price</td>
							<td className="text-3xl">Timer</td>
							<td className="text-3xl">Remove</td>
						</tr>

						{biddingEvents.length > 0 &&
							biddingEvents.map((item, index) => {
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
										<td>
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
			)}
			{biddingEvents.length == 0 && (
				<p className="justify-center">You currently have no ongoing Bids</p>
			)}
		</div>
	);
};

export default OngoingBid;
