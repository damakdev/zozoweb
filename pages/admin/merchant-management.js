import React, { useState } from "react";
import Image from "next/image";
import AdminLayout from "../../components/Admin/AdminLayout";
import Modal from "../../components/modal/modal";
import Table from "../../components/Table/Table";
import Button from "../../components/ui/Button";
import styles from "../../styles/admin/customerMgt.module.scss";
import { GreenMarker, VerifiedMarkIcon } from "../../public/svg/icons";
function MerchantMgt() {
	const thead = [
		"Date Created",
		"First name",
		"Last name",
		"Phone Number",
		"Email",
		"Verification Status",
	];
	const [modalDisplay, setModalDisplay] = useState(false);
	const [tab, setTab] = useState("basic");

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const data = [
		{
			firstName: "Adetola",
			lastName: "Adedeji",
			phone: "09041901034",
			email: "ader@gmail.com",
			status: "Unverified",
			date: "07-08-2019",
		},
		{
			firstName: "Adetola",
			lastName: "Adedeji",
			phone: "09041901034",
			email: "ader@gmail.com",
			status: "Unverified",
			date: "07-08-2019",
		},
		{
			firstName: "Adetola",
			lastName: "Adedeji",
			phone: "09041901034",
			email: "ader@gmail.com",
			status: "Unverified",
			date: "07-08-2019",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 w-11/12 mx-auto pb-20 mt-1">
				<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
					Merchant Management
				</h3>
				<Table
					name="merchantMgt"
					thead={thead}
					data={data}
					viewDetails={viewDetails}
				/>
			</div>

			<Modal
				title="Merchant Information"
				display={modalDisplay}
				close={viewDetails}
			>
				<div className={`${styles.modal} overflow-y-auto`}>
					<div className="grid grid-cols-2 justify-around w-9/12 mx-auto items-center">
						<div>
							<img src="/images/pic2.png" className="rounded-lg h-4/12 " />
						</div>

						<div className="ml-7 ">
							<h3 className="text-4xl mb-4 font-semibold text-black">
								Adeola Omokomo
							</h3>
							<div className="flex items-center mb-20">
								<h3 className="text-4xl text-green-600 pt-5 mr-4 ">
									Verified{" "}
								</h3>
								<GreenMarker />
							</div>
							<div>
								<Button
									bgColor="#EB5757"
									name="Block"
									paddingX="40px"
									paddingY="8px"
									isBoxShadow={true}
									border="none"
								/>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundColor: "#F3F3F3" }}
						className=" rounded-3xl w-11/12 mx-auto my-10"
					>
						<div className="w-full border-b border-gray-400 flex ">
							<h3
								className={`pt-10 ml-2 px-20 pb-7 text-2xl text-black font-semibold cursor-pointer ${
									tab == "basic" ? "border-b-2 border-violet-700" : ""
								}`}
								onClick={() => setTab("basic")}
							>
								Basic Information
							</h3>
							<h3
								className={`pt-10 ml-2 px-20 pb-7 text-2xl text-black font-semibold cursor-pointer ${
									tab == "res" ? "border-b-2 border-violet-700" : ""
								}`}
								onClick={() => setTab("res")}
							>
								Residential information
							</h3>
						</div>

						{tab === "basic" && (
							<div className="px-20 py-10 flex">
								<div>
									<p className="text-3xl my-10">First name :</p>
									<p className="text-3xl my-10">Last name :</p>
									<p className="text-3xl mb-10">Phone number :</p>
									<p className="text-3xl mb-10">Email :</p>
								</div>
								<div className="ml-20 ">
									<p className="text-3xl my-10 pt-1 ">Akinpelumi </p>
									<p className="text-3xl my-10 pt-1">Lade </p>
									<p className="text-3xl mb-10">0903747665155 </p>
									<p className="text-3xl mb-10">adeolaomok23@gmail.com </p>
								</div>
							</div>
						)}

						{tab === "res" && (
							<div className="px-20 py-10 flex">
								<div>
									<p className="text-3xl my-10">NIN :</p>
									<p className="text-3xl my-10">Street :</p>
									<p className="text-3xl mb-10">House number :</p>
									<p className="text-3xl mb-10">City :</p>
									<p className="text-3xl mb-10">Closest landmark :</p>
								</div>
								<div className="ml-20 ">
									<p className="text-3xl my-10 pt-1 ">12345678GJNBB </p>
									<p className="text-3xl my-10 pt-1">Pedro,obanikoro </p>
									<p className="text-3xl mb-10">12b </p>
									<p className="text-3xl mb-10">Lagos</p>
									<p className="text-3xl mb-10">Ojota </p>
								</div>
							</div>
						)}
					</div>
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default MerchantMgt;
