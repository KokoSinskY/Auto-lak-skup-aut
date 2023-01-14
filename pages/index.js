import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import AdditionalNav from "../components/Navigation/AdditionalNav/AdditionalNav";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="backgroundImage">
        <nav>
          <MainNav />
        </nav>
        <AdditionalNav />
        <AboutUs />
      </div>
    </div>
  );
};

export default HomePage;
