import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";

function Audit() {
	// const [modalDisplay, setModalDisplay] = useState(false);

	// const viewDetails = () => {
	// 	setModalDisplay((modalDisplay) => !modalDisplay);
	// };
      const thead = ["Item", "Merchant name", "Reciept ", "Status"];
	const data = [
		{
			item: "Macbook pro 19",
			name: "Adedeji Ade",
			reciept: "Confirmed",
			status: "Approved",
		},
		{
			item: "Macbook pro 19",
			name: "Adedeji Ade",
			reciept: "Confirmed",
			status: "Approved",
		},
		{
			item: "Macbook pro 19",
			name: "Adedeji Ade",
			reciept: "Confirmed",
			status: "Approved",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Shipping request
				</h3>
				<Table name="shipping" thead={thead} data={data} />
			</div>
		</AdminLayout>
	);
}

export default Audit;
