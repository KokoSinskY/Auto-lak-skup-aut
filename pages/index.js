import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import AdditionalNav from "../components/Navigation/AdditionalNav/AdditionalNav";

const HomePage = () => {
  return (
    <div className="backgroundImage">
      <header>
        <Header />
      </header>
      <nav>
        <MainNav />
      </nav>
      <section>
        <AdditionalNav />
      </section>
    </div>
  );
};

export default HomePage;
