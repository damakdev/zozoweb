import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
	adminSingleEvent,
	getAllApprovedEventsList,
	getAllEventsList,
} from "../../services/admin";
import {
	getAllApprovedEvents,
	getAllEvents,
	getSingleEvent,
} from "../../store/slices/adminSlice/adminEventSlice";
import Pagination from "../../components/Pagination";
import { formatNumber, paginate, truncateString } from "../../utils";
import Loader from "../../components/loader";
import useWindowDimension from "../../hooks/useWindowDimension";
import styles from "../../styles/admin/customerMgt.module.scss";
import Button from "../../components/ui/Button";
import { ExclamationIcon } from "../../public/svg/icons";

function ApprovedBids() {
	const [modalDisplay, setModalDisplay] = useState(false);
	const { width } = useWindowDimension();
	const dispatch = useDispatch();
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);

	const { singleEventLoading, event } = useSelector(
		(state) => state.adminEvent.singleEvent
	);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const viewDetails = (id) => {
		dispatch(getSingleEvent(id));
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	useEffect(() => {
		dispatch(getAllApprovedEvents());
	}, [dispatch]);

	const thead = [
		"No",
		"Product",
		"Gate fee",
		"Min Bid",
		"Start time",
		"End Time",
		"Approved",
		"Final Price",
		"Winners",
	];

	const paginatedData = paginate(allEvent, currentPage, pageSize);

	return (
		<AdminLayout>
			<div
				className="pt-10 pb-20 w-11/12 mx-auto mt-1"
				style={{ backgroundColor: "#E5E5E5" }}
			>
				<h3 className="py-20 text-5xl font-semibold  mt-1 text-semibold text-black">
					Approved Bids
				</h3>

				{isLoading && (
					<div className="h-screen" style={{ marginTop: "-160px" }}>
						<Loader />
					</div>
				)}

				{paginatedData.length < 1 && (
					<div className=" h-screen">
						<div
							className="flex justify-center mt-20 text-2xl lg:text-4xl items-center"
							style={{ color: "#743B96", marginTop: "120px" }}
						>
							<ExclamationIcon width="35" />
							<span className="pl-5">No Auctions</span>
						</div>
					</div>
				)}

				{paginatedData.length > 0 && width >= 780 && (
					<>
						<Table
							name="allAuctions"
							thead={thead}
							data={paginatedData}
							isSearch={true}
							isFilter={true}
							isExport={true}
							viewDetails={viewBidModal}
						/>

						<Pagination
							items={allEvent.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				)}

				{paginatedData.length > 0 && width < 780 && (
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
											<li>{truncateString(item.product.name, 20)}</li>
											<li>{formatNumber(item.access_amount)}</li>
											<li>{formatNumber(item.minimum_amount)}</li>
											<li>{new Date(item.start_time).toDateString()}</li>
											<li>{new Date(item.end_time).toDateString()}</li>
											<li>
												<span
													className={`${
														item.approved ? "text-green-600 " : "text-red-600 "
													} text-2xl`}
												>
													{item.approved ? "Verified" : "Unverified"}
												</span>
											</li>
											<li>
												{item.ended
													? formatNumber(item.last_amount)
													: "Undecided"}
											</li>
											<li>{item.ended ? item.last_amount : "Undecided"}</li>
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
							items={allEvent.length}
							currentPage={currentPage}
							onPageChange={handlePageChange}
							pageSize={pageSize}
						/>
					</>
				)}
			</div>

			<Modal
				title="Bid Information"
				display={modalDisplay}
				close={viewDetails}
				height="500px"
			>
				<div className={` overflow-y-auto w-full`}>
					{!event ? (
						<div className="" style={{ marginTop: "25%" }}>
							<Loader />
						</div>
					) : (
						<>
							<div className=" flex justify-center  items-center ">
								<img
									src={event.product.images.main}
									className="rounded-lg w-3/12 "
								/>
							</div>
							<div
								style={{ backgroundColor: "#F3F3F3" }}
								className=" rounded-3xl w-11/12 mx-auto my-10 text-black"
							>
								<div className="w-full border-b border-gray-400 ">
									<h3 className="pt-10 pl-10 pb-7 text-3xl text-black">
										Basic Information
									</h3>
								</div>
								<div className="px-20 py-10 flex">
									<div className="font-semibold text-2xl">
										<p className=" w-48 lg:w-full mt-7 lg:mt-10">
											Product name:{" "}
										</p>
										<p className=" w-48 lg:w-full mt-7 lg:mt-10">
											Minimum Bid:{" "}
										</p>
										<p className=" w-52 lg:w-full mt-7 lg:mt-10">
											Merchant name:{" "}
										</p>
										<p className=" w-48 lg:w-full mt-7 lg:mt-10">
											Phone number :
										</p>
										<p className=" w-48 lg:w-full mt-7 lg:mt-10">Email :</p>
										{event.winner && (
											<>
												<p className=" w-48 lg:w-full mt-7 lg:mt-10">
													Winner:{" "}
												</p>
												<p className=" w-52 lg:w-full mt-7 lg:mt-10">
													Phone number:{" "}
												</p>
												<p className=" w-48 lg:w-full mt-7 lg:mt-10">
													Final Bid:{" "}
												</p>
												<p className=" w-52 lg:w-full mt-7 lg:mt-10">
													Payment made:{" "}
												</p>
											</>
										)}
									</div>
									<div className=" ml-5 text-2xl">
										<p className="w-52 lg:w-full mt-7 lg:mt-10">
											{event.product.name}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">
											{formatNumber(event.minimum_amount)}
										</p>
										<p className="w-52 lg:w-full mt-7 lg:mt-10">
											Akinpelumi Lade{" "}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">
											0903747665155{" "}
										</p>
										<p className="w-40 lg:w-full mt-7 lg:mt-10">
											taotao@gmail.com{" "}
										</p>
										{event.winner && (
											<>
												<p className="w-60 lg:w-full mt-7 lg:mt-10">
													{`${event.winner.customer.account.last_name} ${event.winner.customer.account.first_name} `}{" "}
												</p>
												<p className="w-40 lg:w-full mt-7 lg:mt-10">
													{event.winner.customer.account.phone_number}
												</p>
												<p className="w-40 lg:w-full mt-7 lg:mt-10">
													{formatNumber(event.winner.amount)}{" "}
												</p>

												<p className="w-48 lg:w-full mt-7 lg:mt-10">
													{event.winner.payment_made ? "Yes" : "No"}
												</p>
											</>
										)}
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

export default ApprovedBids;
ApprovedBids.requireAdminAuth = true;
