import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import TypeOfCarsWeBuy from "../components/TypeOfCarsWeBuy/TypeOfCarsWeBuy";
import ListComponent from "../components/ListComponent";
import MyCard from "../components/UI/MyCard";

import { Parallax } from "react-parallax";
import data from "../src/data.js";

const Skup = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Parallax bgImage="./skupMainBackground.webp" bgImageAlt="background" strength={500}>
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
        </section>
      </Parallax>
      <section>
        <TypeOfCarsWeBuy />
      </section>
      <section>
        <ListComponent header={"Skupujemy auta:"} data={data[0].listOfCarsWeBuyData} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Skup;
