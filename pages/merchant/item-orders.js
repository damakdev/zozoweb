import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getBidEvents } from "../../store/slices/merchantSlice";
import { toLocaleString, truncateString } from "../../utils";
import { motion } from "framer-motion";
import MerchantLayout from "../../components/MerchantLayout";
import Loader from "../../components/loader";
import Modal from "../../components/modal/modal";
import Image from "next/image";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/Items-order.module.scss";

function ItemOrders() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.merchant);
  const { user } = useSelector((state) => state.auth.merchant);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [wonBid, setWonBid] = useState(null);
  const wonBids = events?.filter((event) => event.winner);

  useEffect(() => {
    dispatch(_getBidEvents(user.merchant.id));
  }, []);

  return (
    <MerchantLayout title="won auctions">
      {!events && <Loader />}
      {events && (
        <div className={styles.container}>
          <div className={styles.header}>
            {/* <div>
            <label htmlFor="status">Status:</label>
            <select
              name="status"
              id="status"
              // value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">all</option>
              <option value="ongoing">ongoing</option>
              <option value="completed">completed</option>
              <option value="upcoming">upcoming</option>
              <option value="canceled">canceled</option>
            </select>
          </div> */}
            <Button onClick={() => setModalDisplay()}>
              <span>+</span> Export Data
            </Button>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Bidder's name</th>
                  <th>Phone No.</th>
                  <th>Item</th>
                  <th>Bid AMount</th>
                  <th>Payment Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {wonBids?.map((wonBid, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      setModalDisplay(true);
                      setWonBid(wonBid);
                    }}
                  >
                    <td onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{`${wonBid.winner.customer.account.first_name} ${wonBid.winner.customer.account.last_name}`}</td>
                    <td>{wonBid.winner.customer.account.phone_number}</td>
                    <td>{truncateString(wonBid.product.name, 15)}</td>
                    <td>&#8358;{wonBid.winner.amount.toLocaleString()}</td>
                    <td>
                      {wonBid.winner.payment_made ? "Completed" : "Pending"}
                    </td>
                    <td>{toLocaleString(wonBid.winner.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal
        title="details"
        display={modalDisplay}
        close={() => setModalDisplay(false)}
        height="50rem"
      >
        <div className={styles["auction-details"]}>
          <div className={styles.description}>
            <div>
              <motion.img
                src={wonBid?.product.images.main}
                alt="product image"
              />
            </div>
            <div>
              <h3>{wonBid?.product.name}</h3>
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <path
                    d="M7.75 12.5V13.75H0.25V12.5H7.75ZM8.11625 0.428711L12.9775 5.28996L12.0938 6.17496L11.4312 5.95371L9.88313 7.49996L13.4187 11.0356L12.535 11.9193L9 8.38371L7.4975 9.88621L7.67437 10.5937L6.79 11.4775L1.92875 6.61621L2.81312 5.73246L3.51937 5.90871L7.45312 1.97559L7.2325 1.31309L8.11625 0.428711Z"
                    fill="#004CE8"
                    fillOpacity="0.69"
                  />
                </svg>
                Won auction
              </span>
              <p>{wonBid?.product.description}</p>
            </div>
          </div>

          <div className={styles["winner-details"]}>
            <div className={styles.header}>
              <h3>Winner Details</h3>
            </div>
            <div className={styles.body}>
              <ul>
                <li>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={wonBid?.winner.customer.account.first_name}
                    readOnly
                  />
                </li>
                <li>
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={wonBid?.winner.customer.account.phone_number}
                    readOnly
                  />
                </li>
                <li>
                  <label>Email:</label>
                  <input
                    type="text"
                    value={wonBid?.winner.customer.account.email}
                    readOnly
                  />
                </li>
                <li>
                  <label>Date:</label>
                  <input
                    type=""
                    value={toLocaleString(wonBid?.winner.updatedAt)}
                    readOnly
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.buttons}>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "1px solid red",
                marginRight: "2rem",
                color: "red",
              }}
            >
              Cancel delivery
            </Button>
            <Button>Complete delivery</Button>
          </div>
        </div>
      </Modal>
    </MerchantLayout>
  );
}

export default ItemOrders;
