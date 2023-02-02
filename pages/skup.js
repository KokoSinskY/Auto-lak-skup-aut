import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import MyCard from "../components/UI/MyCard";
import data from "../src/data.js";

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
        <MyCard
          cardHeader={data[0].cardHeader}
          cardImage={data[0].cardImage}
          cardImageAlt={data[0].cardImageAlt}
          cardContent={data[0].cardContent}
        />
      </section>
    </div>
  );
};

export default Skup;
