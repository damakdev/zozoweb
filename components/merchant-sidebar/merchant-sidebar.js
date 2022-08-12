import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logOutMerchant } from "../../store/slices/authSlice";
import { toast } from "react-toastify";
import {
  HomeIcon,
  RefreshIcon,
  ReceiptIcon,
  WalletIcon,
  MenuBoardIcon,
  ProfileCircleIcon,
  LogOutIcon,
} from "../../public/svg/icons";
import Link from "next/link";
import Modal from "../modal";
import Logo from "../logo";
import Button from "../ui/button/button";
import styles from "./merchant-sidebar.module.scss";

export default function MerchantSideBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const links = [
    {
      title: "Home",
      icon: <HomeIcon fill="#D5C4DF" />,
      active: <HomeIcon fill="#743B96" />,
      url: "/merchant/dashboard",
    },
    {
      title: "Bio-data",
      icon: <RefreshIcon fill="#D5C4DF" />,
      active: <RefreshIcon fill="#743B96" />,
      url: "/merchant/dashboard/biodata",
    },
    {
      title: "Orders",
      icon: <ReceiptIcon fill="#D5C4DF" />,
      active: <ReceiptIcon fill="#743B96" />,
      url: "/merchant/item-orders",
    },
    {
      title: "wallet",
      icon: <WalletIcon fill="#D5C4DF" />,
      active: <WalletIcon fill="#743B96" />,
      url: "/merchant/wallet",
    },
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
    <>
      <div className={styles.container}>
        <Logo />

        <ul>
          {links.map((item, index) => (
            <>
              <li
                key={index}
                className={`flex items-center  cursor-pointer  ${
                  router.pathname == item.url ? styles.active : " "
                }`}
              >
                <Link href={item.url}>
                  <a>
                    {router.pathname == item.url ? item.active : item.icon}
                    <h3 className="text-2xl">{item.title}</h3>
                  </a>
                </Link>
              </li>
            </>
          ))}
          <li>
            <button onClick={() => setModalDisplay(true)}>
              <LogOutIcon />
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>
      <Modal
      width="25rem"
      // height="20rem"
        display={modalDisplay}
        title="Confirm logout"
        close={() => setModalDisplay(false)}
      >
        <div className={styles["confirm-logout"]}>
          <p>Are you sure you want to leave</p>
          <div className={styles.buttons}>
            <Button
              onClick={() => {
                dispatch(logOutMerchant());
                toast.success("You are logged out!");
                router.push("/merchant");
              }}
            >
              Yes
            </Button>
            <Button onClick={() => setModalDisplay(false)}>No</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
