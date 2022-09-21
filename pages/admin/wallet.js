import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
	TotalProfit,
	TotalRevenue,
	TotalSpent,
	WalletGreenIcon,
	WalletRedIcon,
	WalletYellowIcon,
} from "../../public/svg/icons";
import styles from "../../styles/admin/wallet.module.scss";
import Table from "../../components/Table/Table";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { _getMerchantWallets } from "../../store/slices/adminSlice/walletSlice";
import Loader from "../../components/loader";
import Button from "../../components/ui/Button";
import useWindowDimension from "../../hooks/useWindowDimension";
import { formatNumber, paginate, truncateString } from "../../utils";

function Wallet() {
	const dispatch = useDispatch();
	const { wallets, isLoading } = useSelector(
		(state) => state.wallet.walletList
	);
	const { width } = useWindowDimension();
	useEffect(() => {
		dispatch(_getMerchantWallets());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const paginatedData = paginate(wallets, currentPage, pageSize);
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	console.log(wallets);
	const thead = [
		"#",
		"Name",
		"Email",
		"Phone Number",
		"Escrow Balance",
		"Withdrawable amount",
	];

	return (
		<AdminLayout>
			<div
				className={`pt-10 w-11/12 mx-auto pb-20 mt-1 ${styles.wallet}`}
				style={{ backgroundColor: "#E5E5E5" }}
			>
				<div className="grid grid-cols-1 lg:grid-cols-4 justify-between lg:gap-10 items-center w-full">
					<h3 className=" lg:py-20 py-10 col-span-3 text-5xl font-semibold mt-1 text-semibold text-black">
						Wallet
					</h3>
					<p className="text-3xl text-violet-600">
						<Link href="/admin/withdraw-request">View Withdrawal Request</Link>
					</p>
				</div>

				<div className="lg:grid   lg:grid-cols-4   lg:gap-10 md:gap-10 ">
					<div className="bg-white col-span-3 rounded-lg shadow-lg">
						<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 w-11/12 mx-auto my-20 pt-10 ">
							<div className="flex align-items mb-10">
								<TotalProfit />
								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Profit</h4>
									<h1 className="text-black text-4xl"> 87,743</h1>
								</div>
							</div>

							<div className="flex align-items mb-10 ">
								<TotalRevenue />
								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Revenue</h4>
									<h1 className="text-black text-4xl"> 87,743</h1>
								</div>
							</div>
							<div className="flex align-items mb-10">
								<TotalSpent />
								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Spent</h4>
									<h1 className="text-black text-4xl"> + 12.3%</h1>
								</div>
							</div>
						</div>

						<div className={`lg:p-10  ${styles.barchart}`}>
							<Bar
								data={{
									labels: [
										"17 Mar",
										"18 Mar",
										"19 Mar",
										"20 Mar",
										"21 Mar",
										"22 Mar",
									],
									datasets: [
										{
											label: "My First Dataset",
											data: [65, 59, 80, 81, 56, 55],
											backgroundColor: ["#743B96", "#0CBC8B"],
										},
									],
								}}
								height={400}
								width={600}
								options={{
									maintainAspectRatio: true,
								}}
							/>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-lg py-10 text-black mt-10 lg:-mt-1 ">
						<h4 className="text-3xl font-semibold text-black ml-5">
							Money allocation
						</h4>
						<div className="w-11/12 mx-auto">
							<div className="flex items-center mt-10  justify-between  ">
								<div className=" flex items-center">
									<WalletYellowIcon />

									<h5 className=" font-bold text-2xl  ml-5 ">Bids</h5>
								</div>

								<h5 className=" font-bold text-2xl  ml-5 "> 23,3B</h5>
							</div>
							<div
								className={`${styles.bidYellow} flex justify-between items-center mt-5`}
							>
								<input type="range" value={10} />
								<span className="text-2xl">71.68%</span>
							</div>
						</div>

						{/* GREEN */}
						<div className="w-11/12 mx-auto">
							<div className="flex items-center mt-10  justify-between  ">
								<div className=" flex items-center">
									<WalletGreenIcon />

									<h5 className=" font-bold text-2xl  ml-5 ">Bid Access fee</h5>
								</div>

								<h5 className=" font-bold text-2xl  ml-5 "> 23,3B</h5>
							</div>
							<div
								className={`${styles.bidGreen} flex justify-between items-center mt-5`}
							>
								<input type="range" value={90} />
								<span className="text-2xl">71.68%</span>
							</div>
						</div>

						{/* RED  */}
						<div className="w-11/12 mx-auto">
							<div className="flex items-center mt-10  justify-between  ">
								<div className=" flex items-center">
									<WalletRedIcon />

									<h5 className=" font-bold text-2xl  ml-5 ">
										Merchant Withdraw
									</h5>
								</div>

								<h5 className=" font-bold text-2xl  ml-5 "> 23,3B</h5>
							</div>
							<div
								className={`${styles.bidRed} flex justify-between items-center mt-5`}
							>
								<input type="range" value={90} />
								<span className="text-2xl">71.68%</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* TABLE */}
			<div className="mt-20 pb-20">
				{wallets && wallets.length > 0 && width >= 780 && (
					<Table
						name="adminWallet"
						thead={thead}
						data={wallets}
						isSearch={true}
						isFilter={true}
						isExport={true}
						//	viewDetails={viewDetails}
					/>
				)}

				{wallets && wallets.length > 0 && width < 780 && (
					<>
						{paginatedData.map((item, index) => {
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
												item !== "#" ? <li key={index}>{item}</li> : ""
											)}
										</ul>
									</div>
									<div className="py-9  pl-5 bg-white  shadow-lg ">
										<ul>
											<li className="capitalize">
												{item.merchant.account.last_name}{" "}
												{item.merchant.account.first_name}
											</li>
											<li>
												{truncateString(item.merchant.account.email, 20)}{" "}
											</li>
											<li>{item.merchant.account.phone_number}</li>
											<li>{formatNumber(item.escrow_balance)}</li>
											<li>{formatNumber(item.withdrawable)}</li>
											{/* <li onClick={() => viewDetails(item.id)}>
												<Button
													name="View more details"
													paddingY="12px"
													paddingX="12px"
												/>
											</li> */}
										</ul>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
		</AdminLayout>
	);
}

export default Wallet;
Wallet.requireAdminAuth = true;
