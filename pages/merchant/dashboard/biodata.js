import React from "react";
import Link from "next/link";
import {
  TimerIcon,
  NotificationBellIcon,
  WalletIcon,
  ProgressBar,
} from "../../../public/svg/icons";
import MerchantSideBar from "../../../components/merchant-sidebar";
import Button from "../../../components/ui/button/";
import styles from "../../../styles/merchant/biodata.module.scss";

const BioData = () => {
  return (
    <section className={`${styles.container} bg-white`}>
      <MerchantSideBar />
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>BioData</h1>
            <p>
              Enter personal information required for identification. Fields
              marked * are compulsory
            </p>
            <p>It will take 24hours before your account can be validated*</p>
          </div>
          <div>
            <div className={styles["profile-info"]}>
              <ProgressBar />
              <NotificationBellIcon />
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/e3f4/cd54/1e2dd8e0e7156a94e9ba564bddfff442?Expires=1658707200&Signature=hJi8OrjZc1iKoVfLfLizMSAqq1BtY~oYRjErGNoZeslB9FXOj2E1U0ydj0P~ndYtOHatpa9Dp3OkyEKh8G2MrZfsT1QSXAXR-Ywo9Alu1ZkhrpZIZXxOM8ndDYgL~Wog2TOp5GpCD8VYTvRSa8cIZosgtpDtlmQjz~HyamPHBi9LRNlJPYY1ufFYGe5W~L1UDYEIGZJfevYsEnTXT-wRddXRehcL4HWLRXaS0CuFogbqA-DukCvnZRRVP66KZ8oPPnAfVD~k74q4OwiTnUzr4v2Rb18~QzDCu9CXSQNowBIcix2L0qY5NaQZ0mpCMp-lYaCwvoanZTDMkUOcrdNApg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h3>
                  Akinpelumi Akinlade
                  <span>@akinlade</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className={styles.form}>
            <form action="">
              <h3 className="mb-20">Personal Information</h3>
              <div className="flex gap-10">
                <span>
                  <p>First Name</p>
                  <input type="text" name="" id="" placeholder="Adetola" />
                </span>

                <span>
                  <p>Last Name</p>
                  <input type="text" name="" id="" />
                </span>
                <span>
                  <p>Date of Birth</p>
                  <input type="date" name="" id="" />
                </span>
              </div>

              <div className="flex gap-10 mt-10">
                <span>
                  <p>Gender</p>
                  <input type="text" name="" id="" placeholder="Adetola" />
                </span>

                <span>
                  <p>NIN</p>
                  <input type="text" name="" id="" />
                </span>
                <span>
                  <p>Phone Number</p>
                  <input type="text" name="" id="" />
                </span>
              </div>
              <h3 className="mt-20">Address Information</h3>
              <div className="flex gap-10 mt-10">
                <span>
                  <p>Street Number</p>
                  <input type="text" name="" id="" placeholder="Adetola" />
                </span>

                <span>
                  <p>State</p>
                  <input type="text" name="" id="" />
                </span>
                <span>
                  <p>City</p>
                  <input type="text" name="" id="" />
                </span>
              </div>
              <p className="mt-10">Closest Landmark</p>
              <input type="text" />
            </form>
            <div className={styles.submit}>
              <Link href="/merchant/dashboard/account-details">
                <Button>Submit</Button>
              </Link>
            </div>
          </div>
          <div className="pr-20">
            <div className={styles.card1}>
              <div className={styles.svg}>
                <NotificationBellIcon />
              </div>
              <p>
                Please type carefully and fill out the form with corporate’s
                personal details.It will take 24 hours to verify your account
              </p>
            </div>
            <div className={styles.card2}>
              <div className={styles.svg}>
                {" "}
                <WalletIcon />{" "}
              </div>
              <p>Proof of Address:Acceptable format;</p>
              <ol type="1">
                <li>
                  1. Note at any point in time. you can always save and continue
                  later{" "}
                </li>
                <li>
                  2. Note at any point in time. you can always save and continue
                  later{" "}
                </li>
                <li>
                  3. Note at any point in time. you can always save and continue
                  later{" "}
                </li>
                <li>
                  4. Note at any point in time. you can always save and continue
                  later{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioData;
