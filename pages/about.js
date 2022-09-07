import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Image from "next/image";
import about1 from "./../assets/about1.svg";
import about2 from "./../assets/about2.png";
import about3 from "./../assets/about3.png";
import styles from "./../styles/About.module.scss";

function About() {
  return (
    <CustomerLayout>
      <div className={` ${styles.about_page} bg-white  `}>
        <div className="flex justify-between w-11/12 mx-auto py-20 px-20">
          <div className={`  mt-20  `}>
            <h1 className="mb-20">About Us</h1>
            <p className="w-9/12 mb-20">
              Zozo is an online bidding platform that aims to bridge the gap
              between buyers and sellers using e-commerce but at a highly
              affordable rate. With Zozo, you get to live your best life,
              purchase high-quality products of international standards and save
              more money by buying at an affordable price. We aim to help
              vendors and buyers have as much interaction and fun as possible,
              and afford "expensive goods" With Zozo, you get to shop for
              luxury, expensive, and all kinds of items by bidding, decide the
              price you want to pay for a particular item, purchase it and have
              it shipped to you without stress Our brand is built based on
              <b> Transparency</b> and <b>Top notch</b> Customer experience to
              make sure that your shopping experience is as stress-free as
              possible.
            </p>

            <div className={` ${styles.first_section} flex  mb-10  `}>
              <div className="mr-20 w-1/4 ">
                <Image src={about2} alt="about" height={350} />
              </div>
              <div className="mr-20 w-1/4 ">
                <Image src={about3} alt="about" height={350} />
              </div>
            </div>
          </div>
          <div className={styles.last_img}>
            <Image src={about1} alt="about" />
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}

export default About;
