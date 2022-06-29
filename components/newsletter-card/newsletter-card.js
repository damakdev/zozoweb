import { useState } from "react";
import { Blob } from "../../public/svg/icons";
import Button from "../ui/button/";
import styles from "./newsletter-card.module.scss";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <h1>Newsletter</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          Want to get latest updates on Zozo sign up for free
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button>Subscribe</Button>
      </form>
      <div className={styles.blobs}>
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
      </div>
    </div>
  );
}
