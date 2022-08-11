import React from "react";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";

function Denied() {
	const thead = [
		"No",

		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
		"Date Denied",
		"Grant Withdrawal",
	];
	const data = [
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateDenied: "07-08-2019",
			status:"Denied"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateDenied: "07-08-2019",
			status:"Denied"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateDenied: "07-08-2019",
			status:"Denied"
		},
	];
	return (
		<>
			<div>
				<Table
					name="deniedRequest"
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

export default Denied;
