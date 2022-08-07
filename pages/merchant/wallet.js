import React from "react";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import MerchantLayout from "../../components/MerchantLayout";
import Chart from "chart.js/auto";
import {
	Timer,
	Bell,
	MerchantWalletGreen,
	MerchantWalletPurple,
	WalletIcon,
	MerchantWalletMarkerRed,
	MerchantWalletMarkerGreen,
	MerchantWallet,
} from "../../public/svg/icons";
import { Line } from "react-chartjs-2";
import styles from "../../styles/merchant/wallet.module.scss";
import Image from "next/image";
import Button from "../../components/ui/Button";

function Wallet() {
	return (
		<MerchantLayout>
			<div className="grid grid-cols-4 ">
				<div className="col-span-3 bg-white">
					<div className="w-11/12 mx-auto">
						<nav className="mt-20">
							<h2 className="text-black"> My Wallet </h2>
							<span className="flex items-center mt-6">
								<Timer /> <p className="ml-5">Updated on 6. 7. 2022 </p>
							</span>
						</nav>
					</div>
					<ul className="flex flex-row-reverse mb-5 pb-5 border-b-2 border-gray-200 pr-20">
						<li className="bg-cyan-800 rounded-3xl py-1  px-10 text-white mx-2">
							1Y
						</li>
						<li className="  px-10 ">3M</li>
						<li className="  px-10 ">1M</li>
						<li className="  px-10 ">1W</li>
						<li className="  px-10 ">1H</li>
					</ul>

					<div className="w-10/12 mx-auto my-20">
						<Line
							data={{
								labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
								datasets: [
									{
										label: "My First Dataset",
										data: [65, 59, 56, 55, 40],
										fill: false,
										borderColor: "rgb(75, 192, 192)",
										tension: 0.1,
									},
								],
							}}
						/>
					</div>

					<div className="w-11/12 mx-auto my-20 ">
						<table className={` ${styles.table} `}>
							<tr>
								<th>SN</th>
								<th>Date</th>
								<th>Amount</th>
								<th>Type</th>
								<th>Status</th>
							</tr>
							<tr>
								<td>#1236893</td>
								<td>07-05-2022</td>
								<td>50,000</td>
								<td>Debit</td>
								<td>Pending</td>
							</tr>
							<tr>
								<td>#1236893</td>
								<td>07-05-2022</td>
								<td>50,000</td>
								<td>Debit</td>
								<td>Pending</td>
							</tr>
						</table>
					</div>
				</div>

				<aside className="bg-gray-200 rounded-l-3xl">
					<div className="w-11/12 mx-auto">
						<nav className=" w-11/12 mx-auto mt-10 flex items-center justify-between">
							<div className="  ">
								<Bell />
							</div>
							<Image
								src="/images/pic2.png"
								alt="profile picture"
								width={35}
								height={35}
								className="rounded-full"
							/>
						</nav>
						<section className="my-20 text-black">
							<h4 className="text-3xl">Total Balance</h4>
							<h2 className="text-6xl mt-6">₦5,000.78</h2>
						</section>

						<section className="mt-10 ">
							<div className="flex justify-around items-center ">
								<MerchantWalletGreen />
								<div>
									<p className=" text-2xl text-black">Escrow balance</p>
									<p className="font-bold text-black">₦15,224,562 </p>
									<div className="flex items-center  justify-between">
										<MerchantWalletMarkerGreen />

										<p className="mx-5 text-green-600">0.5%</p>
										<p className="text-black">Last Month</p>
									</div>
								</div>
							</div>

							<div className="flex justify-around items-center mt-8 ">
								<MerchantWalletPurple className="bg-violet-700 p-3 rounded-full" />

								<div>
									<p className=" text-2xl text-black">Escrow balance</p>
									<p className="font-bold text-black">₦15,224,562 </p>
									<div className="flex items-center  justify-between">
										<MerchantWalletMarkerRed />

										<p className="mx-5 text-red-600">0.5%</p>
										<p className="text-black">Last Month</p>
									</div>
								</div>
							</div>
						</section>

						<section className="mt-20  ">
							<h4 className="text-black text-3xl text-center font-bold">
								Withdraw
							</h4>

							<h5 className="text-black text-2xl text-left mt-6">
								Select Account
							</h5>

							<div className="flex justify-between items-center bg-white py-5 px-6  my-10 shadow-lg rounded-2xl">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M12.3255 3.33398H7.67552C3.99219 3.33398 3.99219 5.29232 3.99219 7.01732V10.1757C3.99219 10.359 4.07552 10.5257 4.21719 10.634C4.35885 10.7423 4.55052 10.784 4.72552 10.734C5.10052 10.634 5.56719 10.584 6.12552 10.584C6.68385 10.584 6.80052 10.6507 7.13385 10.9007L7.89219 11.7007C8.43385 12.284 9.20885 12.6173 10.0089 12.6173C10.8089 12.6173 11.5755 12.284 12.1255 11.7007L12.8839 10.9007C13.2172 10.6507 13.3339 10.584 13.8922 10.584C14.4505 10.584 14.9172 10.634 15.2922 10.734C15.4672 10.784 15.6505 10.7423 15.8005 10.634C15.9422 10.5257 16.0255 10.3507 16.0255 10.1757V7.01732C16.0089 5.29232 16.0089 3.33398 12.3255 3.33398Z"
										fill="#292D32"
									/>
									<path
										d="M11.8956 5.66602C11.6789 5.44935 11.3206 5.44935 11.1039 5.66602L10.5622 6.20768V2.22435C10.5622 1.91602 10.3039 1.66602 9.99557 1.66602C9.68724 1.66602 9.42891 1.91602 9.42891 2.22435V6.19935L8.89557 5.66602C8.67891 5.44935 8.32057 5.44935 8.10391 5.66602C7.88724 5.88268 7.88724 6.24102 8.10391 6.45768L9.60391 7.95768C9.61224 7.96602 9.61224 7.96602 9.62057 7.96602C9.67057 8.00768 9.72057 8.04935 9.78724 8.07435C9.85391 8.09935 9.92891 8.11602 10.0039 8.11602C10.0789 8.11602 10.1456 8.09935 10.2206 8.07435C10.2872 8.04935 10.3539 8.00768 10.4039 7.94935L11.9039 6.44935C12.1122 6.24102 12.1122 5.88268 11.8956 5.66602Z"
										fill="#292D32"
									/>
									<path
										d="M15.5747 9.60768C15.0997 9.48268 14.5414 9.41602 13.8747 9.41602C12.9497 9.41602 12.6081 9.64102 12.1331 9.99935C12.1081 10.016 12.0831 10.041 12.0581 10.066L11.2664 10.9077C10.5997 11.6077 9.39974 11.616 8.73307 10.8993L7.94141 10.066C7.91641 10.041 7.89141 10.016 7.86641 9.99935C7.39141 9.64102 7.04974 9.41602 6.12474 9.41602C5.45807 9.41602 4.89974 9.48268 4.42474 9.60768C2.44141 10.141 2.44141 11.716 2.44141 13.0993V13.8743C2.44141 15.966 2.44141 18.3327 6.89974 18.3327H13.0997C16.0581 18.3327 17.5581 16.8327 17.5581 13.8743V13.0993C17.5581 11.716 17.5581 10.141 15.5747 9.60768ZM11.9414 15.3327H8.05807C7.74141 15.3327 7.48307 15.0743 7.48307 14.7493C7.48307 14.4243 7.74141 14.166 8.05807 14.166H11.9414C12.2581 14.166 12.5164 14.4243 12.5164 14.7493C12.5164 15.0743 12.2581 15.3327 11.9414 15.3327Z"
										fill="#292D32"
									/>
									<path
										opacity="0.4"
										d="M12.5158 14.7493C12.5158 15.0743 12.2574 15.3327 11.9408 15.3327H8.05742C7.74076 15.3327 7.48242 15.0743 7.48242 14.7493C7.48242 14.4243 7.74076 14.166 8.05742 14.166H11.9408C12.2574 14.166 12.5158 14.4243 12.5158 14.7493Z"
										fill="#292D32"
									/>
									<circle cx="15.5" cy="5.5" r="2.5" fill="#FD5D76" />
								</svg>
								<div>
									<h4 className="text-black text-2xl  font-bold mb-2">
										934848880 lade toye{" "}
									</h4>
									<h4 className="text-black text-2xl">First Bank </h4>
								</div>

								<svg
									width="10"
									height="10"
									viewBox="0 0 7 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.44865 3.6183L6.81506 1.34526L6.16562 0.669145L3.79921 2.94218L1.52617 0.575773L0.850051 1.22521L3.12309 3.59162L0.75668 5.86466L1.40612 6.54078L3.77253 4.26774L6.04557 6.63415L6.72169 5.98471L4.44865 3.6183Z"
										fill="black"
									/>
								</svg>
							</div>

							<div className="flex justify-between items-center bg-gray-100 opacity-60 py-5 px-6  my-10 shadow-lg rounded-2xl">
								<MerchantWallet />
								<div>
									<h4 className="text-black text-2xl  font-bold mb-2">
										934848880 lade toye{" "}
									</h4>
									<h4 className="text-black text-2xl">First Bank </h4>
								</div>

								<svg
									width="10"
									height="10"
									viewBox="0 0 7 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.44865 3.6183L6.81506 1.34526L6.16562 0.669145L3.79921 2.94218L1.52617 0.575773L0.850051 1.22521L3.12309 3.59162L0.75668 5.86466L1.40612 6.54078L3.77253 4.26774L6.04557 6.63415L6.72169 5.98471L4.44865 3.6183Z"
										fill="black"
									/>
								</svg>
							</div>
						</section>

						<section className="mt-20">
							<div>
								<h4 className="my-5 text-black text-2xl font-bold ">
									Withdraw Amount
								</h4>
								<input className=" w-full  outline-none shadow-lg rounded-lg py-3 pl-10" />
							</div>

							<div>
								<h4 className="my-5 text-black text-2xl font-bold ">
									Password
								</h4>
								<input className=" w-full  outline-none shadow-lg rounded-lg py-3 pl-10" />
							</div>

							<Button
								name="WITHDRAW"
								width="80%"
								paddingY="7px"
								className=" ml-10 my-10 "
							/>
						</section>
					</div>
				</aside>
			</div>
		</MerchantLayout>
	);
}

export default Wallet;
