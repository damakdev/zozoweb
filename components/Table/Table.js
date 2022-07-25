import React from "react";
import { Bell, BlackDot, Dots } from "../../public/svg/icons";
import styles from "../Table/table.module.scss";

function Table({ data, thead, name, viewDetails }) {
	let head = thead.map((title, index) => <th key={index}>{title}</th>);

	const status = (status) => {
		switch (status) {
			case "success":
				return <img src="/images/success.svg" alt="success" />;
			case "pending":
				return <img src="/images/pending.svg" alt="pending" />;
			case "closed":
				return <img src="/images/closed.svg" alt="closed" />;
		}
	};

	return (
		<div className={`${styles.table} mx-auto px-3 mb-20`}>
			<table className={`table-auto ${styles.inner}   py-2`}>
				<thead>
					<tr className={styles.header}>
						{/* <th>
							{" "}
							<input type="checkbox" />
						</th> */}
						{head}
					</tr>
				</thead>
				<tbody>
					{name == "item-order" &&
						data.map((item, index) => {
							return (
								<tr key={index}>
									{/* <td>
										<input type="checkbox" />
									</td> */}
									<td>{item.name}</td>
									<td>{item.code}r</td>
									<td>{item.event}</td>
									<td>{item.bidder_name}</td>
									<td>{item.bidder_id}</td>
									<td>{item.date}</td>
									<td
										onClick={viewDetails}
										colSpan="2"
										className="cursor-pointer tracking-widest"
									>
										<Dots />
									</td>
								</tr>
							);
						})}

					{name == "event" &&
						data.map((item, index) => {
							return (
								<tr key={index}>
									{/* <td>
										<input type="checkbox" />
									</td> */}
									<td>{item.name}</td>
									<td>{item.end_date}</td>
									<td>{item.start_date}</td>
									<td>{item.num_registered}</td>
									<td>{item.approved}</td>
									<td>{status(item.status)}</td>
								</tr>
							);
						})}

					{/* ADMIN */}

					{name == "customerMgt" &&
						data.map((item, index) => {
							return (
								<tr key={index}>
									{/* <td>
										<input type="checkbox" />
									</td> */}
									<td>{item.date}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.email}</td>
									<td>{item.status}</td>
									<td
										onClick={viewDetails}
										colSpan="2"
										className="cursor-pointer tracking-widest"
									>
										<Dots />
									</td>
									{/* <td>{status(item.status)}</td> */}
								</tr>
							);
						})}

					{name == "merchantMgt" &&
						data.map((item, index) => {
							return (
								<tr key={index}>
									{/* <td>
										<input type="checkbox" />
									</td> */}
									<td>{item.date}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.phone}</td>
									<td>{item.email}</td>
									<td>{item.status}</td>
									<td
										onClick={viewDetails}
										colSpan="2"
										className="cursor-pointer tracking-widest"
									>
										<Dots />
									</td>
									{/* <td>{status(item.status)}</td> */}
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
