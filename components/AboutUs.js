import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/Link";

const AboutUs = () => {
  return (
    <Grid
      className="homeBottomBG"
      container
      sx={{
        justifyContent: "space-around",
        py: 3,
      }}
    >
      <Grid container item xl={6} lg={6} md={8} sm={10} mx={2}>
        <Paper elevation={0} className="border" sx={{ p: 4 }}>
          <Box sx={{ display: "flex", p: 2 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                px: 1.5,
                py: 1,
                border: "2px solid #FF6E31",
                backgroundColor: "#FF6E31",
                borderRadius: "30px",
                boxShadow: "4px 4px 15px 0px rgba(66, 68, 90, 1)",
              }}
            >
              O NAS
            </Typography>
          </Box>
          <Box px={2}>
            <Typography variant="h2" component="h3">
              Auto-Lak Skup Aut Łódź
            </Typography>
            <Divider />
          </Box>
          <Box p={2}>
            <Typography variant="h3" component="h4">
              Jesteśmy przedsiębiorstwem z pasją do motoryzacji. Twoje auto ciągle się psuje?
              Jest niesprawne, zmęczone życiem lub rozbite i chcesz się go pozbyć? - Odkupimy
              je. A może Twoje auto jest porysowane, wgniecione, skorodowane lub po stłuczce
              czy wypadku ale nie chcesz go sprzedawać? - Naprawimy je. Specjalizujemy się w
              odkupie wszelkich samochodów. Nie ważne czy jest całe czy nie, jaki ma typ
              nadwozia i stan techniczny. Skontaktuj się z nami, przyjedziemy, wycenimy Twoje
              auto i kupimy je za gotówkę. Ponadto oferujemy kompleksową konserwację
              antykorozyjną podwozia, wymianę progów oraz naprawę samochodu po wypadku z AC
              oraz OC sprawcy.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 2 }}>
            <Link href="/kontakt">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  p: 2,
                  color: "black",
                  border: "2px solid #FF6E31",
                  borderRadius: "30px",
                  backgroundColor: "#FF6E31",
                  boxShadow: "4px 4px 15px 0px rgba(66, 68, 90, 1)",
                }}
              >
                SKONTAKTUJ SIĘ
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
