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
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
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
