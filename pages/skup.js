import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import SkupAutCard from "../components/SkupAutCard";

const Skup = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <MainNav />
      </nav>
      <section>
        <SkupAutCard />
      </section>
    </div>
  );
};

export default Skup;
