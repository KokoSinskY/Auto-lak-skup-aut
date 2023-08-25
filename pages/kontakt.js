import Grid from "@mui/material/Grid";
import Header from "../components/Header/Header";
import MainNav from "../components/Navigation/MainNav";
import Map from "../components/Map";
import { Typography } from "@mui/material";
import HomePageContact from "../components/HomePageContact";
import ContactForm from "../components/ContactForm";

const Kontakt = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <MainNav />
      </nav>
      <Grid item container sm={12}>
        <Grid item lg={6} md={6} px={2} sx={{ justifyContent: "center" }}>
          <section>
            <Typography
              variant="h2"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 3,
                fontWeight: "400",
              }}
            >
              Lokalizacja Auto-Lak:
            </Typography>
            <Map width={12} />
            <Grid my={3}>
              <HomePageContact width={12} />
            </Grid>
          </section>
        </Grid>
        <Grid item lg={6} md={6} px={2}>
          <section>
            <ContactForm />
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kontakt;
