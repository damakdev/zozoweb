import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import Button from "../../components/ui/Button";
import EndedEvents from "../../components/Merchant/Event/EndedEvents";
import RecentEvents from "../../components/Merchant/Event/RecentEvents";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import MerchantLayout from "../../components/MerchantLayout";
import { Plus } from "../../public/svg/icons";
import styles from "../../styles/merchant-events.module.scss";

function Events() {
	const [page, setPage] = useState("recent");
	const [modalDisplay, setModalDisplay] = useState(false);

	const viewDetails = () => {
		setModalDisplay((modalDisplay) => !modalDisplay);
	};
	return (
		<MerchantLayout>
			<MerchantNav title="Event" />
			<div className={`${styles.container} pb-20`}>
				<ul className={`${styles.sub_nav} flex`}>
					<li
						className={` py-2 ml-10 px-10  mr-20 ${
							page === "recent" ? styles.active_tab : ""
						}  `}
						onClick={() => setPage("recent")}
					>
						Recent events
					</li>
					<li
						className={` py-2 px-10 ${
							page !== "recent" ? styles.active_tab : ""
						}  `}
						onClick={() => setPage("ended")}
					>
						Ended Events
					</li>
				</ul>

				<div>
					<div className="flex justify-between w-11/12 mx-auto mt-20 mb-5">
						<h3 className="opacity-0">recent </h3>
						<div className="flex">
							<div className={styles.Dropdown}>
								<span>Status:</span>
								<select>
									<option>All</option>
								</select>
							</div>

							<div className={styles.createButton}>
								<Plus />
								<button className="mr-3" onClick={viewDetails}>
									Create Event
								</button>
							</div>
						</div>
					</div>
					{page === "recent" ? <RecentEvents /> : <EndedEvents />}
				</div>
				<Modal title="Create Event" display={modalDisplay} close={viewDetails}>
					{/*  */}
					<div className={` ${styles.modal} overflow-y-auto w-9/12 mx-auto`}>
						<form>
							<div className="mb-20">
								<label>
									Title <span>*</span>
								</label>
								<input placeholder="Item name" className="w-full rounded-lg" />
							</div>

							<div className="mb-20 grid grid-cols-3 gap-4">
								<div className="">
									<label>Start Date</label>
									<input
										placeholder="Date"
										type="date"
										className="w-full rounded-lg"
									/>
								</div>

								<div className="">
									<label>Start Time</label>
									<input
										placeholder="Time"
										type="time"
										className="w-full rounded-lg"
									/>
								</div>

								<div className="">
									<label>Duration</label>
									<input placeholder="duration" className="w-full rounded-lg" />
								</div>
							</div>

							<div className="mb-20">
								<label>Model Number </label>
								<input placeholder="number" className="w-full rounded-lg" />
							</div>

							<div className="mb-20 grid grid-cols-3 gap-4">
								<div className="">
									<label>
										Retail Values <span>*</span>{" "}
									</label>
									<input
										placeholder="Retail Values "
										className="w-full rounded-lg"
									/>
								</div>

								<div className="">
									<label>
										Start Bid amount <span>*</span>{" "}
									</label>
									<input
										placeholder="Start Bid amount "
										className="w-full rounded-lg"
									/>
								</div>

								<div className="">
									<label>
										Access Fee <span>*</span>{" "}
									</label>
									<input
										placeholder="Access Fee "
										className="w-full rounded-lg"
									/>
								</div>
							</div>

							<div>
								<label>
									Description <span>*</span>{" "}
								</label>
								<textarea className="w-full"></textarea>
							</div>

							<div className="">
								<label>
									Upload Images <span>*</span>
								</label>
								<input
									type="file"
									placeholder="Access Fee "
									className="w-full rounded-lg"
									multiple
								/>
							</div>

							<div className="mt-10">
								<Button
									bgColor="#743B96"
									name="Complete Delivery"
									paddingX="20px"
									paddingY="8px"
									isBoxShadow={true}
									width="100%"
								/>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		</MerchantLayout>
	);
}

export default Events;
