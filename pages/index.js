import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import AdditionalNav from "../components/Navigation/AdditionalNav/AdditionalNav";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav className="backgroundImage">
        <MainNav />
        <AdditionalNav />
      </nav>
      <section>
        <AboutUs />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
