import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useCountdown } from "../../hooks/useCountdown";
import { toast } from "react-toastify";
import { LeftArrow, RightArrow } from "../../public/svg/icons";
import { formatNumber, truncateString } from "../../utils";
import Modal from "../modal/modal";
import Link from "next/link";
import styles from "./products-section.module.scss";

export default function ProductsSection({ title, products }) {
  const [sort, setSort] = useState("popularity");
  const [modalDisplay, setModalDisplay] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <form>
            <label htmlFor="sort">Sort</label>
            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popularity">popularity</option>
              <option value="rating">product rating</option>
              <option value="low to high">low to high</option>
              <option value="high to low">high to low</option>
            </select>
          </form>
          <span>
            <LeftArrow />
          </span>
          <span>
            <RightArrow />
          </span>
        </div>
        {products && (
          <div className={styles.content}>
            {products?.map((product) => (
              <Card
                key={product.product_id}
                product={product}
                openModal={() => setModalDisplay(true)}
              />
            ))}
          </div>
        )}

        {!products && (
          <div className={styles["content-loading"]}>
            {Array(8)
              .fill(null)
              ?.map((_, index) => (
                <div key={index} className={styles.card}>
                  <div></div>
                  <h3></h3>
                  <p></p>
                  <span></span>
                </div>
              ))}
          </div>
        )}
      </div>

      {modalDisplay && (
        <Modal
          display
          close={() => setModalDisplay(false)}
          title="You are not logged in!"
        >
          <div className={styles.login}>
            <p>Log in to continue</p>
            <Link href="/login">
              <a onClick={() => setModalDisplay(false)}>Login</a>
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
}

function Card({ product, openModal }) {
  const [days, hours, minutes, seconds] = useCountdown(
    // product.start_time,
    "2022-05-08T22:38:00.000Z",
    // '2022-05-08T22:39:00.000Z'
    product.end_time
  );

  const { user } = useSelector((state) => state.auth.customer);
  function eventHandler() {
    if (user) {
      return;
    }
    // openModal();
    toast.warning("Login to continue!");
  }

  useEffect(() => {
    console.log("cards");
  }, []);

  return (
    <Link
      href={user ? `/product/${product.id}` : "javascript:void(0)"}
      key={product.id}
    >
      <a onClick={eventHandler} className={styles.card}>
        <img src={product.product.images.main} alt="" />
        <h3>{truncateString(product.product.name, 18)}</h3>
        {!product.ended && (
          <p>
            Ends in: {formatNumber(days)}:{formatNumber(hours)}:
            {formatNumber(minutes)}:{formatNumber(seconds)}
          </p>
        )}
        {product.ended && (
          <p style={{ color: "#cd3737" }}>Ended: 00:00:00:00</p>
        )}
        <span>&#8358;{formatNumber(+product.last_amount)}</span>
        <b>Bid</b>
      </a>
    </Link>
  );
}
