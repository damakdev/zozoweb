import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
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
} from "../../../public/svg/icons";
import styles from "../../../styles/admin/admin-sidebar.module.scss";
function AdminSidebar() {
	const router = useRouter();
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
		{ title: "Bid", icon: <AdminDefault />, url: "/admin/bids" },
		{
			title: "Auction",
			icon: <AdminDefault fill="#D5C4DF" />,
			active: <AdminDefault fill="#743B96" />,
			url: "/admin/event-management",
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
			url: "/merchant/profile",
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
			</ul>
		</div>
	);
}

export default AdminSidebar;
