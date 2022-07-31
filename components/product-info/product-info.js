import { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { motion } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown";
import { formatNumber } from "../../utils";
import {
  getBidEventAccess,
  accessBidEvent,
  bidOnEvent,
} from "../../services/customer";
import { ClipLoader } from "react-spinners";
import OtpInput from "react-otp-input";
import Modal from "../modal/modal";
import Button from "../ui/button/";
import styles from "./product-info.module.scss";

export default function ProductInfo({ data, user, biddingEventId }) {
  const [days, hours, minutes, seconds] = useCountdown(
    // product.start_time,
    "2022-05-08T22:38:00.000Z",
    // '2022-08-08T22:39:00.000Z'
    data?.bidding_event.end_time
  );
  // const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [loadingAccess, setLoadingAccess] = useState(false);
  const [loadingBid, setLoadingBid] = useState(false);
  const [countdown, setCountdown] = useState(false);
  // const [txnReference, setTxnReference] = useState(null);
  const [accessCode, setAccessCode] = useState(null);
  const [eventAccess, setEventAccess] = useState(null);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 750000,
    publicKey: "pk_test_69632545288d812cae292185bebcfb87ca0feded",
  };

  const initializePayment = usePaystackPayment(config);

  async function bidHandler(e) {
    e.preventDefault();
    setLoadingBid(true);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      stake: +amount,
    };
    console.log(body);

    try {
      const response = await bidOnEvent(body);
      console.log(response);
      setLoadingBid(false);
    } catch (error) {
      setLoadingBid(false);
    }

    // return;
    // if (data.access_status === "none") {
    // }

    // if (data.access_status === "none") {
    //   // initializePayment(onSuccess, onClose);
    //   setModalDisplay(true);
    // }
  }

  function initPayment() {
    initializePayment(onSuccess, onClose);
    // setModalDisplay(true);
  }

  async function onSuccess(reference) {
    setLoadingAccess(true);
    console.log(reference);
    // setTxnReference(reference);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      payment_reference: reference.reference,
    };
    try {
      const response = await getBidEventAccess(body);
      setEventAccess(response.data.event_access);
      console.log(response.data.event_access);
      setModalDisplay(false);
      toast.success(response.data.message, {
        autoClose: 7000,
      });
      console.log(response);
      setLoadingAccess(false);
    } catch (error) {
      setLoadingAccess(false);
    }
  }

  function onClose() {
    console.log("closed");
  }

  async function accessEvent() {
    setLoadingAccess(true);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      access_code: eventAccess.access_code || accessCode,
      // access_code: accessCode,
    };
    try {
      const response = await accessBidEvent(body);
      //  setEventAccess(response.data.event_access);
      setAccessGranted(true);
      toast.success(response.data.message, {
        autoClose: 7000,
      });
      console.log(response);
      setLoadingAccess(false);
      setModalDisplay(false);
    } catch (error) {
      setLoadingAccess(false);
      setModalDisplay(false);
    }
  }

  useEffect(() => {
    if (days + hours + minutes + seconds !== 0) setCountdown(true);
  }, [data?.bidding_event]);

  return (
    <>
      <div className={styles.container}>
        {data ? (
          <>
            <div className={styles["image-preview"]}>
              <motion.img
                src={data.bidding_event?.product.images.main}
                alt="product image"
              />
              <div>
                {/* {data.bidding_event?.images.map((image, i) => (
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
              <h1>{data.bidding_event?.product.name}</h1>
              <div className={styles.watchlist}>
                <span>On Auction </span>
                <span>Add to watchlist</span>
              </div>
              <h3>{data.bidding_event?.product.description}</h3>
              <hr />
              <p>
                {" "}
                With each bid, the price goes up ₦0.01 and the timer starts over
                from 10 seconds
              </p>
              <div className={styles.price}>
                <span>
                  &#8358;{formatNumber(+data.bidding_event?.product.price)}
                </span>

                {!data.bidding_event.ended && (
                  <span>
                    {formatNumber(days)}:{formatNumber(hours)}:
                    {formatNumber(minutes)}:{formatNumber(seconds)}
                  </span>
                )}
                {data.bidding_event.ended && (
                  <span style={{ color: "#cd3737" }}>Ended</span>
                )}
              </div>
              <form onSubmit={bidHandler}>
                {/* {data.access_status === "approved" && (
                  <input
                    type="number"
                    placeholder="Place your amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                )} */}
                <input
                  type="number"
                  placeholder="Place your amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button style={{ marginRight: "1rem" }}>
                  {/* {loadingAccess ? (
                    <ClipLoader color="#ffffff" size={15} />
                  ) : data.access_status === "approved" ? (
                    "Bid Now"
                  ) : (
                    "Access Bid"
                  )} */}
                  {loadingBid ? (
                    <ClipLoader color="#ffffff" size={15} />
                  ) : (
                    "Bid Now"
                  )}
                </Button>
                <Button type="button" onClick={initPayment}>
                  {loadingAccess ? (
                    <ClipLoader color="#ffffff" size={15} />
                  ) : (
                    "Access Bid"
                  )}
                </Button>
              </form>
              <Button
                type="button"
                style={{ marginTop: "1rem" }}
                onClick={() => setModalDisplay(true)}
              >
                {loadingAccess ? (
                  <ClipLoader color="#ffffff" size={15} />
                ) : (
                  "Enter Access Code"
                )}
              </Button>
              {/* <Button>
              {loadingAccess ? <ClipLoader color="#ffffff" size={15} /> : "Bid Now"}
            </Button> */}
            </div>
            <div className={styles["ongoing-bidders"]}>
              <h3>Ongoing Bidders</h3>
              <ul>
                {data.bidding_event?.customer_events.map((event, index) => (
                  <li key={index}>
                    <motion.img
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
        ) : (
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

        <Modal
          display={modalDisplay}
          title="Enter access code"
          close={() => {
            setModalDisplay(false);
            setAccessCode(null);
          }}
        >
          <div className={styles["access-code"]}>
            <p>
              An access code has been sent to
              <br />
              your email
            </p>
            <OtpInput
              value={accessCode}
              onChange={(code) => setAccessCode(code)}
              numInputs={4}
              containerStyle={styles.inputs}
              shouldAutoFocus
            />
            <Button onClick={accessEvent}>
              {loadingAccess ? (
                <ClipLoader color="#ffffff" size={15} />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </Modal>
    </>
  );
}
