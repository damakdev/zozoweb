import Link from "next/link";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { NotificationBellIcon, TimerIcon } from "../../public/svg/icons";
import styles from "./merchant-header.module.scss";

export default function MerchantHeader({ title }) {
  const { user } = useSelector((state) => state.auth.merchant);

  return (
    <header className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {/* <span>
          <TimerIcon />
          Updated on 6. 7 . 2022
        </span> */}
      </div>
      <div className={styles["profile-info"]}>
        <NotificationBellIcon />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
            width="4rem"
            height="4rem"
            className="mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {/* <motion.img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          /> */}
          <h3>
            {`${user?.first_name} ${user?.last_name}`}
            <Link href="/merchant/profile">
              <a>@{user?.last_name}</a>
            </Link>
          </h3>
        </div>
      </div>
    </header>
  );
}
