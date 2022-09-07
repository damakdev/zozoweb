import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	merchantList,
	singleMerchant,
	verifyUser,
} from "../../store/slices/adminSlice/usersSlice";

import Image from "next/image";
import AdminLayout from "../../components/Admin/AdminLayout";
import Modal from "../../components/modal/modal";
import Table from "../../components/Table/Table";
import Button from "../../components/ui/Button";
import styles from "../../styles/admin/customerMgt.module.scss";
import { GreenMarker, VerifiedMarkIcon } from "../../public/svg/icons";
import Pagination from "../../components/Pagination";
import { paginate, truncateString } from "../../utils";
import Loader from "../../components/loader";
import Link from "next/link";
import useWindowDimension from "../../hooks/useWindowDimension";
function MerchantMgt() {
	const thead = [
		"No",
		"Date Created",
		"First name",
		"Last name",
		"Email",
		"Number of Auctions",
		"Verification Status",
	];
	const [modalDisplay, setModalDisplay] = useState(false);
	const [tab, setTab] = useState("basic");
	const { width } = useWindowDimension();
	const dispatch = useDispatch();
	const { isLoading, users } = useSelector((state) => state.users.merchants);
	const { user, merchantDetailsLoading } = useSelector(
		(state) => state.users.merchantDetails
	);

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const paginatedData = paginate(users, currentPage, pageSize);
	const viewDetails = (id) => {
		dispatch(singleMerchant(id));

		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	useEffect(() => {
		dispatch(merchantList());
	}, [dispatch]);

	return (
		<AdminLayout>
			<div className="pt-10 w-11/12 mx-auto pb-20 mt-1">
			<h3 className="lg:py-20  py-10 lg:text-5xl  text-4xl font-semibold mt-1 text-semibold text-black">
					Merchant Management
				</h3>
				{!users ? (
					<div className="h-screen" style={{ marginTop: "-160px" }}>
						<Loader />
					</div>
				) : width >= 780 ? (
					<>
						<Table
							name="merchantMgt"
							thead={thead}
							data={paginatedData}
							viewDetails={viewDetails}
							isExport={true}
						/>

						<Pagination
							items={users.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				) : (
					<>
						{paginatedData.map((item, index) => {
							return (
								<div
									className={` grid grid-cols-2  text-2xl my-8 py-5   ${styles.mobile_table}`}
									key={index}
								>
									<div
										className="py-9 pl-8  shadow-lg font-bold"
										style={{ background: "#F3F3F3" }}
									>
										<ul>
											{thead.map((item, index) =>
												item !== "No" ? <li key={index}>{item}</li> : ""
											)}
										</ul>
									</div>
									<div className="py-9  pl-5 bg-white  shadow-lg ">
										<ul>
											<li>{new Date(item.account.createdAt).toDateString()}</li>
											<li>{item.account.first_name}</li>
											<li>{item.account.last_name}</li>
											<li>{truncateString(item.account.email, 15)}</li>
											<li>{item.auctions.length}</li>
											<li>
												{" "}
												<span
													className={`${
														item.account.verified
															? "text-green-600 "
															: "text-red-600 "
													} text-2xl`}
												>
													{item.account.verified ? "Verified" : "Unverified"}
												</span>
											</li>
											<li onClick={() => viewDetails(item.id)}>
												<Button
													name="View more details"
													paddingY="12px"
													paddingX="12px"
												/>
											</li>
										</ul>
									</div>
								</div>
							);
						})}

						<Pagination
							items={users.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				)}
			</div>

			<Modal
				title="Merchant Information"
				display={modalDisplay}
				close={viewDetails}
			>
				<div className={`${styles.modal} overflow-y-auto`}>
					{!user ? (
						<div className="h-full" style={{ marginTop: "50px" }}>
							<Loader />
						</div>
					) : (
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 justify-around l w-9/12 mx-auto items-center">
								<div>
									<img
										src={user.account.avatar}
										className="rounded-lg h-4/12 mb-7 mx-auto"									/>
								</div>

								<div className="ml-7 lg:text-4xl text-3xl text-center lg:text-left ">
									<h3 className="lg:mb-4 font-semibold text-black capitalize">
										{user.account.last_name} {user.account.first_name}
									</h3>
									<div className="flex items-center lg:mb-20 mb-5 w-4/12 lg:w-full mx-auto">
										{user.account.verified && (
											<>
												<h3 className=" text-green-600 pt-5 mr-4 ">
													Verified{" "}
												</h3>
												<GreenMarker />
											</>
										)}

										{!user.account.verified && (
											<>
												<h3 className="text-red-600 pt-5 mr-4 ">
													Unverified{" "}
												</h3>
											</>
										)}
									</div>
									<div>
										{/* <Link href={`/admin/merchant-wallet/${user.id}`}>
											<Button
												bgColor="#743B96"
												name="Wallet History"
												paddingX="15px"
												paddingY="8px"
												isBoxShadow={true}
												border="none"
												className="mt-3 lg:mt-1 mr-5 "
												
											/>
										</Link> */}
										{user.account.verified && (
											<Button
												bgColor="#EB5757"
												name="Block"
												paddingX="40px"
												paddingY="8px"
												isBoxShadow={true}
												border="none"
												className="mt-3 lg:mt-1 "
											/>
										)}

										{!user.account.verified && (
											<Button
												bgColor="#1A8917"
												name="Verify"
												paddingX="40px"
												paddingY="8px"
												isBoxShadow={true}
												border="none"
												className="mt-3 lg:mt-1 "
												onClick={() =>
													dispatch(
														verifyUser({
															account_id: user.account.id.toString(),
														})
													)
												}
											/>
										)}
									</div>
								</div>
							</div>
							<div
								style={{ backgroundColor: "#F3F3F3" }}
								className=" rounded-3xl w-11/12 mx-auto my-10"
							>
								<div className="w-full border-b border-gray-400">
									<h3 className="pt-10 pl-10 pb-7 text-3xl text-black font-semibold">
										About
									</h3>
								</div>
								<div className="px-20 py-10 flex justify-between lg:justify-evenly lg:w-full w-11/12">
									<div className="lg:text-3xl text-2xl font-semibold  ">
										<p className="w-40 lg:w-full mt-7 lg:mt-10">First name :</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">Last name :</p>
										<p className="w-52 lg:w-full mt-7 lg:mt-10">
											Phone number :
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">Email :</p>
									</div>
									<div className="lg:text-3xl text-2xl -ml-20 ">
										<p className="w-40 lg:w-full mt-7 lg:mt-10 capitalize">
											{user.account.first_name}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10 capitalize">
											{user.account.last_name}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">
											{user.account.phone_number}{" "}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">
											{truncateString(user.account.email, 15)}{" "}
										</p>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</Modal>
		</AdminLayout>
	);
}

export default MerchantMgt;
