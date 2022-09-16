import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Loader from "../../components/loader";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { Bag, Car, Chain } from "../../public/svg/icons";
import { useSelector, useDispatch } from "react-redux";
import {
	customerList,
	merchantList,
} from "../../store/slices/adminSlice/usersSlice";
import { convertUtc, truncateString } from "../../utils";
import { getAllEvents } from "../../store/slices/adminSlice/adminEventSlice";

function Dashboard() {
	const [modalDisplay, setModalDisplay] = useState(false);
	const merchants = useSelector((state) => state.users.merchants);
	const customers = useSelector((state) => state.users.customers);
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(merchantList());
		dispatch(customerList());
		dispatch(getAllEvents());
	}, [dispatch]);

	// console.log(allEvent);
	let fiveMerchant;
	let fiveCustomer;
	let topAuctions;
	if (merchants.users) fiveMerchant = merchants.users.slice(0, 5);
	if (customers.users) fiveCustomer = customers.users.slice(0, 5);
	if (allEvent) {
		let arraySort = [...allEvent];
		topAuctions = arraySort
			.sort((a, b) => Number(b.access_amount) - Number(a.access_amount))
			.slice(0, 5);
	}
	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	return (
		<AdminLayout>
			<div
				className="pt-10 w-11/12 mx-auto pb-20 mt-1"
				style={{ backgroundColor: "#E5E5E5" }}
			>
				<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
					Dashboard
				</h3>

				<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10  gap-4">
					<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
						<h3 className=" ml-6 mb-10">Customer list</h3>
						{customers && merchants.isLoading ? (
							<div className="py-10">
								<Loader />
							</div>
						) : (
							<>
								<div className="bg-gray-100 py-9">
									<div className="flex justify-around  mx-auto  font-semibold w-11/12">
										<h4 className="w-4/12">Name</h4>
										<h4>Date registered</h4>
										<h4>Status</h4>
									</div>
								</div>

								{fiveCustomer &&
									fiveCustomer.map((item, index) => {
										return (
											<div
												key={index}
												className="flex justify-around mt-5 even:bg-gray-100 py-6 items-center "
											>
												<div className="flex items-center w-4/12">
													<img
														className=" mr-8  hidden lg:block "
														src={item.account.avatar}
														style={{
															borderRadius: "50%",
															width: "50px",
															height: "45px",
														}}
													/>
													{item.account.last_name} {item.account.first_name}
												</div>

												<h4>{convertUtc(item.createdAt)}</h4>

												<h4
													className={`${
														item.account.verified
															? "text-green-600"
															: "text-red-600"
													}`}
												>
													{item.account.verified ? "Verified" : "Unverified"}
												</h4>
											</div>
										);
									})}

								<div className=" flex mt-10 justify-center">
									<Link href="/admin/customer-management">
										<Button name="View more" paddingX="12px" paddingY="7px" />
									</Link>
								</div>
							</>
						)}
					</div>

					<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
						<h3 className=" ml-6 mb-10">Merchant list</h3>
						{merchants && merchants.isLoading ? (
							<div className="py-10">
								<Loader />
							</div>
						) : (
							<>
								<div className="bg-gray-100 py-9">
									<div className="flex justify-around  mx-auto  font-semibold w-11/12">
										<h4 className="w-4/12">Name</h4>
										<h4>Number of events</h4>
										<h4>Status</h4>
									</div>
								</div>
								{fiveMerchant &&
									fiveMerchant.map((item, index) => {
										return (
											<div
												key={index}
												className="flex justify-around mt-5 even:bg-gray-100 py-6 items-center "
											>
												<div className="flex items-center w-5/12">
													<img
														className=" mr-8 hidden lg:block"
														src={item.account.avatar}
														style={{
															borderRadius: "50%",
															width: "50px",
															height: "45px",
														}}
													/>
													{item.account.last_name} {item.account.first_name}
												</div>

												<h4>{item.auctions.length}</h4>

												<h4
													className={`${
														item.account.verified
															? "text-green-600"
															: "text-red-600"
													}`}
												>
													{item.account.verified ? "Verified" : "Unverified"}
												</h4>
											</div>
										);
									})}

								<div className=" flex mt-10 justify-center">
									<Link href="/admin/merchant-management">
										<Button name="View more" paddingX="12px" paddingY="7px" />
									</Link>
								</div>
							</>
						)}
					</div>
				</div>

				{/* TOP AUCTIONS */}
				<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
					<h3 className=" ml-6 mb-10">Top Auctions by Bids</h3>

					{allEvent && allEvent.isLoading ? (
						<div className="py-10">
							<Loader />
						</div>
					) : (
						<>
							<div className="bg-gray-100 py-9">
								<div className="flex justify-around  mx-auto  font-semibold w-11/12">
									<h4 className="w-5/12">Name</h4>
									<h4>Access Amount</h4>
									<h4>Status</h4>
								</div>
							</div>

							{topAuctions &&
								topAuctions.map((item, index) => {
									return (
										<div
											key={index}
											className="flex justify-around items-center mt-5 even:bg-gray-100 py-6  text-2xl"
										>
											<div className="flex items-center items-center w-4/12">
												<img
													className=" mr-8 hidden lg:block"
													src={item.product.images.main}
													style={{
														width: "50px",
														height: "45px",
													}}
												/>
												{truncateString(item.product.name, 20)}
											</div>

											<h4 className="">{item.access_amount}</h4>
											<h4 className="">
												{item.ended && item.started
													? "Ended"
													: !item.ended && item.started
													? "Ongoing"
													: !item.started && !item.ended
													? "Upcoming"
													: ""}
											</h4>
										</div>
									);
								})}

							<div className=" flex mt-10  justify-center">
								<Link href="/admin/event-management">
									<Button name="View more" paddingX="12px" paddingY="7px" />
								</Link>
							</div>
						</>
					)}
				</div>

				{/* BARCHART */}
				<div className="bg-white p-10 mt-10  shadow-lg rounded-lg">
					<Bar
						data={{
							labels: [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							],
							datasets: [
								{
									label: "My First Dataset",
									data: [65, 59, 80, 81, 56, 55, 40, 43, 55, 59, 40, 0],
									backgroundColor: ["#743B96", "#737C82"],
								},
							],
						}}
						height={400}
						width={600}
						options={{
							maintainAspectRatio: false,
						}}
					/>
				</div>

				{/* PIE CHART */}

				{/* <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 ">
					<div className="bg-white p-10  shadow-lg rounded-lg">
						<Line
							data={{
								labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
								datasets: [
									{
										label: "My First Dataset",
										data: [65, 59, 80, 81, 56, 55, 40],
										fill: false,
										borderColor: "rgb(75, 192, 192)",
										tension: 0.1,
									},
								],
							}}
						/>
					</div>

					<div className="bg-white flex justify-center p-7">
						<Pie
							data={{
								labels: ["Red", "Blue", "Yellow"],
								datasets: [
									{
										label: "My First Dataset",
										data: [300, 50, 100],
										backgroundColor: [
											"rgb(255, 99, 132)",
											"rgb(54, 162, 235)",
											"rgb(255, 205, 86)",
										],
										hoverOffset: 4,
									},
								],
							}}
							height={20}
							width={1}
							options={{
								maintainAspectRatio: false,
							}}
						/>
					</div>
				</div> */}
			</div>
		</AdminLayout>
	);
}

export default Dashboard;
Dashboard.requireAdminAuth = true;