import CustomerLayout from "../components/CustomerLayout";
import Categories from "../components/categories";
import MainSlider from "../components/main-slider";
import styles from "../styles/home.module.scss";
function Home() {
  return (
    <>
      <CustomerLayout>
        <section className={styles.hero}>
          <Categories />
          <MainSlider />
        </section>
      </CustomerLayout>
    </>
  );
}

export default Home;
