import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	customerList,
	singleCustomer,
	verifyUser,
} from "../../store/slices/adminSlice/usersSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import AdminLayout from "../../components/Admin/AdminLayout";
import Modal from "../../components/modal/modal";
import Table from "../../components/Table/Table";
import Button from "../../components/ui/Button";
import styles from "../../styles/admin/customerMgt.module.scss";
import {
	ExclamationIcon,
	GreenMarker,
	VerifiedMarkIcon,
} from "../../public/svg/icons";
import Pagination from "../../components/Pagination";
import { paginate, truncateString } from "../../utils";
import Loader from "../../components/loader";
import useWindowDimension from "../../hooks/useWindowDimension";

function CustomerMgt() {
	const thead = [
		"No",
		"Date Created",
		"First name",
		"Last name",
		"Email",
		"Verification Status",
	];
	const [modalDisplay, setModalDisplay] = useState(false);
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const { width } = useWindowDimension();
	const pageSize = 10;
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const dispatch = useDispatch();
	const { isLoading, users } = useSelector((state) => state.users.customers);
	const { user, customerDetailsLoading } = useSelector(
		(state) => state.users.customerDetails
	);

	const viewDetails = (id) => {
		dispatch(singleCustomer(id));
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	useEffect(() => {
		dispatch(customerList());
	}, [dispatch]);

	const paginatedData = paginate(users, currentPage, pageSize);

	return (
		<AdminLayout>
			<div className="pt-10 w-11/12 mx-auto pb-20 mt-1  h-full">
				<h3 className="lg:py-20  py-10 lg:text-5xl  text-4xl font-semibold mt-1 text-semibold text-black text-center lg:text-left md:text-left">
					Customer Management
				</h3>
				{paginatedData && users.length < 1 && (
					<div className=" h-screen">
						<div
							className="flex justify-center mt-20 text-2xl lg:text-4xl items-center"
							style={{ color: "#743B96", marginTop: "120px" }}
						>
							<ExclamationIcon width="35" />
							<span className="pl-5">No Registered Customer</span>
						</div>
					</div>
				)}

				{customerDetailsLoading && (
					<div className="h-screen" style={{ marginTop: "-160px" }}>
						<Loader />
					</div>
				)}

				{paginatedData && users.length > 1 && width >= 780 && (
					<>
						<Table
							name="customerMgt"
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
				)}

				{paginatedData && users.length > 1 && width < 780 && (
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
													paddingY="10px"
													paddingX="10px"
													fontSize="12px"
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
				title="Customer Profile"
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
										className="rounded-lg h-4/12 mb-7 mx-auto"
									/>{" "}
								</div>

								<div className="ml-7 lg:text-4xl text-3xl text-center lg:text-left">
									<h3 className=" lg:mb-4 font-semibold text-black capitalize">
										{user.account.last_name} {user.account.first_name}
									</h3>
									<div className="flex items-center lg:mb-20 mb-5 w-4/12 lg:w-full mx-auto ">
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
												<h3 className=" text-green-600 pt-5 mr-4 ">
													Unverified{" "}
												</h3>
											</>
										)}
									</div>
									<div>
										{user.account.verified && (
											<Button
												bgColor="#EB5757"
												name="Block"
												paddingX="40px"
												paddingY="8px"
												isBoxShadow={true}
												border="none"
												className="mt-3 lg:mt-1"
											/>
										)}

										{!user.account.verified && (
											<Button
												bgColor="#1A8917"
												name="Verify	"
												paddingX="40px"
												paddingY="8px"
												isBoxShadow={true}
												border="none"
												className="mt-3 lg:mt-1"
												onClick={() => {
													dispatch(
														verifyUser({
															account_id: user.account.id.toString(),
														})
													);

													router.reload(window.location.pathname);
												}}
											/>
										)}
									</div>
								</div>
							</div>
							<div
								style={{ backgroundColor: "#F3F3F3" }}
								className=" rounded-3xl lg:w-11/12 mx-auto my-10"
							>
								<div className="w-full border-b border-gray-400">
									<h3 className="pt-10 pl-10 pb-7 text-3xl text-black font-semibold">
										About
									</h3>
								</div>
								<div className="px-20 py-10 flex justify-between lg:justify-evenly lg:w-full w-10/12">
									<div className="lg:text-3xl text-2xl font-semibold  ">
										<p className="w-40 lg:w-full mt-7 lg:mt-10">First name :</p>
										<p className=" w-40 lg:w-full mt-7 lg:mt-10">Last name :</p>
										<p className=" w-52 lg:w-full mt-7 lg:mt-10">
											Phone number :
										</p>
										<p className=" w-40 lg:w-full mt-7 lg:mt-10">Email :</p>
									</div>
									<div className="lg:text-3xl text-2xl -ml-20">
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
											{user.account.email}{" "}
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

export default CustomerMgt;
CustomerMgt.requireAdminAuth = true;
