import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HouseIcon } from "../../../public/svg/icons";
import Table from "../../Table/Table";
import { _getWithdrawRequest } from "../../../store/slices/adminSlice/walletSlice";
import Loader from "../../loader";

function Denied() {
	const dispatch = useDispatch();
	const { request, isLoading } = useSelector(
		(state) => state.wallet.withdrawalRequest
	);
	useEffect(() => {
		dispatch(_getWithdrawRequest("denied"));
	}, [dispatch]);
	console.log();
	const thead = [
		"No",
		"User ",
		"Amount requested",
		"Current Wallet Amount",
		"Date requested",
		"Date Denied",
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
						name="deniedRequest"
						thead={thead}
						data={request.cash_request}
						isSearch={true}
						isFilter={true}
					/>
				)}

				{!request && !isLoading &&(
					<div className="text-3xl mt-20 text-black font-bold">
						No Denied Request
					</div>
				)}
			</div>
		</>
	);
}

export default Denied;
