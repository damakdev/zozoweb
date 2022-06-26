import { useState } from "react";
import { formatNumber } from "../../utils";
import Button from "../ui/button/";
import styles from "./product-info.module.scss";

export default function ProductInfo({ data }) {
  const [index, setIndex] = useState(0);

  function bidHandler(e) {
    e.preventDefault();
  }

  if (!data) return null;

  return (
    <div className={styles.container}>
      <div className={styles["image-preview"]}>
        <img src={data.images[index].src} alt="product image" />
        <div>
          {data.images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              onClick={() => setIndex(i)}
              className={index === i ? styles.selected : null}
            />
          ))}
        </div>
      </div>
      <div className={styles["product-description"]}>
        <h1>{data.productName}</h1>
        <div className={styles.watchlist}>
          <span>On Auction </span>
          <span>Add to watchlist</span>
        </div>
        <h3>{data.description}</h3>
        <hr />
        <p>
          {" "}
          With each bid, the price goes up ₦0.01 and the timer starts over from
          10 seconds
        </p>
        <div className={styles.price}>
          <span>&#8358;{formatNumber(data.price)}</span>
          <span>00:00:15:54</span>
        </div>
        <form onSubmit={bidHandler}>
          <input type="number" placeholder="Place your amount" />
          <Button>Bid Now</Button>
        </form>
      </div>
      <div className={styles["ongoing-bidders"]}>
        <h3>Ongoing Bidders</h3>
        <ul>
          {data.bidders.map((bidder) => (
            <li key={bidder.name}>
              <img src={bidder.image.src} alt="bidder image" />
              <div>
                <h4>{bidder.name}</h4>
                <h5>&#8358;{formatNumber(bidder.bid)}</h5>
                <p>00:00:36:37</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
