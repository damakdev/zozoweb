import React, { useState } from "react";
import EndedEvents from "../../components/Merchant/Event/EndedEvents";
import RecentEvents from "../../components/Merchant/Event/RecentEvents";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import MerchantLayout from "../../components/MerchantLayout";
import { Plus } from "../../public/svg/icons";
import styles from "../../styles/merchant-events.module.scss";

function Events() {
	const [page, setPage] = useState("recent");
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
								<button className="mr-3">Create Event</button>
							</div>
						</div>
					</div>
                              {page === "recent" ? <RecentEvents /> : <EndedEvents />}
					
				</div>
			</div>
		</MerchantLayout>
	);
}

export default Events;
