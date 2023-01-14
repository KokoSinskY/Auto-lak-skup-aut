import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/Link";
import Image from "next/Image";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container sx={{ justifyContent: "space-around", py: 3 }}>
      {isMobile ? (
        <Grid container item sx={{ flexDirection: "column" }}>
          <Paper elevation={4} sx={{ p: 4 }}>
            <Box p={2}>
              <Typography variant="h2" component="h2">
                O NAS
              </Typography>
            </Box>
            <Box p={2}>
              <Typography variant="h3" component="h3">
                Auto-Lak Skup Aut Łódź
              </Typography>
            </Box>
            <Box p={2}>
              <Typography variant="h4" component="h4">
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
            <Link href="/kontakt">
              <Box p={2}>
                <Typography variant="h2" component="h2" sx={{ color: "black" }}>
                  SKONTAKTUJ SIĘ
                </Typography>
              </Box>
            </Link>
          </Paper>
        </Grid>
      ) : (
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Grid container item xl={4} lg={4} md={4} sx={{ flexDirection: "column" }}>
            <Paper elevation={4} sx={{ p: 4 }}>
              <Box p={2}>
                <Typography variant="h2" component="h2">
                  O NAS
                </Typography>
              </Box>
              <Box p={2}>
                <Typography variant="h3" component="h3">
                  Auto-Lak Skup Aut Łódź
                </Typography>
              </Box>
              <Box p={2}>
                <Typography variant="h4" component="h4">
                  Jesteśmy przedsiębiorstwem z pasją do motoryzacji. Twoje auto ciągle się
                  psuje? Jest niesprawne, zmęczone życiem lub rozbite i chcesz się go pozbyć? -
                  Odkupimy je. A może Twoje auto jest porysowane, wgniecione, skorodowane lub
                  po stłuczce czy wypadku ale nie chcesz go sprzedawać? - Naprawimy je.
                  Specjalizujemy się w odkupie wszelkich samochodów. Nie ważne czy jest całe
                  czy nie, jaki ma typ nadwozia i stan techniczny. Skontaktuj się z nami,
                  przyjedziemy, wycenimy Twoje auto i kupimy je za gotówkę. Ponadto oferujemy
                  kompleksową konserwację antykorozyjną podwozia, wymianę progów oraz naprawę
                  samochodu po wypadku z AC oraz OC sprawcy.
                </Typography>
              </Box>
              <Link href="/kontakt">
                <Box p={2}>
                  <Typography variant="h2" component="h2" sx={{ color: "black" }}>
                    SKONTAKTUJ SIĘ
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid container item xl={4} lg={4} md={4} sm={10} sx={{ justifyContent: "center" }}>
            <Image
              src="/aboutUsImage.webp"
              alt="About Us"
              width={340}
              height={500}
              priority={true}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default AboutUs;
