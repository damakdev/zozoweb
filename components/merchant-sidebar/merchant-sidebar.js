import { useState } from "react";
import Link from "next/link";

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
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    { title: "home", icon: <HomeIcon />, url: "/merchant/dashboard" },
    {
      title: "bio-data",
      icon: <RefreshIcon />,
      url: "/merchant/dashboard/biodata",
    },
    { title: "orders", icon: <ReceiptIcon />, url: "/merchant/item-orders" },
    { title: "wallet", icon: <WalletIcon />, url: "/" },
    { title: "events", icon: <MenuBoardIcon />, url: "/merchant/events" },
    { title: "profile", icon: <ProfileCircleIcon />, url: "/merchant/profile" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <ul>
        {links.map((item, index) => (
          <li key={index} onClick={() => setActiveLink(index)}>
            <Link href={item.url}>
              <a className={activeLink === index ? styles.active : null}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
