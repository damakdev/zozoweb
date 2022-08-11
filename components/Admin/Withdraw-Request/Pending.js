import React from "react";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";

function Pending() {
	const thead = [
		"No",

		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
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
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
		},
	];
	return (
		<>
			<div>
				<Table
					name="pendingRequest"
					thead={thead}
					data={data}
					isSearch={true}
					isFilter={true}
				/>
			</div>
		</>
	);
}

export default Pending;
