import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import BidAccess from "../../components/Admin/Transaction-Report/BidAccess";
import Overview from "../../components/Admin/Transaction-Report/Overview";
import WonBid from "../../components/Admin/Transaction-Report/WonBid";

function TransactionReport() {
	const [tab, setTab] = useState("home");
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Transaction Report
				</h3>

				<div className="flex border-b-2 border-gray-300  mb-20">
					<h3
						className={`ml-20 pb-5 text-2xl pr-10  font-semibold cursor-pointer ${
							tab == "home"
								? "pl-10 border-b-2 border-violet-700 text-black"
								: ""
						}`}
						onClick={() => setTab("home")}
					>
						Merchant Transaction
					</h3>
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "bid-access"
								? "px-3 border-b-2 border-violet-700 text-black"
								: ""
						}`}
						onClick={() => setTab("bid-access")}
					>
						Bid-access Transaction
					</h3>
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "won-bids"
								? "px-3 border-b-2 border-violet-700 text-black"
								: ""
						}`}
						onClick={() => setTab("won-bids")}
					>
						Won-bids Transaction
					</h3>
				</div>
				<div className="w-11/12 mx-auto">
					{tab == "home" && <Overview />}
					{tab == "bid-access" && <BidAccess />}
					{tab == "won-bids" && <WonBid />}
				</div>
			</div>
		</AdminLayout>
	);
}

export default TransactionReport;
