import { useState } from "react";

import Table from "../../Table/Table";

function RecentEvents() {
	const thead = [
		"Event name",
		"End date",
		"Start date",
		"No of Registered",
		"Approved Registered",
		"Status",
	];
	const data = [
		{
			name: "Hide & Seek",
			end_date: "05-07-2019",
			start_date: "05-07-2020",
			num_registered: "1298",
			approved: "892383",
			status: "success",
		},
		{
			name: "Hide & Seek",
			end_date: "05-07-2019",
			start_date: "05-07-2020",
			num_registered: "1298",
			approved: "892383",
			status: "pending",
		},
		{
			name: "Hide & Seek",
			end_date: "05-07-2019",
			start_date: "05-07-2020",
			num_registered: "1298",
			approved: "892383",
			status: "closed",
		},
	];
	return (
		<>
			<Table thead={thead} data={data} name="event" />
		</>
	);
}

export default RecentEvents;
