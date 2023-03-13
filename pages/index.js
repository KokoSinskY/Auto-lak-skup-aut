import Grid from "@mui/material/Grid";
import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import AdditionalNav from "../components/Navigation/AdditionalNav/AdditionalNav";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Map from "../components/Map";
import ImageSlider from "../components/ImageSlider";
import HomePageContact from "../components/HomePageContact";
import CarPartsVendors from "../components/CarPartsVendors";

import { Parallax } from "react-parallax";

const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <Parallax bgImage="./backgroundImage.webp" bgImageAlt="background" strength={300}>
          <MainNav />
          <AdditionalNav />
        </Parallax>
      </nav>
      <main>
        <section>
          <AboutUs />
        </section>
        <section>
          <CarPartsVendors />
          <ImageSlider />
        </section>
        <section>
          <Grid container mt={8}>
            <Map />
            <HomePageContact />
          </Grid>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
