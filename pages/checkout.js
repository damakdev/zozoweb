import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import email from "../assets/email.svg";
import card from "../assets/card.svg";

const Checkout = () => {
  return (
    <CustomerLayout>
      <div className="checkout-wrapper bg-white p-20">
        <div className="flex">
          <div className="">
            <h1>Payment Details</h1>
            <p className="mb-10">
              Enter your personal details to complete your profile
            </p>
            <div className="mb-5 ">
              <span className="mr-5">email address</span>
              <span className={`${styles.email_icon}`}>
                <Image src={email} />
              </span>
              <input
                className={`${styles.email}`}
                type="email"
                placeholder="email address"
              />
            </div>
            <div>
              <span className="mr-5">Card Number</span>
              <span className={`${styles.email_icon}`}>
                <Image src={card} />
              </span>
              <input
                className={`${styles.email}`}
                type="email"
                placeholder="email address"
              />
              <input type="date" placeholder="MM/YY"/>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;
