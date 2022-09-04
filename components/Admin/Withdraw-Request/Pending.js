import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HouseIcon } from "../../../public/svg/icons";
import { _getWithdrawRequest } from "../../../store/slices/adminSlice/walletSlice";
import Loader from "../../loader";
import Table from "../../Table/Table";

function Pending() {
	const dispatch = useDispatch();
	const { request, isLoading } = useSelector(
		(state) => state.wallet.withdrawalRequest
	);
	useEffect(() => {
		dispatch(_getWithdrawRequest("pending"));
	}, [dispatch]);
	console.log();
	const thead = [
		"No",

		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
		"Grant Withdrawal",
	];

	return (
		<>
			<div className="h-screen">
				{isLoading && (
					<div className="h-full" style={{ marginTop: "-250px" }}>
						<Loader />
					</div>
				)}

				{request && (
					<Table
						name="pendingRequest"
						thead={thead}
						data={request.cash_request}
						isSearch={true}
						isFilter={true}
					/>
				)}

				{!request && !isLoading && (
					<div className="text-3xl mt-20 text-black font-bold">
						No Pending Request
					</div>
				)}
			</div>
		</>
	);
}

export default Pending;
