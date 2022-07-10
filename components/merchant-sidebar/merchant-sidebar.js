import { useState } from "react";
import Link from "next/link";

import {
  HomeIcon,
  UsersIcon,
  ReceiptIcon,
  ProfileCircleIcon,
  WalletIcon,
} from "../../public/svg/icons";
import styles from "./merchant-sidebar.module.scss";

export default function MerchantSideBar() {
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    { icon: <HomeIcon />, url: "/" },
    { icon: <UsersIcon />, url: "/" },
    { icon: <ReceiptIcon/>, url: "/" },
    { icon: <HomeIcon />, url: "/" },
    { icon: <WalletIcon />, url: "/" },
    { icon: <HomeIcon />, url: "/" },
    { icon: <ProfileCircleIcon />, url: "/" },
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
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
