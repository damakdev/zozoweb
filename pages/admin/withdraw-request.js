import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import BidAccess from "../../components/Admin/Transaction-Report/BidAccess";
import Overview from "../../components/Admin/Transaction-Report/Overview";
import WonBid from "../../components/Admin/Transaction-Report/WonBid";
import Canceled from "../../components/Admin/Withdraw-Request/Canceled";
import Denied from "../../components/Admin/Withdraw-Request/Denied";
import Granted from "../../components/Admin/Withdraw-Request/Granted";
import Pending from "../../components/Admin/Withdraw-Request/Pending";

function WithdrawRequest() {
	const [tab, setTab] = useState("Pending");
	let subNav = ["Pending", "Granted", "Denied", "Canceled"];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Withdraw Requests
				</h3>

				<div className="flex border-b-2 border-gray-300  mb-20">
					{subNav.map((nav) => {
						return (
							<>
								<h3
									className={`ml-20 pb-5 text-2xl pr-10  font-semibold cursor-pointer ${
										tab == nav
											? "pl-10 border-b-2 border-violet-700 text-black"
											: ""
									}`}
									onClick={() => setTab(nav)}
								>
									{nav}
								</h3>
							</>
						);
					})}
				</div>
				<div className="w-11/12 mx-auto">
					{tab == "Pending" && <Pending />}
					{tab == "Granted" && <Granted />}
					{tab == "Denied" && <Denied />}
					{tab == "Canceled" && <Canceled />}
				</div>
			</div>
		</AdminLayout>
	);
}

export default WithdrawRequest;
WithdrawRequest.requireAdminAuth = true;