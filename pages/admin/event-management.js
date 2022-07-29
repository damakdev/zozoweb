import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";

function Bids() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const thead = [
		"Date created",
		"Event name",
		"Start-date",
		"Merchant name ",
		"Status",
		"Amount ",
	];
	const data = [
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "approved",
			date: "07-08-2019",
			amount: "3000",
		},
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "declined",
			date: "07-08-2019",
			amount: "3000",
		},
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "approved",
			date: "07-08-2019",
			amount: "3000",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Event Management
				</h3>
				<Table
					name="eventMgt"
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
					<div className=" grid grid-cols-2 w-10/12  mx-auto items-center">
						<Image
							src="/images/phone.png"
							alt="product image"
							layout="responsive"
							width="100%"
							height="100%"
						/>
						<div>
							<h3 className="text-4xl mb-20 text-black">Iphone 13pro max</h3>
                                          
                                          <h3 className="text-green-600 mb-20">Approved</h3>
                                          
                                          <Button
							paddingX="2.2rem"
							paddingY="1.2rem"
							name="UNAPPROVED"
							bgColor="#EB5757"
							border="none"
							fontSize="12px"
                                          isBoxShadow={true}
						/>
                                    </div>
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
								<p className="text-3xl mb-10">Event name :</p>
                                                <p className="text-3xl mb-10">Start date :</p>
                                                <p className="text-3xl mb-10">Date created:  :</p>
								<p className="text-3xl mb-10">Amount :</p>
							</div>
							<div className="ml-20 ">
								<p className="text-2xl my-10 pt-1">Akinpelumi Lade </p>
								<p className="text-2xl mb-10">Adedeji Ade </p>
                                                <p className="text-2xl mb-10">12-03-22 </p>
                                                <p className="text-2xl mb-10">12-03-22 </p>
								<p className="text-2xl mb-10">23,042 </p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
