import { useState } from "react";
import Link from "next/link";
import Button from "../../components/ui/button/";
import Modal from "../../components/modal/modal";
import ForgotPasswordBanner from "../../public/images/forgot-password-banner.png";
import styles from "../../styles/merchant/forgot-password.module.scss";

export default function Index() {
  const [modalDisplay, setModalDisplay] = useState(false);

  function handleRequest(e) {
    e.preventDefault();
    setModalDisplay((modalDisplay) => !modalDisplay);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            {/* <ForgotPasswordBanner /> */}
            <img src={ForgotPasswordBanner.src} alt="" />
          </div>
          <form onSubmit={handleRequest}>
            <h1>Forgot Password?</h1>
            <p>Don&apos;t worry we will help you out!!</p>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" />
            </div>
            <Button>Request Password Change</Button>
            <span>
              Do you need help? <Link href="/">Contact Support</Link>
            </span>
          </form>
        </div>
      </div>

      <Modal
        display={modalDisplay}
        title="Email Verification"
        close={handleRequest}
      >
        <div className={styles.verification}>
          <p>
            We have sent 4-digit pin to this email
            <br />
            ******den@gmail.com
          </p>
          <div>
            <input type="text" />
          </div>
        </div>
      </Modal>
    </>
  );
}
