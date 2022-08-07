import React from "react";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";

function Granted() {
	const thead = [
		"No",

		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
		"Date Granted",
		"Status",
	];
	const data = [
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateGranted: "07-08-2019",
			status:"Granted"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateGranted: "07-08-2019",
			status:"Granted"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateGranted: "07-08-2019",
			status:"Granted"
		},
	];
	return (
		<>
			<div>
				<Table
					name="grantedRequest"
					thead={thead}
					data={data}
					isSearch={true}
					isFilter={true}
					isExport={true}
				/>
			</div>
		</>
	);
}

export default Granted;
