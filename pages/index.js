import CustomerLayout from "../components/CustomerLayout";
import Categories from "../components/categories";
import MainSlider from "../components/main-slider";
import VerticalSlider from "../components/vertical-slider";
import OptionsBanner from "../components/options-banner";
import BidInfoCard from "../components/bid-info-card";
import TestimonialCard from "../components/testimonial-card";
import NewsletterCard from "../components/newsletter-card";
import Slide1 from "../public/images/slider-image-1.jpg";
import styles from "../styles/home.module.scss";

function Home() {
  const mainSlider = Array(5).fill({
    image: Slide1,
    text: `Bid now, Pay less,
and Save big on
items you love.`,
  });

  const verticalSlider = Array(5).fill({
    image: Slide1,
    text: `Today’s hide and 
seek win.`,
  });

  const products = Array(5).fill({
    image: Slide1,
    productName: `Yellow Headphones`,
    price: 10000,
    time: "2022-06-28T22:38:00.000Z",
  });

  return (
    <>
      <CustomerLayout>
        <section className={styles.hero}>
          <Categories />
          <MainSlider data={mainSlider} />
          <div className={styles["vertical-sliders"]}>
            <VerticalSlider data={verticalSlider} />
            <VerticalSlider data={verticalSlider} />
          </div>
        </section>
        <OptionsBanner />
        <section className={styles.body}>
          <div className={styles.sidebar}>
            <BidInfoCard data={products} title="Ongoing Bids" />
            <BidInfoCard data={products} title="Upcoming Bids " />
            <BidInfoCard data={products} title="Top Bids" />
            <TestimonialCard />
            <NewsletterCard />
          </div>
          <div className={styles.content}></div>
        </section>
      </CustomerLayout>
    </>
  );
}

export default Home;
