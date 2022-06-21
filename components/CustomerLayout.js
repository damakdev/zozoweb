import Nav from "./Nav";
import Footer from "./Footer";

function CustomerLayout({ children }) {
  return (
    <>
      <Nav />
      <main
        style={{ marginTop: "15rem", padding: " 6rem" }}
        className="mx-auto"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default CustomerLayout;
