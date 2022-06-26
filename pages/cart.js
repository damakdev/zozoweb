import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";

const Cart = () => {
  return (
    <CustomerLayout>
      <div className="cart-wrapper flex justify-between gap-10">
        <div className={` ${styles.cart} bg-white w-2/3`}>
          <h1>Your Zozo cart is empty</h1>
          <p>Bid on today's deals</p>
          <div className="flex gap-10">
          <div className="">
            <Link href="">
              <Button
                name="Sign in to your account"
                paddingY="7px"
                paddingX="30px"
                fontSize="14px"
              />
            </Link>
          </div>
          <div>
            <Link href="">
              <Button
                name="Sign Up now"
                paddingY="7px"
                paddingX="30px"
                fontSize="14px"
              />
            </Link>
          </div>
        </div>
        </div>
        <div className="bg-white w-1/3 p-10">
          <h1>Bid Summary</h1>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Cart;
