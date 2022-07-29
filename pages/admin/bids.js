import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";

function Bids() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const thead = [
		"Date Initiated",
		"Event ID",
		"Product name",
		"Price",
		"Winners",
	];
	const data = [
		{
			event_id: "R434FG",
			product_name: "Meny Bag",
			price: "7,000",
			winner: "Tao Tao",
			date: "07-08-2019",
		},
		{
			event_id: "R434FG",
			product_name: "Meny Bag",
			price: "7,000",
			winner: "Tao Tao",
			date: "07-08-2019",
		},
		{
			event_id: "R434FG",
			product_name: "Meny Bag",
			price: "7,000",
			winner: "Tao Tao",
			date: "07-08-2019",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Bids
				</h3>
				<Table
					name="adminBids"
					thead={thead}
					data={data}
					isSearch={true}
					isFilter={true}
					isExport={true}
					viewDetails={viewDetails}
				/>
			</div>

			<Modal title="Bid Information" display={modalDisplay} close={viewDetails}>
				<div className={` overflow-y-auto`}>
					<div className=" w-5/12  mx-auto items-center">
						<Image
							src="/images/phone.png"
							alt="product image"
							layout="responsive"
							width="100%"
							height="100%"
						/>
					</div>
					<div
						style={{ backgroundColor: "#F3F3F3" }}
						className=" rounded-3xl w-9/12 mx-auto my-10 text-black"
					>
						<div className="w-full border-b border-gray-400 ">
							<h3 className="pt-10 pl-10 pb-7 text-3xl text-black">
								Basic Information
							</h3>
						</div>
						<div className="px-20 py-10 flex">
							<div>
								<p className="text-3xl my-10">Merchant name: :</p>
								<p className="text-3xl mb-10">Phone number :</p>
								<p className="text-3xl mb-10">Email :</p>
							</div>
							<div className="ml-20 ">
								<p className="text-2xl my-10 pt-1">Akinpelumi Lade </p>
								<p className="text-2xl mb-10">0903747665155 </p>
								<p className="text-2xl mb-10">taotao@gmail.com </p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
