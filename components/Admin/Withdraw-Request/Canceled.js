import React from "react";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";

function Canceled() {
	const thead = [
		"No",

		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
		"Date Canceled",
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
			dateCanceled: "07-08-2019",
			status:"Canceled"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateCanceled: "07-08-2019",
			status:"Canceled"
		},
		{
			id: "23093",
			name: "Adamu",
			amount: "7,000",
			currentWallet: "10,000",
			description: "Withdraw",
			date: "07-08-2019",
			dateCanceled: "07-08-2019",
			status:"Canceled"
		},
	];
	return (
		<>
			<div>
				<Table
					name="canceledRequest"
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

export default Canceled;
