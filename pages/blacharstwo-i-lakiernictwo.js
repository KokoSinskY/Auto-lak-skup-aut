import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ListComponent from "../components/ListComponent";
import MainNav from "../components/Navigation/MainNav";
import TypeOfCarsWeRepair from "../components/TypeOfCarsWeRepair";
import MyCard from "../components/UI/MyCard";
import Grid from "@mui/material/Grid";

import { Parallax } from "react-parallax";
import data from "../src/data";
import Gallery from "../components/Gallery";

const Blacharstwo_i_lakiernictwo = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Parallax
        bgImage="./blacharstwoMainBackground.webp"
        bgImageAlt="background"
        strength={500}
      >
        <nav>
          <MainNav />
        </nav>
        <section>
          <MyCard
            cardHeader={data[0].carsData[1].cardHeader}
            cardImage={data[0].carsData[1].cardImage}
            cardImageAlt={data[0].carsData[1].cardImageAlt}
            cardContent={data[0].carsData[1].cardContent}
          />
        </section>
      </Parallax>
      <section>
        <TypeOfCarsWeRepair />
      </section>
      <section>
        <Grid container>
          <ListComponent header={"Wykonujemy:"} data={data[0].listOfRepairsData} />
          <Gallery folder={"naprawy"} thumbNailFolder={"thumbnailNaprawy"} />
        </Grid>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blacharstwo_i_lakiernictwo;
