import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
} from "../../../public/svg/icons";
import styles from "../../../styles/admin/admin-sidebar.module.scss";
function AdminSidebar() {
	const router = useRouter();
	const links = [
		{ title: "Dashboard", icon: <DashboardIcon />, url: "/admin/dashboard" },
	
		{
			title: "Customer",
			icon: <AdminCustomer />,
			url: "/admin/customer-management",
		},
		{ title: "Merchant", icon: <AdminMerchant />, url: "/admin/merchant-management" },
		{
			title: "Transaction",
			icon: <AdminTransaction />,
			url: "/admin/transaction-report",
		},
		{ title: "Bid", icon: <AdminDefault />, url:"/admin/bids" },
		{ title: "Auction", icon: <AdminDefault />, url: "/admin/event-management" },
		{ title: "CMS", icon: <AdminDefault />, url: "/admin/cms" },
		{ title: "Audit", icon: <AdminDefault />, url: "/admin/audit" },
		{ title: "Wallet", icon: <AdminDefault />, url: "/merchant/profile" },
		{
			title: "Shipping Request",
			icon: <AdminDefault />,
			url: "/admin/shipping",
		},
		{ title: "Cashout Request", icon:<AdminDefault />, url: "/admin/cashout-request" },
		{ title: "User role", icon: <AdminDefault />, url: "/admin/user-management" },
	];
	return (
		<div className={styles.container}>
			<div className={styles.logo}> </div>
			<ul>
				{links.map((item, index) => (
					
					<li
						key={index}
						className="flex items-center  pl-3  pr-10"
						//onClick={() => setActiveLink(index)}
					>
						<Link href={item.url}>
							<a
								className={router.pathname === item.url ? styles.active : null}
							>
								{item.icon}
							</a>
						
					</Link>
						<h3 className=" ml-3 text-white text-2xl">{item.title}</h3>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AdminSidebar;
