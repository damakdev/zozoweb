import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../../utils";
import { bidOnEvent } from "../../services/customer";
import { ClipLoader } from "react-spinners";
import Button from "../ui/button/";
import styles from "./product-info.module.scss";

export default function ProductInfo({ data, user, biddingEventId }) {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  async function bidHandler(e) {
    setLoading(true);
    e.preventDefault();
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.id.toString(),
      stake: +amount,
    };

    try {
      const response = await bidOnEvent(body);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles["image-preview"]}>
            <img src={data?.product.images.main} alt="product image" />
            <div>
              {/* {data?.images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              onClick={() => setIndex(i)}
              className={index === i ? styles.selected : null}
            />
          ))} */}
            </div>
          </div>
          <div className={styles["product-description"]}>
            <h1>{data?.product.name}</h1>
            <div className={styles.watchlist}>
              <span>On Auction </span>
              <span>Add to watchlist</span>
            </div>
            <h3>{data?.product.description}</h3>
            <hr />
            <p>
              {" "}
              With each bid, the price goes up ₦0.01 and the timer starts over
              from 10 seconds
            </p>
            <div className={styles.price}>
              <span>&#8358;{formatNumber(+data?.product.price)}</span>
              <span>00:00:15:54</span>
            </div>
            <form onSubmit={bidHandler}>
              <input
                type="number"
                placeholder="Place your amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button>
                {loading ? <ClipLoader color="#ffffff" size={15} /> : "Bid Now"}
              </Button>
            </form>
          </div>
          <div className={styles["ongoing-bidders"]}>
            <h3>Ongoing Bidders</h3>
            <ul>
              {data?.customer_events.map((event) => (
                <li key={event.id}>
                  <img
                    src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
                    alt="event image"
                  />
                  <div>
                    <h4>
                      {event.customer.account.first_name}{" "}
                      {event.customer.account.last_name}
                    </h4>
                    <h5>&#8358;{formatNumber(event.stake)}</h5>
                    <p>00:00:36:37</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {!data && (
        <>
          <div className={styles["loading-image-preview"]}>
            <div />
          </div>
          <div className={styles["loading-product-description"]}>
            <h1 />
            <div className={styles.watchlist} />
            <h3 />
            <p />
            <div className={styles.price} />
            <form />
          </div>
          <div className={styles["loading-ongoing-bidders"]} />
        </>
      )}
    </div>
  );
}
