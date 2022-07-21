import { useState } from "react";
import Table from "../../components/Table/Table";
import MerchantLayout from "../../components/MerchantLayout";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import styles from "../../styles/Items-order.module.scss";
import {
	FilterIcon,
	Bell,
	ExportIcon,
	DropdownIcon,
	VerifiedMarkIcon,
} from "../../public/svg/icons";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";

function ItemOrders() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const thead = [
		"Item name",
		"Item code",
		"Event name",
		"Bidder's name",
		"Bidder's ID",
		"Date",
		" ",
	];
	const data = [
		{
			name: "Iphone 11",
			code: "#678899",
			event: "Hide & seek",
			bidder_name: "Lade toye",
			bidder_id: "892383",
			date: "07-08-2019",
		},
		{
			name: "Iphone 11",
			code: "#678899",
			event: "Hide & seek",
			bidder_name: "Lade toye",
			bidder_id: "892383",
			date: "07-08-2019",
		},
		{
			name: "Iphone 11",
			code: "#678899",
			event: "Hide & seek",
			bidder_name: "Lade toye",
			bidder_id: "892383",
			date: "07-08-2019",
		},
	];
	return (
		<MerchantLayout>
			<MerchantNav title="Items Order" />

			<div className={`${styles.container} pb-20`}>
				<div className="w-11/12 mx-auto mb-10">
					<div className="flex justify-between items-center">
						<h4 className="text-4xl " style={{ fontWeight: "bold" }}>
							{" "}
							Won Items
						</h4>

						<div className="flex">
							<div className={styles.filterButton}>
								<FilterIcon />
								<button>Filter</button>
							</div>

							<div className={styles.exportButton}>
								<ExportIcon />
								<button className="mr-3">Export</button>
								<DropdownIcon />
							</div>
						</div>
					</div>
				</div>
				<Table
					thead={thead}
					data={data}
					name="item-order"
					viewDetails={viewDetails}
				/>
			</div>

			<Modal
				title="Won item details"
				display={modalDisplay}
				close={viewDetails}
			>
				<div className={`${styles.modal} overflow-y-auto`}>
					<div
						className="drop-shadow-lg my-5  p-3 bg-white w-20"
						onClick={viewDetails}
					>
						<svg
							width="26"
							height="18"
							viewBox="0 0 26 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-11/12"
						>
							<path
								d="M9.68673 17.5254C9.93862 17.5254 10.1905 17.4379 10.3894 17.2504C10.7739 16.8879 10.7739 16.2879 10.3894 15.9254L3.04468 9.00039L10.3894 2.07539C10.7739 1.71289 10.7739 1.11289 10.3894 0.750391C10.0049 0.387891 9.36855 0.387891 8.98408 0.750391L0.936729 8.33789C0.552259 8.70039 0.552259 9.30039 0.936729 9.66289L8.98408 17.2504C9.18294 17.4379 9.43484 17.5254 9.68673 17.5254Z"
								fill="black"
								fillOpacity="0.6"
							/>
							<path
								d="M1.86506 9.9375L24.1776 9.9375C24.7211 9.9375 25.1719 9.5125 25.1719 9C25.1719 8.4875 24.7211 8.0625 24.1776 8.0625L1.86506 8.0625C1.3215 8.0625 0.870741 8.4875 0.870741 9C0.870741 9.5125 1.3215 9.9375 1.86506 9.9375Z"
								fill="black"
								fillOpacity="0.6"
							/>
						</svg>
					</div>

					<div className="grid grid-cols-2 justify-around w-9/12 mx-auto items-center">
						<Image
							src="/images/phone.png"
							alt="product image"
							layout="responsive"
							width="100%"
							height="100%"
						/>
						<div className="ml-7">
							<h3 className="text-4xl mb-5">Iphone 13pro max</h3>
							<span className="flex items-center text-cyan-500 my-5">
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mr-3"
								>
									<path
										d="M7.75 12.5V13.75H0.25V12.5H7.75ZM8.11625 0.428711L12.9775 5.28996L12.0938 6.17496L11.4312 5.95371L9.88313 7.49996L13.4187 11.0356L12.535 11.9193L9 8.38371L7.4975 9.88621L7.67437 10.5937L6.79 11.4775L1.92875 6.61621L2.81312 5.73246L3.51937 5.90871L7.45312 1.97559L7.2325 1.31309L8.11625 0.428711Z"
										fill="#004CE8"
										fillOpacity="0.69"
									/>
								</svg>
								Won auction
							</span>
							<p>
								iPhone 13 Pro and iPhone 13 Pro Max introduce the most advanced
								display ever on iPhone, Super Retina XDR with ProMotion,
								supporting an adaptive refresh rate from 10Hz to 120Hz.
							</p>
						</div>
					</div>
					<div
						style={{ backgroundColor: "#F3F3F3" }}
						className=" rounded-3xl w-11/12 mx-auto my-10"
					>
						<div className="w-full border-b border-gray-400">
							<h3 className="pt-10 pl-10 pb-7 text-2xl">Winner Details</h3>
						</div>
						<div className="px-20 py-10 flex">
							<div>
								<p className="text-3xl my-10">Name :</p>
								<p className="text-3xl mb-10">Phone number :</p>
								<p className="text-3xl mb-10">Date :</p>
							</div>
							<div className="ml-20 ">
								<p className="text-2xl my-10 pt-1">Akinpelumi Lade </p>
								<p className="text-2xl mb-10">0903747665155 </p>
								<p className="text-2xl mb-10">16 May, 2022 </p>
							</div>
						</div>
					</div>
					<div className="my-6 flex justify-between w-10/12 mx-auto items-center">
						<div className="opacity-0">hide</div>
						<div>
							<button
								type="button"
								className="text-red-900 border border-red-300 focus:outline-none hover:bg-red-100  text-2xl rounded-md  px-10 py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 "
							>
								Cancel delivery
							</button>
							<Button
								bgColor="#743B96"
								name="Complete Delivery"
								paddingX="20px"
								paddingY="8px"
								isBoxShadow={true}
							/>
						</div>
					</div>
				</div>
			</Modal>
		</MerchantLayout>
	);
}

export default ItemOrders;
