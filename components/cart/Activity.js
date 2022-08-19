import Link from "next/link";

import styles from "../../styles/cart.module.scss";
import Image from "next/image";
import greenswitch from "../../assets/greenswitch.svg";
import headphones from "../../assets/headphones.svg";
import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from "react-countdown-circle-timer";
import { useEffect, useState } from "react";
import { formatNumber } from "../../utils";
import { removeCartItem, clearCart } from "../../store/slices/cartSlice";
import Button from "../ui/Button";
import { _getWonBidEvents } from "../../store/slices/eventsSlice";

const Activity = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth.customer);
  const { events, loading } = useSelector((state) => state.events.won);
  useEffect(() => {
    dispatch(_getWonBidEvents(user?.customer.id));
  }, [dispatch]);

  const content = (
    <>
      <div className="flex justify-between py-20">
        <div>
          <p className="text-3xl text-semibold">Won Bids</p>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <div
            className="text-3xl text-semibold"
            // onClick={() => dispatch(clearCart())}
          >
            forfeit Bid
          </div>
        </div>
      </div>

      <div>
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-20">
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

          <tbody>
            {events?.map((item, index) => {
              return (
                <tr key={index} className="text-2xl">
                  <td className="flex items-center">
                    <img
                      src={item.product.images.main}
                      width="100px"
                      height="100px"
                    />
                    <span className="ml-5">{item.product.name}</span>
                  </td>
                  <td>
                    # <span>{Number(item.access_amount).toLocaleString()}</span>
                  </td>
                  <td>
                    #{" "}
                    <span>{Number(item.minimum_amount).toLocaleString()}</span>
                  </td>
                  <td>
                    # <span>{Number(item.last_amount).toLocaleString()}</span>
                  </td>
                  <td> {new Date(item.start_time).toDateString()}</td>
                  <td> {new Date(item.end_time).toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
  return (
    <div className="activity_form w-11/12 mx-auto mt-20">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {events?.length > 0 ? (
            content
          ) : (
            <div className="mt-40">
              {" "}
              <h3 className="text-center mt-20"> No Won Bids</h3>{" "}
              <Link href="/">
                <Button
                  name="Continue Shopping"
                  paddingY="15px"
                  width="90%"
                  className="mt-20 ml-10"
                />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
