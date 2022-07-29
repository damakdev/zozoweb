import React from "react";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";

function WonBid() {
	const thead = [
		"Date Initiated",
		"Merchant ID",
		"Merchant name",
		"Amount",
		"Description",
	];
	const data = [
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			description: "Withdraw",
			date: "07-08-2019",
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			description: "Withdraw",
			date: "07-08-2019",
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			description: "Withdraw",
			date: "07-08-2019",
		},
	];
	return (
		<>
			<div className="grid grid-cols-3 gap-10 mb-10">
				<div className="bg-white rounded-md shadow-xl">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#743B96" }}
								className="bg-violet-700 border-none p-5 rounded-full shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-md shadow-xl">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#00C247" }}
								className="bg-violet-700 border-none p-5 rounded-full shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-md shadow-xl">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#EB5757" }}
								className="bg-violet-700 border-none p-5 rounded-full  shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-md shadow-xl">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#E1B20B" }}
								className="bg-violet-700 border-none p-5 rounded-full  shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-md shadow-xl">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#939393" }}
								className="bg-violet-700 border-none p-5 rounded-full  shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-md shadow-xl ">
					<div className="w-11/12 mx-auto pt-10">
						<h3 className="text-3xl text-black">Total Revenue by merchant</h3>
						<div className="flex justify-between mt-10 pb-8 items-center">
							<h4 className="text-3xl font-semibold text-black">
								{" "}
								15,224,562{" "}
							</h4>

							<div
								style={{ backgroundColor: "#743B96" }}
								className="bg-violet-700 border-none p-5 rounded-full  shadow-xl"
							>
								<HouseIcon />
							</div>
						</div>

						<div className="pb-2 flex">
							<p className="text-red-600 mr-10">+48</p>
							<p>Last month</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h3 className="py-20 text-4xl font-semibold pl-20 mt-1 text-semibold text-black">
					Merchant Transaction Table
				</h3>

				<Table name="merchantTrans" thead={thead} data={data} isSearch={true} isFilter={true} />
			</div>
		</>
	);
}

export default WonBid;
