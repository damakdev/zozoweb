import { useRouter } from "next/router";
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
  const router = useRouter();
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
          <li key={index}>
            <Link href={item.url}>
              <a
                className={router.pathname === item.url ? styles.active : null}
              >
                {item.icon}
                <span className="mt-3">{item.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
