import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import email from "../assets/email.svg";

const Checkout = () => {
  return (
    <CustomerLayout>
      <div className="checkout-wrapper bg-white">
        <div className="flex">
          <div>
            <h1>Payment Details</h1>
            <p>Enter your personal details to complete your profile</p>
            <div><span className="mr-5">email address</span>  
                <Image src={email}/>
                <input className={`${styles.email}`} type="email" placeholder="email address" />
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;
