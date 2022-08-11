import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getApprovedBiddingEvents } from "../store/slices/eventsSlice";
import { _getAllCategories } from "../store/slices/categoriesSlice";
import { _getBiddingEventsByStatus } from "../store/slices/eventsSlice";
import {
  getCurrentUser,
  verifyAccount,
  resolveAccountVerification,
} from "../services/customer";
import CustomerLayout from "../components/CustomerLayout";
import Categories from "../components/categories";
import MainSlider from "../components/main-slider";
import VerticalSlider from "../components/vertical-slider";
import OptionsBanner from "../components/options-banner";
import BidInfoCard from "../components/bid-info-card";
import TestimonialCard from "../components/testimonial-card";
import NewsletterCard from "../components/newsletter-card";
import ProductsSection from "../components/products-section";
import AdsSlider from "../components/ads-slider";
import WhyZozo from "../components/why-zozo";
import Slide1 from "../public/images/slider-image-1.jpg";
import styles from "../styles/home.module.scss";

function Home() {
  const dispatch = useDispatch();
  const { biddingEvents } = useSelector((state) => state.events);
  const { biddingEventsStatus } = useSelector((state) => state.events);
  const { categories } = useSelector((state) => state.categories);

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

  const products = Array(8).fill({
    image: Slide1,
    productName: `Yellow Headphones`,
    price: 10000,
    time: "2022-06-28T22:38:00.000Z",
  });

  const testimonials = Array(5).fill({
    image: Slide1,
    username: `Akinpelumi Akinlade`,
    title: `influencer`,
    testimonial: `They’ve always got a lot of super exciting items on auctions and you can win so much more on Zozo by shearing your wins on instagram or facebook also one thing you can count on is that the enjoyment in zozo is nonstop`,
  });

  const ads = Array(5).fill({
    image: Slide1,
    title: `Exciting auctions you should win this week`,
    text: `They've always got a lot of super exciting items on auctions and you can win so much more on Zozo by shearing your wins on instagram or facebook also one thing you can count on is that the enjoyment in zozo is nonstop`,
    cta: `start selling`,
  });

  const whyZozo = Array(5).fill({
    image: Slide1,
    title: `Why Zozo.ng`,
    subtitle: `We are reliable`,
    text: `We come correct in all our dealings. We partner with top, trusted brands to give you high-quality products that offer real value for every penny you spend. No scams. No Counterfeits. Everything here is legit; take our words for it.`,
  });

  useEffect(() => {
    dispatch(_getApprovedBiddingEvents());
    dispatch(_getAllCategories());
  }, []);

  return (
    <>
      <CustomerLayout>
        <section className={styles.hero}>
          <Categories categories={categories} />
          <MainSlider data={mainSlider} />
          <div className={styles["vertical-sliders"]}>
            <VerticalSlider data={verticalSlider} />
            <VerticalSlider data={verticalSlider} />
          </div>
        </section>
        <OptionsBanner />
        <section className={styles.body}>
          <div className={styles.sidebar}>
            <BidInfoCard data={biddingEventsStatus} title="Ongoing Bids" />
            <BidInfoCard data={biddingEventsStatus} title="Upcoming Bids " />
            <BidInfoCard data={biddingEventsStatus} title="Top Bids" />
            <TestimonialCard data={testimonials} />
            <NewsletterCard />
          </div>
          <div className={styles.content}>
            <ProductsSection
              products={biddingEvents}
              title="trending products"
            />
            <ProductsSection
              products={biddingEvents}
              title="wishlist products"
            />
            <AdsSlider data={ads} />
            <WhyZozo data={whyZozo} />
          </div>
        </section>
      </CustomerLayout>
    </>
  );
}

export default Home;
