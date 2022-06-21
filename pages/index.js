import CustomerLayout from "../components/CustomerLayout";
import Categories from "../components/categories";
import styles from "../styles/home.module.scss";
function Home() {
  return (
    <>
      <CustomerLayout>
        <section className={styles.hero}>
          <Categories />
          <div className={styles.carousel}></div>
        </section>
      </CustomerLayout>
    </>
  );
}

export default Home;
