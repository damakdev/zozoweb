import React ,{useRef}from "react";
import {
	Bell,
	BlackDot,
	Dots,
	FilterIcon,
	ExportIcon,
	DropdownIcon,
} from "../../public/svg/icons";
import { truncateString, convertUtc, formatNumber } from "../../utils";
import searchIcon from "../../assets/search.svg";
import Image from "next/image";
import styles from "../Table/table.module.scss";
import Button from "../ui/Button";
import { DownloadTableExcel } from 'react-export-table-to-excel';
function Table({
	data,
	thead,
	name,
	viewDetails,
	isFilter,
	isExport,
	isSearch,
}) {
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

	const eventStatus = (status) => {
		switch (status) {
			case true:
				return <img src="/images/eventApproved.svg" alt="approved" />;
			case false:
				return <img src="/images/eventDeclined.svg" alt="declined" />;
		}
	};

	const formatAmount = (amount) => {
		return Number(amount).toLocaleString();
	};
	const tableRef = useRef(null);
	return (
		<>
			<div className="flex mb-10 flex-row-reverse mr-20">
				{isExport && (
					 <DownloadTableExcel
					 filename="Zozo information"
					 sheet={name}
					 currentTableRef={tableRef.current}
				   >
					<div className={styles.exportButton}>
						<ExportIcon />
						<button className="mr-3">Export</button>
						{/* <DropdownIcon /> */}
					</div>
					</DownloadTableExcel>
				)}

				{isFilter && (
					<div className={styles.filterButton}>
						<FilterIcon />
						<button>Filter</button>
					</div>
				)}

				{isSearch && (
					<div
						className={`${styles.search} flex  items-center mr-4 align-center`}
					>
						<div>
							<input placeholder="Search" type="text" />
						</div>
						<span>
							{" "}
							<Image src={searchIcon} alt="Search" width={20} />
						</span>
					</div>
				)}
			</div>

			<div className={`${styles.table} mx-auto px-3 mb-20`}>
				<table className={`table-auto ${styles.inner}   py-2`} ref={tableRef}>
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
							data?.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{truncateString(item.product.name, 34)}</td>
										<td>{convertUtc(item.start_time)}</td>
										<td>{convertUtc(item.end_time)}</td>
										<td>&#8358;{formatAmount(item.minimum_amount)}</td>
										<td>{item.customers.length}</td>
										<td>
											{item.ended
												? "Ended"
												: !item.approved
												? "Pending Approval"
												: "In progress"}
										</td>
									</tr>
								);
							})}

						{/* ADMIN */}

						{name == "customerMgt" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td >{item.id}</td>
										<td>{new Date(item.account.createdAt).toDateString()}</td>
										<td>{item.account.first_name}</td>
										<td>{item.account.last_name}</td>
										<td>{item.account.email}</td>
										<td>
											<span
												className={`${
													item.account.verified
														? "text-green-600 "
														: "text-red-600 "
												} text-2xl`}
											>
												{item.account.verified ? "Verified" : "Unverified"}
											</span>
										</td>
										<td
											onClick={() => viewDetails(item.id)}
											colSpan="2"
											className="cursor-pointer tracking-widest"
										>
											<Dots />
										</td>
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
									</tr>
								);
							})}

						{name == "merchantTrans" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{item.date}</td>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.amount}</td>
										<td>{item.description}</td>
										<td>{item.status}</td>
									</tr>
								);
							})}

						{name == "adminBids" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td>{truncateString(item.product.name, 20)}</td>
										<td>{formatAmount(item.access_amount)}</td>
										<td>{formatAmount(item.minimum_amount)}</td>
										<td>{new Date(item.start_time).toDateString()}</td>
										<td>{new Date(item.end_time).toDateString()}</td>
										<td>
											<span
												className={`${
													item.approved ? "text-green-600 " : "text-red-600 "
												} text-2xl`}
											>
												{item.approved ? "Verified" : "Unverified"}
											</span>
										</td>
										<td>
											{item.ended
												? formatAmount(item.last_amount)
												: "Undecided"}
										</td>
										<td>{item.ended ? item.last_amount : "Undecided"}</td>
										<td
											onClick={() => viewDetails(item.id)}
											className="cursor-pointer tracking-widest"
										>
											<Dots />
										</td>
									</tr>
								);
							})}

						{name == "eventMgt" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{item.id}</td>
										<td>{item.product.name.substr(0, 22)}</td>
										<td>{new Date(item.start_time).toDateString()}</td>
										<td>{new Date(item.end_time).toDateString()}</td>
										<td>{item.merchant_name}</td>
										<td>{eventStatus(item.approved)}</td>
										<td>{formatAmount(item.minimum_amount)}</td>
										<td
											onClick={() => viewDetails(item.id)}
											className="cursor-pointer tracking-widest"
										>
											<Dots />
										</td>
									</tr>
								);
							})}

						{name == "audit" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{item.name}</td>
										<td>{item.type}</td>
										<td>{item.timestamp}</td>

										<td>
											<Button
												name={"Upgrade"}
												bgColor="#58BC34"
												color="white"
												border="none"
												paddingY="7px"
												width="100px"
											/>
										</td>
									</tr>
								);
							})}

						{name == "shipping" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{item.item}</td>
										<td>{item.name}</td>
										<td>{item.reciept}</td>
										<td>{eventStatus(item.status)}</td>
									</tr>
								);
							})}

						{name == "cashout" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td>{item.cashout}</td>
										<td>{item.merchant_name}</td>
										<td>{eventStatus(item.status)}</td>
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

						{name == "userMgt" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td className="flex items-center ">
											<img className=" mr-8" src="/images/Photo.png" />
											{item.first}
										</td>
										<td>{item.last}</td>
										<td>{item.email}</td>
										<td>{item.role}</td>
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

						{name == "cms" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										{/* <td>
										<input type="checkbox" />
									</td> */}
										<td className="flex items-center ">{item.id}</td>
										<td>{item.product}</td>
										<td>{item.cate}</td>
										<td>{item.code}</td>
										<td colSpan={3}>
											<Button
												name="Edit"
												paddingX="35px"
												paddingY="7px"
												className="mr-6"
												border="none"
											/>

											<Button
												name="Delete"
												paddingX="35px"
												paddingY="7px"
												bgColor="#EB5757"
												border="none"
											/>
										</td>
										{/* <td>{status(item.status)}</td> */}
									</tr>
								);
							})}

						{name == "adminWallet" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td className="flex items-center ">{item.id}</td>
										<td>{item.name}</td>
										<td>{item.bid}</td>
										<td>{item.value}</td>
										<td>{item.profit}</td>
									</tr>
								);
							})}

						{name == "pendingRequest" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td className="flex items-center ">{item.name}</td>
										<td>{item.amount}</td>
										<td>{item.currentWallet}</td>
										<td>{item.date}</td>
										<td>
											<Button
												name="Grant Withdrawal"
												paddingX="35px"
												paddingY="7px"
												className="mr-6"
												border="none"
												bgColor="#0CBC8B"
											/>
										</td>
										{/* <td>{status(item.status)}</td> */}
									</tr>
								);
							})}

						{name == "grantedRequest" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td className="flex items-center ">{item.name}</td>
										<td>{item.amount}</td>
										<td>{item.currentWallet}</td>
										<td>{item.date}</td>
										<td>{item.dateGranted}</td>
										<td>
											<span className="text-green-600 text-3xl">
												{item.status}
											</span>
										</td>
									</tr>
								);
							})}

						{name == "deniedRequest" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td className="flex items-center ">{item.name}</td>
										<td>{item.amount}</td>
										<td>{item.currentWallet}</td>
										<td>{item.date}</td>
										<td>{item.dateDenied}</td>
										<td>
											<span className="text-red-600 text-3xl">
												{item.status}
											</span>
										</td>
									</tr>
								);
							})}

						{name == "canceledRequest" &&
							data.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td className="flex items-center ">{item.name}</td>
										<td>{item.amount}</td>
										<td>{item.currentWallet}</td>
										<td>{item.date}</td>
										<td>{item.dateCanceled}</td>
										<td>
											<span className="text-violet-600 text-3xl">
												{item.status}
											</span>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Table;
