import MerchantNav from "../../components/merchant-nav";
import Slide1 from "../../public/images/slider-image-1.jpg";
import styles from "../../styles/why-zozo.module.scss";

export default function WhyZozo() {
  const list = [
    {
      title: "BE IN CONTROL",
      subtitle: "You determine your price and bidding order",
    },
    {
      title: "SAFE BIDDING",
      subtitle:
        "We provide seller protection through our amiable customer service and our policies",
    },
    {
      title: "24/7 Support",
      subtitle: "No worries as we are here to help you always!",
    },
    {
      title: "HASSLE FREE COMMUNICATION",
      subtitle: "Easy means of communication between you and your customers",
    },
  ];
  return (
    <section className={styles.container}>
      <MerchantNav />
      <div className={styles.main}>
        <div className={styles.zozo}>
          <div>
            <h1>WHY CHOOSE ZOZO.NG?</h1>
            <p>
              E-commerce is an online selling network. This effective way of
              buying allows the customer to create a bulk order online, this,
              therefore, cuts out the hassle and is a quicker and easier
              transaction. Means you don't even need reps to sell your product.
              E-commerce is an online selling network. This effective way of
              buying allows the customer to create a bulk order online, this,
              therefore, cuts out the hassle and is a quicker and easier
              transaction. Means you don't even need reps to sell your product.
              E-commerce is an online selling network. This effective way of
              buying allows the customer to create a bulk order online, this,
              therefore, cuts out the hassle a
            </p>
          </div>
          <div className={styles.video}>
            <img src={Slide1.src} alt="" />
          </div>
        </div>
        <div className={styles.more}>
          <h1>Learn more about ZOZO</h1>
          <div>
            <div>
              <h1>How to register</h1>
              <img src={Slide1.src} alt="" />
            </div>
            <div>
              <h1>How to post a bid</h1>
              <img src={Slide1.src} alt="" />
            </div>
            <div>
              <h1>How to win items</h1>
              <img src={Slide1.src} alt="" />
            </div>
            <div>
              <h1>How to withdraw from wallet</h1>
              <img src={Slide1.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <hr />
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span></span>
              <div>
                <h2>BE IN CONTROL</h2>
                <p>You determine your price and bidding order</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
