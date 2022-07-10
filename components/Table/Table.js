import React from "react";
import { Bell, BlackDot } from "../../public/svg/icons";
import styles from "../Table/table.module.scss";

function Table() {
	const thead = [
		"Name",
		"Item code",
		"Event name",
		"Bidder's name",
		"Bidder's ID",
		"Date",
		"Action",
	].map((title, index) => <th key={index}>{title}</th>);
	return (
		<div className={`${styles.table} mx-auto px-3 mb-20`}>
			<table className={`table-auto ${styles.inner}   py-2`}>
				<thead>
					<tr className={styles.header}>
						<th>
							{" "}
							<input type="checkbox" />
						</th>
						{thead}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{" "}
							<input type="checkbox" />
						</td>
						<td>Iphone 11</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
						<td>Malcolm Lockyer</td>
						<td>
							678995
							{/* <div className={styles.bidderID}>
								<BlackDot /> 678995
							</div> */}
						</td>
						<td>07-08-2019</td>
						<td className="">
							<Bell />
						</td>
					</tr>
					<tr>
						<td>
							{" "}
							<input type="checkbox" />
						</td>
						<td>Iphone 11</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
						<td>Malcolm Lockyer</td>
						<td>678995</td>
						<td>07-08-2019</td>
						<td>
							<Bell />
						</td>
					</tr>
					<tr>
						<td>
							{" "}
							<input type="checkbox" />
						</td>
						<td>Iphone 11</td>
						<td>Malcolm Lockyer</td>
						<td>1961</td>
						<td>Malcolm Lockyer</td>
						<td>678995</td>
						<td>07-08-2019</td>
						<td>
							<Bell />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
