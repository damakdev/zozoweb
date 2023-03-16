import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
	DashboardIcon,
	RefreshIcon,
	ReceiptIcon,
	WalletIcon,
	MenuBoardIcon,
	ProfileCircleIcon,
	AdminCustomer,
	AdminMerchant,
	AdminTransaction,
	AdminDefault,
	LogOutIcon,
} from "../../../public/svg/icons";
import styles from "../../../styles/admin/admin-sidebar.module.scss";
import useWindowDimension from "../../../hooks/useWindowDimension";
function AdminSidebar({ showSidebar }) {
	const router = useRouter();
	const { width } = useWindowDimension();
	const { user } = useSelector((state) => state.auth.admin);
	const links = [
		{
			title: "Dashboard",
			icon: <DashboardIcon fill="#D5C4DF" />,
			active: <DashboardIcon fill="#743B96" />,
			url: "/admin/dashboard",
		},

		{
			title: "Customer",
			icon: <AdminCustomer fill="#D5C4DF" />,
			active: <AdminCustomer fill="#743B96" />,
			url: "/admin/customer-management",
		},
		{
			title: "Merchant",
			icon: <AdminMerchant fill="#D5C4DF" />,
			active: <AdminMerchant fill="#743B96" />,
			url: "/admin/merchant-management",
		},
		{
			title: "Transaction",
			icon: <AdminTransaction fill="#D5C4DF" />,
			active: <AdminTransaction fill="#743B96" />,
			url: "/admin/transaction-report",
		},
		{
			title: "All Auctions",
			icon: <AdminDefault fill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/all-auctions",
		},
		{
			title: "Approved Auctions",
			icon: <AdminDefault fill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/approved-auctions",
		},

		{
			title: "CMS",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/cms",
		},
		{
			title: "Audit",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/audit",
		},
		{
			title: "Wallet",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/wallet",
		},
		{
			title: "Shipping Request",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/shipping",
		},
		{
			title: "Cashout Request",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/cashout-request",
		},
		{
			title: "User role",
			icon: <AdminDefault ill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/user-management",
		},
	];

	return (
		<>
			{width >= 780 && (
				<div className={styles.container}>
					<div className="w-10/12 mx-auto">
						{" "}
						<Image src="/images/adminlogo.png" height={40} width={150} />{" "}
					</div>
					<ul className="w-full mt-10">
						{links.map((item, index) => (
							<>
								<Link href={item.url}>
									<li
										key={index}
										className={`flex items-center   cursor-pointer  ${
											router.pathname == item.url ? styles.active : " "
										}`}
										//onClick={() => setActiveLink(index)}
									>
										<a className="pl-10">
											{router.pathname == item.url ? item.active : item.icon}
										</a>

										<h3 className=" ml-3 text-white text-2xl">{item.title}</h3>
									</li>
								</Link>
							</>
						))}

						{/* <li
							className={`flex items-center   cursor-pointer`}
						>
							<button onClick={() => setModalDisplay(true)}>
								<LogOutIcon />
								<span className=" ml-3 text-white text-2xl">Log out</span>
							</button>
						</li> */}
					</ul>
				</div>
			)}

			{width < 780 && showSidebar && user && (
				<div className={styles.container}>
					<div className="w-10/12 mx-auto">
						<div className="flex justify-around items-center py-6 mb-10">
							<img
								src={user.avatar}
								alt="profile picture"
								width={50}
								style={{ borderRadius: "50%", height: "50px" }}
							/>
							<div>
								<p className="font-semibold capitalize">
									{user.last_name} {user.first_name}
								</p>
								<p>{user.email}</p>
							</div>
						</div>
					</div>
					<ul className="w-full mt-10">
						{links.map((item, index) => (
							<>
								<Link href={item.url}>
									<li
										key={index}
										className={`flex items-center   cursor-pointer  ${
											router.pathname == item.url ? styles.active : " "
										}`}
										//onClick={() => setActiveLink(index)}
									>
										<a className="pl-10">
											{router.pathname == item.url ? item.active : item.icon}
										</a>

										<h3 className=" ml-3  text-2xl">{item.title}</h3>
									</li>
								</Link>
							</>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default AdminSidebar;
