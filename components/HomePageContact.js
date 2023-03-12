import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Link from "next/Link";

const HomePageContact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xl={6} lg={6} md={6} sm={12} mt={isMobile ? 5 : 0} mb={isMobile ? 5 : 0}>
      <Grid container>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          sx={{
            pl: 4,
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          Dane
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            pl: 1,
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          Kontaktowe
        </Typography>
      </Grid>
      <Divider variant="middle" />
      <Grid container pl={4} pt={5}>
        <LocationOnIcon fontSize="medium" color="primary" sx={{ mr: 0.5 }} />
        <Typography
          variant="h3"
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          Łódź, ul. Grunwaldzka 33a
        </Typography>
      </Grid>
      <Grid container pl={4} pt={5}>
        <PhoneIcon fontSize="medium" color="primary" sx={{ mr: 0.5 }} />
        <Typography
          variant="h3"
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          793 - 308 - 669
        </Typography>
      </Grid>
      <Grid container pl={4} pt={5}>
        <FacebookIcon fontSize="medium" color="primary" sx={{ mr: 0.5 }} />
        <Link
          style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          href="https://www.facebook.com/people/AUTO-LAK/100057200509524/"
        >
          <Typography variant="h3">Facebook</Typography>
        </Link>
      </Grid>
      <Grid container pl={3} mt={6}>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          sx={{
            pl: 1,
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          Jak
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            pl: 1,
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          Dojechać
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          sx={{
            pl: 1,
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          ?
        </Typography>
      </Grid>
      <Divider variant="middle" />
      <Grid container pl={4} mt={4}>
        <Typography variant="h3" gutterBottom={true}>
          Po wjeździe w bramę
        </Typography>
        <Typography variant="h3" color="primary" pl={0.5} pr={0.5} gutterBottom={true}>
          prosto
        </Typography>
        <Typography variant="h3" gutterBottom={true}>
          do końca, następnie w
        </Typography>
        <Typography variant="h3" color="primary" pl={0.5} pr={0.5} gutterBottom={true}>
          prawo.
        </Typography>
        <Typography variant="h3" gutterBottom={true}>
          Na końcu drogi po prawej stronie
        </Typography>
        <Typography variant="h3" color="primary" pl={0.5} pr={0.5} gutterBottom={true}>
          drugi
        </Typography>
        <Typography variant="h3" gutterBottom={true}>
          budynek. Zielone drzwi z napisem Auto-Lak.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePageContact;
