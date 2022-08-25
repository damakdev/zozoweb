import styles from "../../styles/cart.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import shoes from "../../assets/shoes.svg";
import star from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { _getCustomerEvents } from "../../store/slices/eventsSlice";
import { useEffect } from "react";

const BidHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.customer);
  const { events } = useSelector((state) => state.events.customer);

  useEffect(() => {
    dispatch(_getCustomerEvents(user.customer.id));
  }, [dispatch]);
  return (
    <div className={`${styles.bid_history} pb-60`}>
      {/* <div className="flex justify-between px-12 mb-12 ">
				<div>
					<ul className="flex gap-20 ">
						<li className={`${styles.grey}`}>Unsettled</li>
						<li className={`${styles.purple}`}>Settled</li>
						<li className={`${styles.grey}`}>All</li>
					</ul>
				</div>
				<div className={`${styles.dates}`}>
					<select name="" id="">
						<option value="">All dates</option>
					</select>
				</div>
			</div> */}

      {/* <hr className="" /> */}

      {events && events.length > 0 && (
        <div>
          <div className="flex gap-6 justify-end  p-10">
            <p>Show only my winning bids</p>
            <span>
              <Image src={greenswitch} />
            </span>
          </div>
          <div className="flex gap-40 px-20 ">
            <div>12 June</div>
            <div className={`${styles.rectangle} flex justify-between`}>
              <div className="text-white">Won</div>
              <div>
                <Image src={star} />
              </div>
            </div>
          </div>
          <div>
            <table className="w-2/3 ml-96 mt-10">
              <thead>
                <tr>
                  <th className="">Items</th>
                  <th className="">Access amount</th>
                  <th className="">Minimum amount</th>
                  <th className="">Final Price</th>
                  <th className="">Started</th>
                  <th className="">Ended</th>
                </tr>
              </thead>

              {events &&
                events.map((item, index) => {
                  return (
                    <tr key={index} className="text-2xl">
                      <td className="flex items-center">
                        <img
                          src={item.bidding_event.product.images.main}
                          width="100px"
                          height="100px"
                        />
                        <span className="ml-5">
                          {item.bidding_event.product.name}
                        </span>
                      </td>
                      <td>
                        #{" "}
                        <span>
                          {Number(
                            item.bidding_event.access_amount
                          ).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        #{" "}
                        <span>
                          {Number(
                            item.bidding_event.minimum_amount
                          ).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        #{" "}
                        <span>
                          {Number(
                            item.bidding_event.last_amount
                          ).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        {" "}
                        {new Date(item.bidding_event.start_time).toDateString()}
                      </td>
                      <td>
                        {" "}
                        {new Date(item.bidding_event.end_time).toDateString()}
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      )}

      {events && events.length < 1 && (
        <p className="justify-center text-center mt-20 ">
          You haven't participated in any Bidding events
        </p>
      )}
    </div>
  );
};

export default BidHistory;
