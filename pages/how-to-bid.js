import { BulletPoint } from "../public/svg/icons";
import Image from "next/image";
import CustomerLayout from "../components/CustomerLayout";
import FAQ from "./../assets/FAQ.png";
import watermark from "./../assets/watermark.png";
import styles from "../styles/How_To_Bid.module.scss";
import Link from "next/link";

function HowToBid() {
  return (
    <CustomerLayout>
      <div className={` ${styles.container} bg-white w-11/12 m-auto  py-20 `}>
        <div className={styles.watermark}>
          <Image src={watermark} alt="Zozo logo" />
        </div>
        <div className="w-11/12 mx-auto py-20 px-20">
          <div className={styles.first_section}>
            <div className="w-1/2">
              <h1 className="mb-20">How to Bid?</h1>
              <h3>Step 1</h3>
              <p>
                <b>Create an account with Zozo.</b>
                <span className="block">
                  Creating a Zozo account automatically gives you access to
                  various offers and deals that you can Bid on.
                </span>
              </p>

              <h3>Step 2</h3>
              <p>
                <b>Choose an Item you want to Bid on.</b>
                <span className="block">
                  Once you log in, check out the items available for bidding or
                  search a particular item you're interested in and add it to
                  your wish list.
                </span>
              </p>

              <h3>Step 3</h3>
              <p>
                <b>Start Bidding.</b>
                <span className="block">
                  Click on the item you'd like to bid on and start bidding. If
                  you are the last bidder when the time runs out, you win the
                  bid.
                </span>
              </p>

              <h3>Step 4</h3>
              <p>
                <b>Claim your Bid.</b>
                <span className="block">
                  To claim your bid, follow the given instructions to claim your
                  bid, make payments and have it delivered to you.
                </span>
                <span className="block">
                  And just like that, you get to purchase any products of your
                  choice at an affordable price
                </span>
              </p>
              <h2>Start Bidding Now!</h2>
            </div>

            <div>
              <Image src={FAQ} alt="Frequently asked questions" />
            </div>
          </div>

          <div className={`${styles.second_section}  mt-20`}>
            <div className="">
              <h1 className="mb-20">Frequently Asked Questions</h1>

              <h3>How do I know when I win a bid?</h3>
              <p>
                When the countdown on a particular item ends, and you're the
                last person to bid on it, you stand as the winner of that item.
              </p>

              <h3>Is there a win limit on Zozo?</h3>
              <p>
                Yes there is, see the <Link href="/">term of use</Link> page to
                get more information.
              </p>

              <h3>How do I make payments after winning a particular Bid?</h3>
              <p>
                Instructions would be given once you win a bid or go to the
                payment section of the website and follow the instructions
                given.
              </p>

              <h3>How can I improve my bidding chances?</h3>
              <p>
                We have provided a bunch of bidding tips to help you improve
                your bidding chances. Click
                <Link href="/">here</Link>
                to check it out.
              </p>

              <h3>How do I get purchased items shipped to me?</h3>
              <p>
                Once you win a bid, follow the necessary instructions to proceed
                to checkout and fill out the necessary details. Your item would
                be shipped to you in no time.
              </p>
            </div>

            {/* <div className={`${styles.faq_list}`}>
              <ul className="px-10 py-5 ">
                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li> Bidding</li>
                </span>

                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li>Win Limit</li>
                </span>

                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li> Claiming Wins</li>
                </span>

                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li> Purchasing Items</li>
                </span>

                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li> My Account</li>
                </span>
                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li> Bid Transfer</li>
                </span>
                <span className="flex items-center mb-5">
                  <BulletPoint />
                  <li>Our Products</li>
                </span>
                <span className="flex items-center">
                  <BulletPoint />
                  <li>Payments</li>
                </span>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}

export default HowToBid;
