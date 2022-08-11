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
	const thead = ["Cash out", "Merchant name ", "Status"];
	const data = [
		{
			merchant_name: "Tao Tao",
			status: "approved",
			cashout: "3000",
		},
		{
			merchant_name: "Tao Tao",
			status: "approved",

			cashout: "3000",
		},
		{
			merchant_name: "Tao Tao",
			status: "approved",

			cashout: "3000",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Cashout Request
				</h3>
				<Table
					name="cashout"
					thead={thead}
					data={data}
					viewDetails={viewDetails}
				/>
			</div>

			<Modal
				title="Cash out Information"
				display={modalDisplay}
				close={viewDetails}
			>
				<div className={` overflow-y-auto`}>
					<div className=" rounded-3xl w-11/12 mx-auto my-10 text-black">
						<div className="px-20 flex">
							<div>
								<p className="text-3xl my-10">Merchant name: :</p>
								<p className="text-3xl mb-10">Date :</p>
								<p className="text-3xl mb-10">Status:</p>
							</div>
							<div className="ml-20 ">
								<p className="text-3xl my-10 pt-1">Akinpelumi Lade </p>
								<p className="text-3xl mb-10">12-03-22 </p>
								<p className="text-3xl mb-10 text-green-600">Approved </p>
							</div>
						</div>
						<div className="w-2/12 mx-auto mt-20">
							<Button
								paddingX="2.2rem"
								paddingY="1.4rem"
								name="UNAPPROVE"
								bgColor="#EB5757"
								border="none"
								fontSize="17px"
								width="200px"
							/>
						</div>
					</div>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
