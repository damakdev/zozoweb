import { useRouter } from "next/router";
import Link from "next/link";

import Image from "next/image";
import {
	HomeIcon,
	RefreshIcon,
	ReceiptIcon,
	WalletIcon,
	MenuBoardIcon,
	ProfileCircleIcon,
} from "../../public/svg/icons";
import styles from "./merchant-sidebar.module.scss";

export default function MerchantSideBar() {
	const router = useRouter();
	const links = [
		{
			title: "Home",
			icon: <HomeIcon fill="#D5C4DF" />,
			active: <HomeIcon fill="#743B96" />,
			url: "/merchant/dashboard",
		},
		{
			title: "Bio-data",
			icon: <RefreshIcon fill="#D5C4DF"  />,
      active: <RefreshIcon fill="#743B96" />,
			url: "/merchant/dashboard/biodata",
		},
		{
			title: "Orders",
			icon: <ReceiptIcon fill="#D5C4DF" />,
			active: <ReceiptIcon fill="#743B96" />,
			url: "/merchant/item-orders",
		},
		// {
		// 	title: "wallet",
		// 	icon: <WalletIcon fill="#D5C4DF" />,
		// 	active: <WalletIcon fill="#743B96" />,
		// 	url: "/",
		// },
		{
			title: "Events",
			icon: <MenuBoardIcon fill="#D5C4DF" />,
			active: <MenuBoardIcon fill="#743B96" />,
			url: "/merchant/events",
		},
		{
			title: "Profile",
			icon: <ProfileCircleIcon fill="#D5C4DF" />,
			active: <ProfileCircleIcon fill="#743B96" />,
			url: "/merchant/profile",
		},
	];

	return (
		<div className={styles.container}>
			<div className="w-10/12 mx-auto">
				{" "}
				<Image src="/images/adminlogo.png" height={40} width={150} />{" "}
			</div>
			<ul className="w-full mt-20">
				{links.map((item, index) => (
					<>
						<Link href={item.url}>
							<li
								key={index}
								className={`flex items-center  mt-10  cursor-pointer  ${
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
