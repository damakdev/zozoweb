import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	customerList,
	singleCustomer,
	verifyUser,
} from "../../store/slices/adminSlice/usersSlice";

import Image from "next/image";
import AdminLayout from "../../components/Admin/AdminLayout";
import Modal from "../../components/modal/modal";
import Table from "../../components/Table/Table";
import Button from "../../components/ui/Button";
import styles from "../../styles/admin/customerMgt.module.scss";
import { GreenMarker, VerifiedMarkIcon } from "../../public/svg/icons";

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
	}, [dispatch, user]);

	return (
		<AdminLayout>
			<div className="pt-10 w-11/12 mx-auto pb-20 mt-1">
				<h3 className="py-20 text-5xl font-semibold mt-1 text-semibold text-black">
					Customer Management
				</h3>
				{!isLoading && (
					<Table
						name="customerMgt"
						thead={thead}
						data={users}
						viewDetails={viewDetails}
					/>
				)}
			</div>
			<Modal
				title="Customer Profile"
				display={modalDisplay}
				close={viewDetails}
			>
				{user && (
					<div className={`${styles.modal} overflow-y-auto`}>
						<div className="grid grid-cols-2 justify-around w-9/12 mx-auto items-center">
							<div>
								<img src="/images/pic2.png" className="rounded-lg h-4/12 " />
							</div>

							<div className="ml-7 ">
								<h3 className="text-4xl mb-4 font-semibold text-black">
									{user.account.last_name} {user.account.first_name}
								</h3>
								<div className="flex items-center mb-20">
									{user.account.verified && (
										<>
											<h3 className="text-4xl text-green-600 pt-5 mr-4 ">
												Verified{" "}
											</h3>
											<GreenMarker />
										</>
									)}

									{!user.account.verified && (
										<>
											<h3 className="text-4xl text-red-600 pt-5 mr-4 ">
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
										/>
									)}

									{!user.account.verified && (
										<Button
											bgColor="#1A8917"
											name="Unblock"
											paddingX="40px"
											paddingY="8px"
											isBoxShadow={true}
											border="none"
											onClick={() =>
												dispatch(
													verifyUser({ account_id: user.account.id.toString() })
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
							<div className="px-20 py-10 flex">
								<div>
									<p className="text-3xl my-10">First name :</p>
									<p className="text-3xl my-10">Last name :</p>
									<p className="text-3xl mb-10">Phone number :</p>
									<p className="text-3xl mb-10">Email :</p>
								</div>
								<div className="ml-20 ">
									<p className="text-2xl my-10 pt-1 ">
										{user.account.first_name}
									</p>
									<p className="text-2xl my-10 pt-1">
										{user.account.last_name}
									</p>
									<p className="text-2xl mb-10">{user.account.phone_number} </p>
									<p className="text-2xl mb-10">{user.account.email} </p>
								</div>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</AdminLayout>
	);
}

export default CustomerMgt;
