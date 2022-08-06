import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import Table from "../../components/Table/Table";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { adminSingleEvent, getAllEventsList } from "../../services/admin";
import {
	getAllEvents,
	getSingleEvent,
	startBid,
	stopBid,
	cancelBid,
} from "../../store/slices/adminSlice/adminEventSlice";
import { formatNumber } from "../../utils";

function Bids() {
	const [modalDisplay, setModalDisplay] = useState(false);

	const dispatch = useDispatch();
	const { allEvent, isLoading } = useSelector(
		(state) => state.adminEvent.allEvents
	);

	const { singleEventLoading, event } = useSelector(
		(state) => state.adminEvent.singleEvent
	);
	const viewDetails = (id) => {
		dispatch(getSingleEvent(id));
		setModalDisplay((modalDisplay) => !modalDisplay);
	};

	const beginBidEvent = (id) => {
		dispatch(startBid(id));
	};
	const stopBidEvent = (id) => {
		dispatch(stopBid(id));
	};
	const cancelBidEvent = (id) => {
		dispatch(cancelBid(id));
	};
	useEffect(() => {
		dispatch(getAllEvents());
	}, [dispatch]);

	const thead = [
		"No",
		"Product",
		"Start Date",
		"End Date",
		"Merchant name ",
		"Status",
		"Gate fee",
	];
	const data = [
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "approved",
			date: "07-08-2019",
			amount: "3000",
		},
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "declined",
			date: "07-08-2019",
			amount: "3000",
		},
		{
			start_date: "12-03-22",
			event_name: "Adedeji Ade",
			merchant_name: "Tao Tao",
			status: "approved",
			date: "07-08-2019",
			amount: "3000",
		},
	];
	return (
		<AdminLayout>
			<div className="pt-10 pb-20 mt-1" style={{ backgroundColor: "#E5E5E5" }}>
				<h3 className="py-20 text-5xl font-semibold pl-20 mt-1 text-semibold text-black">
					Event Management
				</h3>
				{!isLoading && (
					<Table
						name="eventMgt"
						thead={thead}
						data={allEvent}
						isSearch={true}
						isFilter={true}
						isExport={true}
						viewDetails={viewDetails}
					/>
				)}
			</div>

			<Modal title="Bid Information" display={modalDisplay} close={viewDetails}>
				{event && (
					<div className={` overflow-y-auto`}>
						<div className=" grid grid-cols-2 w-11/12  mx-auto items-center">
							<img
								src={event.product.images.main}
								className="rounded-lg h-4/12  "
							/>

							<div className="ml-10">
								<h3 className="text-4xl mb-10 text-black">
									{event.product.name}
								</h3>

								{event.approved && event.started && !event.canceled && !event.ended && (
									<h3 className="text-green-600 mb-10">Ongoing</h3>
								)}

								{!event.started && (
									<h3 className="text-red-600 mb-10">Not started</h3>
								)}

								{!event.approved && (
									<h3 className="text-red-600 mb-10">Unapproved</h3>
								)}

								{event.canceled && (
									<h3 className="text-red-600 mb-10">Canceled</h3>
								)}

								{event.started && event.ended && (
									<h3 className="text-violet-600 mb-10">Concluded</h3>
								)}

								{event.approved && !event.canceled && event.started && !event.ended && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="CANCEL BID"
										bgColor="#EB5757"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
										onClick={() => cancelBidEvent(event.id)}
									/>
								)}

								{!event.started && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="START BID EVENT"
										bgColor="#1A8917"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
										className="mr-10"
										onClick={() => beginBidEvent(event.id)}
									/>
								)}

								{event.started && !event.canceled && !event.ended && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="STOP BID EVENT"
										bgColor="#743B96"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
										onClick={() => stopBidEvent(event.id)}
										className="ml-10"
									/>
								)}

								{event.approved && !event.started && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="UNAPPROVED"
										bgColor="#EB5757"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
									/>
								)}

								{!event.approved && (
									<Button
										paddingX="2.2rem"
										paddingY="1.2rem"
										name="APPROVED"
										bgColor="#1A8917"
										border="none"
										fontSize="12px"
										isBoxShadow={true}
									/>
								)}
							</div>
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
								<div>
									<p className="text-3xl my-10">Merchant name: :</p>
									<p className="text-3xl mb-10">Product :</p>
									<p className="text-3xl mb-10">Start date :</p>
									<p className="text-3xl mb-10">End date: :</p>
									<p className="text-3xl mb-10">Amount :</p>
									<p className="text-3xl mb-10">Winner :</p>
								</div>
								<div className="ml-20 ">
									<p className="text-2xl my-10 pt-1">Akinpelumi Lade </p>
									<p className="text-2xl mb-10">{event.product.name} </p>
									<p className="text-2xl mb-10">
										{new Date(event.start_time).toDateString()}{" "}
									</p>
									<p className="text-2xl mb-10">
										{new Date(event.end_time).toDateString()}
									</p>
									<p className="text-2xl mb-10">
										{formatNumber(event.access_amount)}{" "}
									</p>
									<p className="text-2xl  mb-10">
										{" "}
										{event.winner ? event.winner : "Undecided"}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</AdminLayout>
	);
}

export default Bids;
