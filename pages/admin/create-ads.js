import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import BottomAd from "../../components/Admin/Create-Ad/BottomAd";
import TopAd from "../../components/Admin/Create-Ad/TopAd";

function CreateAd() {
	const [tab, setTab] = useState("top");
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Create Ad
				</h3>

				<div className="flex border-b-2 border-gray-300  mb-20">
					<h3
						className={`ml-20 pb-5 text-2xl pr-10  font-semibold cursor-pointer ${
							tab == "top"
								? "pl-10 border-b-2 border-violet-700 text-black"
								: ""
						}`}
						onClick={() => setTab("top")}
					>
						Top ad
					</h3>
					<h3
						className={`ml-20 pb-5 text-2xl pr-10text-black font-semibold cursor-pointer ${
							tab == "bottom"
								? "px-3 border-b-2 border-violet-700 text-black"
								: ""
						}`}
						onClick={() => setTab("bottom")}
					>
						Bottom ad
					</h3>
				</div>
                        <div className="w-11/12 mx-auto">
					{tab == "top" && <TopAd />}
					{tab == "bottom" && <BottomAd />}
				</div>
			</div>
		</AdminLayout>
	);
}

export default CreateAd;
