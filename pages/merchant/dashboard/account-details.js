import React, {useState, useEffect} from "react";
import {
  TimerIcon,
  NotificationBellIcon,
  WalletIcon,
  VerifiedMarkIcon, ProgressBar2
} from "../../../public/svg/icons";
import MerchantSideBar from "../../../components/merchant-sidebar";
import Button from "../../../components/ui/button/";
import Modal from "../../../components/modal/modal";
import styles from "../../../styles/merchant/account-details.module.scss";

const biodata = () => {
    const [modalDisplay, setModalDisplay] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      setModalDisplay((modalDisplay) => !modalDisplay);
    }
  return (
    <>
    <section className={styles.container}>
      <MerchantSideBar />
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Account Details</h1>
            <p>Enter your account details for a flawless transaction</p>
          </div>
          <div>
            <div className={styles["profile-info"]}>
                <ProgressBar2/>
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
        <div className="p-20">
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-80 mb-16">
                <span>
                  <span className="ml-3">
                    First Name{" "}
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
                <span>
                  <span className="ml-2">
                    Acc Number{" "}
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
              </div>
              <div className="flex gap-80 mb-16">
                <span>
                  <span className="ml-3">
                    Last Name{" "}
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
                <span>
                  <span className="mr-16">
                    Card Number{" "}
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
              </div>
              <div className="flex gap-80 mb-16">
                <span>
                  <span>
                    Expiry Date{" "}
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
                <span>
                  <span className="ml-20 pl-8">
                    CVV
                    <input type="text" placeholder="Adetola Adedeji" />
                  </span>
                </span>
              </div>
              <div>
              <label htmlFor="">
                <input type="checkbox" />
                Remember for future use only
              </label>
            </div>
            <div className={styles.save}>
              <Button>Save</Button>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>

    <Modal title="success" display={modalDisplay} close={handleSubmit}>
        <div className={styles.success}>
          <p>
          You can click on the button below to <br /> download the orientation guide
          </p>
          <VerifiedMarkIcon />
          <Button>Download Orientation Guide</Button>
        </div>
      </Modal>
  </>
  );
};

export default biodata;
