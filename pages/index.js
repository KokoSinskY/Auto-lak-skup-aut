import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import AdditionalNav from "../components/Navigation/AdditionalNav/AdditionalNav";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Map from "../components/Map";

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
      <main>
        <section>
          <AboutUs />
        </section>
        <section>
          <Map />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
