import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

function TransactionReport() {
	const [tab, setTab] = useState("home");
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1">
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Transaction Report
				</h3>

				<div className="flex border-b-2 border-gray-200  mb-20">
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "home" ? "border-b-2 border-violet-700" : ""
						}`}

						onClick={() => setTab("home")}
					>
						Merchant Transaction
					</h3>
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "bill-access" ? "border-b-2 border-violet-700" : ""
						}`}
						onClick={() => setTab("bill-access")}
					>
						Bill-access Transaction
					</h3>
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "won-bids" ? "border-b-2 border-violet-700" : ""
						}`}
						onClick={() => setTab("won-bids")}
					>
						Won-bids Transaction
					</h3>
				</div>
			</div>
		</AdminLayout>
	);
}

export default TransactionReport;
