import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";

function Audit() {
	// const [modalDisplay, setModalDisplay] = useState(false);

	// const viewDetails = () => {
	// 	setModalDisplay((modalDisplay) => !modalDisplay);
	// };
	const thead = ["User", "User type", "Timestamp ", "Action"];
	const data = [
		{
			name: "12-03-22",
			type: "Adedeji Ade",
			timestamp: "Tao Tao",
		},
		{
			name: "12-03-22",
			type: "Adedeji Ade",
			timestamp: "Tao Tao",
		},
		{
			name: "12-03-22",
			type: "Adedeji Ade",
			timestamp: "Tao Tao",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Audit Log
				</h3>
				<Table name="audit" thead={thead} data={data} />
			</div>
		</AdminLayout>
	);
}

export default Audit;
Audit.requireAdminAuth = true;
