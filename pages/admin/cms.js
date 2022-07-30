import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";
import Link from "next/link";

function CMS() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	const thead = ["#", "Pruduct", "Category", "Serial code", "Action"];
	const data = [
		{
			id: "1",
			product: "Meny Bag",
			cate: "7,000",
			code: "Tao Tao",
		},
		{
			id: "2",
			product: "Meny Bag",
			cate: "7,000",
			code: "Tao Tao",
		},
		{
			id: "3",
			product: "Meny Bag",
			cate: "7,000",
			code: "Tao Tao",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<div className="flex items-center justify-between w-11/12 mx-auto">
					<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
						User Management
					</h3>

					<div className="">
                                    
						<Link href="/admin/create-ads">
							<Button
								bgColor="#743B96"
								name="Create Ad"
								border="none"
								paddingX={"20px"}
								paddingY="10px"
							/>
						</Link>
					</div>
				</div>
				<Table
					name="cms"
					thead={thead}
					data={data}
					isSearch={true}
					isFilter={true}
					isExport={true}
					viewDetails={viewDetails}
				/>
			</div>
		</AdminLayout>
	);
}

export default CMS;
