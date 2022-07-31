import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { Bag, Car, Chain } from "../../public/svg/icons";

function Dashboard() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const thead = ["#", "Pruduct", "Category", "Serial code", "Action"];
	const data = [
		{
			name: "Chinmay ",
			date: "24/05/22",
			time: "03:45pm",
			status: "Verified",
		},
		{
			name: "Chinmay Sa",
			date: "24/05/22",
			time: "03:45pm",
			status: "Verified",
		},
		{
			name: "Chinmay Sa",
			date: "24/05/22",
			time: "03:45pm",
			status: "Verified",
		},
		{
			name: "Chinmay Sa",
			date: "24/05/22",
			time: "03:45pm",
			status: "Verified",
		},
		{
			name: "Chinmay Sa",
			date: "24/05/22",
			time: "03:45pm",
			status: "Verified",
		},
	];
	const auction = [
		{
			icon: <Car className="mr-2" />,
			name: " Car",
			bids: "123",
			amount: "23,432",
		},

		{
			icon: <Car className="mr-2" />,
			name: " Car",
			bids: "123",
			amount: "23,432",
		},
		{
			icon: <Chain className="mr-2" />,
			name: " Jewelry",
			bids: "123",
			amount: "23,432",
		},
		{
			icon: <Bag className="mr-2" />,
			name: " Bag",
			bids: "123",
			amount: "23,432",
		},
	];
	return (
		<AdminLayout>
			<div
				className="pt-10 w-11/12 mx-auto pb-20 mt-1"
				style={{ backgroundColor: "#E5E5E5" }}
			>
				<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
					Dashboard
				</h3>

				<div className="grid grid-cols-2 mt-10  gap-4">
					<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
						<h3 className=" ml-6 mb-10">Customer list</h3>

						{data.map((item, index) => {
							return (
								<div
									key={index}
									className="flex justify-around mt-5 even:bg-gray-100 py-6 "
								>
									<div className="flex items-center w-4/12">
										<img className=" mr-8" src="/images/Photo.png" />
										{item.name}
									</div>

									<h4>{item.date}</h4>
									<h4>{item.time}</h4>
									<h4 className="text-green-600">{item.status}</h4>
								</div>
							);
						})}

						<div className=" flex mt-10 justify-center">
							<Button name="View more" paddingX="12px" paddingY="7px" />
						</div>
					</div>

					<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
						<h3 className=" ml-6 mb-10">Merchant list</h3>

						{data.map((item, index) => {
							return (
								<div
									key={index}
									className="flex justify-around mt-5 even:bg-gray-100 py-6 "
								>
									<div className="flex items-center w-4/12">
										<img className=" mr-8" src="/images/Photo.png" />
										{item.name}
									</div>

									<h4>{item.date}</h4>
									<h4>{item.time}</h4>
									<h4 className="text-green-600">{item.status}</h4>
								</div>
							);
						})}

						<div className=" flex mt-10 justify-center">
							<Button name="View more" paddingX="12px" paddingY="7px" />
						</div>
					</div>
				</div>

				{/* LINE CHART */}

				<div className="grid grid-cols-2 mt-6 gap-4 ">
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
				</div>

				{/* PIE CHART */}
				<div className="grid grid-cols-2 gap-4 mt-10">
					<div className="bg-white px-5 pt-10 pb-10 mb-20 rounded-lg shadow-lg">
						<h3 className=" ml-6 mb-10">Top Auctions by Bids</h3>

						{auction.map((item, index) => {
							return (
								<div
									key={index}
									className="flex justify-around mt-5 even:bg-gray-100 py-6 "
								>
									<div className="flex items-center w-4/12">
										{item.icon}
										{item.name}
									</div>

									<h4 className="w-4/12">{item.bids}</h4>
									<h4 className="w-1/12">{item.amount}</h4>
								</div>
							);
						})}

						<div className=" flex mt-10  justify-center">
							<Button name="View more" paddingX="12px" paddingY="7px" />
						</div>
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
			</div>
		</AdminLayout>
	);
}

export default Dashboard;
