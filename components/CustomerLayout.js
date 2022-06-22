import Nav from "./Nav";
import Footer from "./Footer";

function CustomerLayout({ children }) {
  return (
    <>
      <Nav />
      <main style={{ marginTop: "16rem" }}>
        <div className="w-11/12 mx-auto  py-20">{children}</div>
      </main>

      <Footer />
    </>
  );
}

export default CustomerLayout;
