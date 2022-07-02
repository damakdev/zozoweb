import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import email from "../assets/email.svg";
import card from "../assets/card.svg";
import item from "../assets/item.svg";
import padlock from "../assets/padlock.svg";
import profile from "../assets/profile.svg";
import flag from "../assets/flag.svg";
import Button from "../components/ui/Button";
import Link from "next/link";

const Checkout = () => {
  return (
    <CustomerLayout>
      <div className="checkout-wrapper bg-white p-20">
        <div className="flex justify-between">
          <div className="">
            <h1>Payment Details</h1>
            <p className="mb-10">
              Enter your personal details to complete your profile
            </p>
            <div className="mb-10 ">
              <span className="mr-10">email address</span>
              <span className={`${styles.email_icon}`}>
                <Image src={email} />
              </span>
              <input
                className={`${styles.email}`}
                type="email"
                placeholder="email address"
              />
            </div>
            <div className="mb-10">
              <span className="mr-12">Card Number</span>
              <span className={`${styles.email_icon}`}>
                <Image src={card} />
              </span>
              <input
                className={`${styles.email}`}
                type="text"
                placeholder="card number"
              />
              <input
                className={`${styles.dm}`}
                type="email"
                datatype="DD MM"
                placeholder="MM/YY"
              />
              <input
                className={`${styles.cvc}`}
                type="text"
                placeholder="cvc"
              />
            </div>
            <div className="mb-10">
              <span className="mr-4">Cardholder Name</span>
              <span className={`${styles.email_icon}`}>
                <Image src={profile} />
              </span>
              <input
                className={`${styles.email}`}
                type="email"
                placeholder="Emmanuel Okorie"
              />
            </div>
            <div className="mb-20">
              <span className="mr-11">Main Address</span>
              <span className={`${styles.email_icon}`}>
                <Image src={flag} />
              </span>
              <input
                className={`${styles.email}`}
                type="text"
                placeholder="Nigeria"
              />
              <input
                className={`${styles.dm}`}
                type="email"
                datatype="DD MM"
                placeholder="MM/YY"
              />
              <input
                className={`${styles.cvc}`}
                type="text"
                placeholder="cvc"
              />
            </div>

            <div className="w-2/3">
              <div className="flex justify-between mb-5 mt-16">
                <div>SUBTOTAL</div>
                <div>N5,000</div>
              </div>

              <div className="flex justify-between">
                <div>SHIPPING EST</div>
                <div>N2,000</div>
              </div>
              <div className={`${styles.text_lg} flex justify-between mt-10`}>
                <div>TOTAL PRICE</div>
                <div>
                  N <span>7000</span>
                </div>
              </div>
              <hr />

              <div className="mt-6">
                <Link href="/checkout">
                  <a>
                    <Button
                      name="PAY TO CONTINUE"
                      paddingY="7px"
                      paddingX="30px"
                      fontSize="14px"
                      width="400px"
                    />
                  </a>
                </Link>
              </div >
              <div className="text-center mt-4">
              <Image src={padlock}/>
              Payments are secure and encrypted
              </div>
            </div>
          </div>
          <div>
            <Image  src={item}/>
            <p className={`${styles.text_lg} text-center`}>Won item</p>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;
