import Header from "./partials/Header";
import Footer from "./partials/Footer";

function Layout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;