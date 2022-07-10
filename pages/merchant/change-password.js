import { useState } from "react";
import { EyeOn, EyeOff, VerifiedMarkIcon } from "../../public/svg/icons";
import Link from "next/link";
import Logo from "../../components/logo";
import Modal from "../../components/modal/modal";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/change-password.module.scss";

export default function Index() {
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [modalDisplay, setModalDisplay] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setModalDisplay((modalDisplay) => !modalDisplay);
  }

  return (
    <>
      <div className={styles.container}>
        <Logo variant="purple" />
        <form onSubmit={handleSubmit}>
          <h1>Change Password</h1>
          <p>Input your desired password below to create a new password</p>
          <div className={styles["form-group"]}>
            <label htmlFor="password">New password</label>
            <input type={inputType1} id="password" name="password" />
            {inputType1 === "text" ? (
              <EyeOff onClick={() => setInputType1("password")} />
            ) : (
              <EyeOn onClick={() => setInputType1("text")} />
            )}
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Confirm password</label>
            <input type={inputType2} id="password" name="password" />
            {inputType2 === "text" ? (
              <EyeOff onClick={() => setInputType2("password")} />
            ) : (
              <EyeOn onClick={() => setInputType2("text")} />
            )}
          </div>
          <Button>Submit</Button>
          <span>
            Do you need help? <Link href="/">Contact Support</Link>
          </span>
        </form>
      </div>

      <Modal title="success" display={modalDisplay} close={handleSubmit}>
        <div className={styles.success}>
          <p>
            You can now use your new password to log
            <br />
            into your account
          </p>
          <VerifiedMarkIcon />
          <Button>Login</Button>
        </div>
      </Modal>
    </>
  );
}
