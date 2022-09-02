import AdBanner from "./ad-banner";
import Nav from "./Nav";
import Footer from "./Footer";
import useWindowDimension from "../hooks/useWindowDimension";

function CustomerLayout({ children }) {
  const { width } = useWindowDimension();

  return (
    <>
      <AdBanner />
      <Nav />
      <main
        style={{
          marginTop: width >= 540 ? "14.5rem" : "11rem",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1400px",
          padding: width >= 1200 ? "5rem" : width <= 480 ? "1rem" : "3rem",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}

export default CustomerLayout;
