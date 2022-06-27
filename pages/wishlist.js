import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import profile from "../assets/profile.svg";
import QR from "../assets/qr.png";
import plus from "../assets/plus.svg";
import box1 from "./../assets/cartoon.png";

const Wishlist = () => {
  return (
    <CustomerLayout>
      <h1>Default Watchlist</h1>

      <div className="flex justify-end">
        <div className="flex gap-40 bg-white pt-7 w-2/3">
          <div className="flex gap-5">
            <div className="p-6">
              <Image src={profile} alt="" />
            </div>
            <div>
              <p className="text-black">Hello There </p>
              <p className="text-sky-600">Akinpelu Akinkunmi</p>
            </div>
          </div>
          <div className="select">
            <select
              name=""
              id=""
              placeholder="Category"
              className={`${styles.select}`}
            >
              <option value="">Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <div>
          <div className="card bg-white pt-10 px-20">
            <h3 className="text-black">Default Watchlist</h3>
            <span>
              {" "}
              <Image src={plus} /> <Link href="  ">Create a new List</Link>{" "}
            </span>
          </div>
          <div className="card2 bg-white mt-10 pt-10 px-20">
            <h3 className="mb-5 text-black">Zozo mobile App</h3>
            <Image src={QR} width={150} height={150} />
            <p>Scan or Click to Download</p>
          </div>
        </div>
        <div className="w-2/3">
          <div className={` ${styles.cart} bg-white  `}>
            <div className="flex gap-16 mt-20">
              <div>
                <Image src={box1} alt="cart" width={200} height={200} />
              </div>
              <div>
                <h1 className="text-black">Your Zozo Watchlist is empty</h1>
                <p className={`${styles.purple_text} mt-3`}>
                  Bid on today's deals
                </p>
                <div className="flex gap-10 mt-12">
                  <div className="">
                    <Link href="">
                      <Button
                        name="SIGN IN TO YOUR ACCOUNT"
                        paddingY="7px"
                        paddingX="30px"
                        fontSize="14px"
                        width="270px"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <Button
                        name="SIGN UP NOW"
                        paddingY="7px"
                        paddingX="30px"
                        fontSize="14px"
                        bgColor="white"
                        color="black"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Wishlist;
