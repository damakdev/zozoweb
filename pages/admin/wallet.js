import React, { useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
	WalletGreenIcon,
	WalletRedIcon,
	WalletYellowIcon,
} from "../../public/svg/icons";
import styles from "../../styles/admin/wallet.module.scss";
import Table from "../../components/Table/Table";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { _getMerchantWallets } from "../../store/slices/adminSlice/walletSlice";


function Wallet() {
	const dispatch = useDispatch()
	const {wallets} = useSelector(state=>state.wallet.walletList)
	
	useEffect(() => {
	dispatch(_getMerchantWallets())
	}, [dispatch])
	
	console.log(wallets)
	const thead = ["#", "Name", "Escrow Balance", "Withdrawable amount"];
	const data = [
		{
			id: "1",
			name: "Meny Bag",
			bid: "7,000",
			value: "12,400",
			profit: "7,900",
		},
		{
			id: "2",
			name: "Meny Bag",
			bid: "7,000",
			value: "12,400",
			profit: "7,900",
		},
		{
			id: "3",
			name: "Meny Bag",
			bid: "7,000",
			value: "12,400",
			profit: "7,900",
		},
	];
	return (
		<AdminLayout>
			<div
				className="pt-10 w-11/12 mx-auto pb-20 mt-1"
				style={{ backgroundColor: "#E5E5E5" }}
			>
				<div className="grid grid-cols-4 justify-between gap-10 items-center w-full">
					<h3 className=" py-20 col-span-3 text-5xl font-semibold mt-1 text-semibold text-black">
						Wallet
					</h3>
					<p className="text-3xl text-violet-600">
						<Link href="/admin/withdraw-request">View Withdrawal Request</Link>
					</p>
				</div>

				<div className="grid grid-cols-4 gap-10 ">
					<div className="bg-white col-span-3 rounded-lg shadow-lg">
						<div className="grid grid-cols-3 w-11/12 mx-auto my-20">
							<div className="flex align-items">
								<svg
									width="67"
									height="60"
									viewBox="0 0 67 60"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.598633"
										width="66.132"
										height="60"
										rx="13.7544"
										fill="#D5C4DF"
									/>
									<path
										d="M44.3933 24.56V31.4267C44.3933 35.5333 41.8068 37.2933 37.927 37.2933H25.0092C24.3479 37.2933 23.716 37.24 23.1281 37.12C22.7607 37.0667 22.408 36.9733 22.0847 36.8667C19.8803 36.12 18.543 34.3867 18.543 31.4267V24.56C18.543 20.4533 21.1294 18.6934 25.0092 18.6934H37.927C41.2189 18.6934 43.585 19.96 44.2169 22.8533C44.3198 23.3867 44.3933 23.9333 44.3933 24.56Z"
										stroke="#743B96"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M48.8038 28.5601V35.4268C48.8038 39.5335 46.2174 41.2935 42.3376 41.2935H29.4198C28.3323 41.2935 27.3476 41.1601 26.4953 40.8668C24.7465 40.2801 23.5561 39.0668 23.1299 37.1201C23.7177 37.2401 24.3497 37.2935 25.011 37.2935H37.9288C41.8086 37.2935 44.3951 35.5335 44.3951 31.4268V24.5601C44.3951 23.9335 44.3363 23.3735 44.2187 22.8535C47.0109 23.3868 48.8038 25.1735 48.8038 28.5601Z"
										stroke="#743B96"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M31.4584 31.5205C33.601 31.5205 35.3381 29.9445 35.3381 28.0005C35.3381 26.0565 33.601 24.4805 31.4584 24.4805C29.3157 24.4805 27.5786 26.0565 27.5786 28.0005C27.5786 29.9445 29.3157 31.5205 31.4584 31.5205Z"
										stroke="#743B96"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M23.0542 25.0664V30.9331"
										stroke="#743B96"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M39.8691 25.0664V30.9331"
										stroke="#743B96"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Profit</h4>
									<h1 className="text-black text-4xl"> 87,743</h1>
								</div>
							</div>

							<div className="flex align-items">
								<svg
									width="67"
									height="60"
									viewBox="0 0 67 60"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.535645"
										width="66.132"
										height="60"
										rx="13.7544"
										fill="#0CBC8B"
										fillOpacity="0.15"
									/>
									<path
										d="M26.5034 44.3335C23.0058 44.3335 20.1401 42.0268 20.1401 39.1868V36.4668C20.1401 35.9201 20.6398 35.4668 21.2423 35.4668C21.8449 35.4668 22.3445 35.9201 22.3445 36.4668C22.3445 38.1335 24.1227 39.3868 26.5034 39.3868C28.8842 39.3868 30.6624 38.1335 30.6624 36.4668C30.6624 35.9201 31.1621 35.4668 31.7646 35.4668C32.3671 35.4668 32.8668 35.9201 32.8668 36.4668V39.1868C32.8668 42.0268 30.0158 44.3335 26.5034 44.3335ZM22.7266 40.4935C23.3732 41.5868 24.8281 42.3335 26.5034 42.3335C28.1788 42.3335 29.6337 41.5735 30.2803 40.4935C29.2369 41.0668 27.9436 41.4001 26.5034 41.4001C25.0632 41.4001 23.77 41.0668 22.7266 40.4935Z"
										fill="#0CBC8B"
									/>
									<path
										d="M26.5034 37.7325C24.0933 37.7325 21.933 36.7325 20.8602 35.1459C20.39 34.4525 20.1401 33.6392 20.1401 32.8125C20.1401 31.4125 20.8161 30.1059 22.0506 29.1325C24.4314 27.2392 28.5315 27.2393 30.9269 29.1193C32.1614 30.106 32.8521 31.4125 32.8521 32.8125C32.8521 33.6392 32.6023 34.4525 32.132 35.1459C31.0739 36.7325 28.9136 37.7325 26.5034 37.7325ZM26.5034 29.666C25.3572 29.666 24.2991 30.0125 23.5055 30.6392C22.756 31.2259 22.3445 31.9992 22.3445 32.8125C22.3445 33.2792 22.4767 33.706 22.7413 34.106C23.4173 35.1193 24.8575 35.746 26.5034 35.746C28.1494 35.746 29.5896 35.1193 30.2509 34.1193C30.5154 33.7327 30.6477 33.2927 30.6477 32.826C30.6477 32.0127 30.2363 31.2392 29.4868 30.6392C28.7079 30.0125 27.6497 29.666 26.5034 29.666Z"
										fill="#0CBC8B"
									/>
									<path
										d="M26.5034 41.3993C22.8735 41.3993 20.1401 39.2794 20.1401 36.4794V32.8127C20.1401 29.9727 22.9911 27.666 26.5034 27.666C28.1641 27.666 29.7513 28.186 30.9416 29.1193C32.1761 30.106 32.8668 31.4127 32.8668 32.8127V36.4794C32.8668 39.2794 30.1333 41.3993 26.5034 41.3993ZM26.5034 29.666C24.2109 29.666 22.3445 31.0793 22.3445 32.8127V36.4794C22.3445 38.146 24.1227 39.3993 26.5034 39.3993C28.8842 39.3993 30.6624 38.146 30.6624 36.4794V32.8127C30.6624 31.9993 30.251 31.226 29.5015 30.626C28.7079 30.0127 27.6497 29.666 26.5034 29.666Z"
										fill="#0CBC8B"
									/>
									<path
										d="M43.9476 33.7342C41.7285 33.7342 39.8474 32.2409 39.671 30.3209C39.5535 29.2142 39.9944 28.1342 40.8761 27.3476C41.6109 26.6542 42.6543 26.2676 43.7565 26.2676H46.828C48.2829 26.3076 49.3998 27.3476 49.3998 28.6276V31.3742C49.3998 32.6542 48.2829 33.6942 46.8721 33.7342H43.9476ZM46.7839 28.2676H43.7712C43.2569 28.2676 42.7866 28.4409 42.4486 28.7609C42.0224 29.1342 41.8167 29.6409 41.8754 30.1476C41.9489 31.0276 42.8895 31.7342 43.9476 31.7342H46.828C47.019 31.7342 47.1954 31.5742 47.1954 31.3742V28.6276C47.1954 28.4276 47.019 28.2809 46.7839 28.2676Z"
										fill="#0CBC8B"
									/>
									<path
										d="M39.4808 42.3327H35.8068C35.2043 42.3327 34.7046 41.8793 34.7046 41.3327C34.7046 40.786 35.2043 40.3327 35.8068 40.3327H39.4808C43.2724 40.3327 45.7266 38.106 45.7266 34.666V33.7327H43.9484C41.7293 33.7327 39.8482 32.2393 39.6718 30.3193C39.5543 29.2127 39.9953 28.1327 40.8771 27.346C41.6119 26.6527 42.6551 26.266 43.7573 26.266H45.7119V25.3327C45.7119 22.2127 43.6987 20.066 40.4362 19.7193C40.0835 19.666 39.7747 19.666 39.4661 19.666H26.2397C25.887 19.666 25.549 19.6927 25.211 19.7327C21.9779 20.106 19.9939 22.2393 19.9939 25.3327V27.9993C19.9939 28.546 19.4943 28.9993 18.8917 28.9993C18.2892 28.9993 17.7896 28.546 17.7896 27.9993V25.3327C17.7896 21.226 20.5818 18.2527 24.9172 17.7594C25.314 17.706 25.7695 17.666 26.2397 17.666H39.4661C39.8188 17.666 40.2744 17.6793 40.7446 17.746C45.08 18.1993 47.9163 21.186 47.9163 25.3327V27.266C47.9163 27.8127 47.4166 28.266 46.8141 28.266H43.7573C43.243 28.266 42.7728 28.4393 42.4348 28.7593C42.0086 29.1327 41.8027 29.6393 41.8615 30.146C41.935 31.026 42.8757 31.7327 43.9338 31.7327H46.8288C47.4313 31.7327 47.931 32.186 47.931 32.7327V34.666C47.931 39.2527 44.5362 42.3327 39.4808 42.3327Z"
										fill="#0CBC8B"
									/>
								</svg>
								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Revenue</h4>
									<h1 className="text-black text-4xl"> 87,743</h1>
								</div>
							</div>
							<div className="flex align-items">
								<svg
									width="67"
									height="60"
									viewBox="0 0 67 60"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.289551"
										width="66.132"
										height="60"
										rx="13.7544"
										fill="#E1B20B"
										fillOpacity="0.15"
									/>
									<path
										d="M30.5787 38.2003H25.0089C24.4064 38.2003 23.9067 37.747 23.9067 37.2003V30.3737C23.9067 28.987 25.1559 27.8535 26.6843 27.8535H30.5787C31.1812 27.8535 31.6809 28.3068 31.6809 28.8535V37.1869C31.6809 37.7469 31.1812 38.2003 30.5787 38.2003ZM26.1111 36.2003H29.4765V29.867H26.6843C26.3756 29.867 26.1111 30.0935 26.1111 30.3869V36.2003Z"
										fill="#E1B20B"
									/>
									<path
										d="M36.1329 38.1989H30.5631C29.9606 38.1989 29.4609 37.7456 29.4609 37.1989V24.3188C29.4609 22.9322 30.7101 21.7988 32.2385 21.7988H34.4723C36.0006 21.7988 37.2498 22.9322 37.2498 24.3188V37.1989C37.2351 37.7456 36.7501 38.1989 36.1329 38.1989ZM31.68 36.1989H35.0454V24.3188C35.0454 24.0388 34.7956 23.7988 34.4723 23.7988H32.2385C31.9298 23.7988 31.6653 24.0255 31.6653 24.3188V36.1989H31.68Z"
										fill="#E1B20B"
									/>
									<path
										d="M41.7042 38.1996H36.1344C35.5319 38.1996 35.0322 37.7463 35.0322 37.1996V31.1328C35.0322 30.5861 35.5319 30.1328 36.1344 30.1328H40.0289C41.5572 30.1328 42.8064 31.2661 42.8064 32.6528V37.1996C42.8064 37.7463 42.3214 38.1996 41.7042 38.1996ZM37.2366 36.1996H40.602V32.6528C40.602 32.3728 40.3522 32.1328 40.0289 32.1328H37.2366V36.1996Z"
										fill="#E1B20B"
									/>
									<path
										d="M37.7646 44.3327H28.947C20.9671 44.3327 17.5576 41.2393 17.5576 33.9993V25.9993C17.5576 18.7593 20.9671 15.666 28.947 15.666H37.7646C45.7445 15.666 49.154 18.7593 49.154 25.9993V33.9993C49.154 41.2393 45.7445 44.3327 37.7646 44.3327ZM28.947 17.666C22.1722 17.666 19.762 19.8527 19.762 25.9993V33.9993C19.762 40.146 22.1722 42.3327 28.947 42.3327H37.7646C44.5395 42.3327 46.9496 40.146 46.9496 33.9993V25.9993C46.9496 19.8527 44.5395 17.666 37.7646 17.666H28.947Z"
										fill="#E1B20B"
									/>
								</svg>

								<div className="ml-10 mt-1">
									<h4 className="text-black text-2xl mb-3">Total Profit</h4>
									<h1 className="text-black text-4xl"> 87,743</h1>
								</div>
							</div>
						</div>
						<div className=" p-10">
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
									maintainAspectRatio: false,
								}}
							/>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-lg py-10 text-black">
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
								<input type="range" value={90} />
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
			<div className="mt-20 pb-20">
				<Table
					name="adminWallet"
					thead={thead}
					data={wallets}
					isSearch={true}
					isFilter={true}
					isExport={true}
					//	viewDetails={viewDetails}
				/>
			</div>
		</AdminLayout>
	);
}

export default Wallet;
