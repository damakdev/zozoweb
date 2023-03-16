import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getOngoingEvents } from "../../store/slices/eventsSlice";
import { truncateString } from "../../utils";
import { motion } from "framer-motion";
import styles from "../../styles/watchlist.module.scss";
import useWindowDimension from "../../hooks/useWindowDimension";
import Button from "../ui/Button";
import { useCountdown } from "../../hooks/useCountdown";

const OngoingBid = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { events } = useSelector((state) => state.events.ongoing);
	const { width } = useWindowDimension();
	// const [days, hours, minutes, seconds] = useCountdown(
	//   item.start_time,
	//   item.end_time
	// );
	let div = ["Item", "Access amount", "Minimum bid"];
	useEffect(() => {
		dispatch(_getOngoingEvents());
	}, [dispatch]);

	return (
		<div className={`${styles.ob_container} `}>
			{events && events.length > 0 && width >= 760 && (
				<div className="my-20">
					<div className="w-10/12 mx-auto mb-20  ">
						<div className={`flex justify-between`}>
							<th className="w-2/12">Items</th>
							<th className="">Access amount</th>
							<th className="">Minimum Bid</th>
							{/* <th className="">Timer</th> */}
						</div>
						<div>
							{events.map((item, index) => {
								return (
									<div
										key={index}
										className="text-2xl flex items-center justify-between mt-10"
									>
										<td className="flex items-center">
											<img
												src={item.product.images.main}
												style={{ height: "50px", width: "70px" }}
											/>
											<td className="ml-5">
												{truncateString(item.product.name, 20)}
											</td>
										</td>
										<td>
											&#x20A6; {Number(item.access_amount).toLocaleString()}
										</td>
										<td>
											&#x20A6;
											{Number(item.minimum_amount).toLocaleString()}
										</td>
										{/* <td> {item.end_time}</td> */}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
			{width < 780 &&
				events &&
				events.map((item, index) => {
					return (
						<div
							className={` grid grid-cols-2  text-2xl my-8 py-5  px-5  ${styles.mobile_div}`}
							key={index}
						>
							<div
								className="py-9 pl-8  shadow-lg font-bold"
								style={{ background: "#F3F3F3" }}
							>
								<ul>
									{div.map((item, index) =>
										item !== "No" ? (
											<td key={index} className="block py-4">
												{item}
											</td>
										) : (
											""
										)
									)}
								</ul>
							</div>
							<div className="py-9  pl-5 bg-white  shadow-lg ">
								<ul className="px-2">
									<td className="block py-4">
										{truncateString(item.product.name, 20)}
									</td>
									<td className="block py-4">
										{" "}
										&#x20A6; {Number(item.access_amount).toLocaleString()}
									</td>
									<td className="block py-4">
										{" "}
										&#x20A6; {Number(item.minimum_amount).toLocaleString()}
									</td>
									{/* <td>{Number(item.last_amount).toLocaleString()}</td> */}
									{/* {!item.ended && (
              <td>
                {formatNumber(days)}:{formatNumber(hours)}:
                {formatNumber(minutes)}:{formatNumber(seconds)}
              </td>
            )}
            {item.ended && (
              <td style={{ color: "#cd3737" }}>Ended: 00:00:00:00</td>
            )} */}
									{/* <td>
											<Button name="Forfeit" paddingY="12px" paddingX="20px" />
										</td> */}
								</ul>
							</div>
						</div>
					);
				})}
			{events && events.length < 1 && (
				<div className={`justify-center ${styles.mobile_div}`}>You currently have no ongoing Bids</div>
			)}
		</div>
	);
};

export default OngoingBid;
