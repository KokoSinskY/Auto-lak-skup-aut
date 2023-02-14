import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ListOfCarsWeBuy from "../components/ListOfCarsWeBuy";
import MainNav from "../components/Navigation/MainNav";
import TypeOfCarsWeBuy from "../components/TypeOfCarsWeBuy/TypeOfCarsWeBuy";
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
          cardHeader={data[0].carsData[0].cardHeader}
          cardImage={data[0].carsData[0].cardImage}
          cardImageAlt={data[0].carsData[0].cardImageAlt}
          cardContent={data[0].carsData[0].cardContent}
        />
        <TypeOfCarsWeBuy />
      </section>
      <section>
        <ListOfCarsWeBuy />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Skup;
