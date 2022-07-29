import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import OtpInput from "react-otp-input";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/";
import Modal from "../../components/modal/modal";
import ForgotPasswordBanner from "../../public/images/forgot-password-banner.png";
import styles from "../../styles/merchant/forgot-password.module.scss";

export default function Index() {
  const [pin, setPin] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);
  console.log(pin);

  function handleRequest(e) {
    e.preventDefault();
    setModalDisplay((modalDisplay) => !modalDisplay);
  }

  useEffect(() => {
    if (modalDisplay) {
      const interval = setInterval(() => {
        setModalDisplay(false);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [modalDisplay]);

  return (
    <>
      <div className={styles.container}>
        <Logo />
        <div className={styles.main}>
          <div>
            <img src={ForgotPasswordBanner.src} alt="" />
          </div>
          <form onSubmit={handleRequest}>
            <h1>Forgot Password?</h1>
            <p>Don&apos;t worry we will help you out!!</p>
            <div className={styles["form-group"]}>
              {/* <label htmlFor="email">Email Address</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
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
          <OtpInput
            value={pin}
            onChange={(pin) => setPin(pin)}
            numInputs={4}
            containerStyle={styles.inputs}
            shouldAutoFocus
          />
          <div className={styles.countdown}>
            <CountdownCircleTimer
              isPlaying
              size={55}
              strokeWidth={2}
              duration={5}
              colors="#743b96"
            >
              {({ remainingTime }) => `${remainingTime}s`}
            </CountdownCircleTimer>
          </div>
          <button>Resend verification link</button>
        </div>
      </Modal>
    </>
  );
}
