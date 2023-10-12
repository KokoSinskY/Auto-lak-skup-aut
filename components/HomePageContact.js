import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Link from "next/link";

const HomePageContact = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      xl={props.width}
      lg={props.width}
      md={props.width}
      sm={12}
      mt={isMobile ? 5 : 0}
      mb={isMobile ? 5 : 0}
    >
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
          91- 337 Łódź, ul. Grunwaldzka 33a
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
            fontWeight: 600,
            fontSize: "2em",
          }}
        >
          ?
        </Typography>
      </Grid>
      <Divider variant="middle" />
      <Grid container pl={4} mt={4}>
        <Typography variant="h3" sx={{ mr: 4, lineHeight: 2 }}>
          <Typography variant="h3" component="span">
            Po wjeździe w bramę{" "}
          </Typography>
          <Typography color="primary" variant="h3" component="span">
            w prawo{" "}
          </Typography>
          <Typography variant="h3" component="span">
            do końca.{" "}
          </Typography>
          <Typography variant="h3" component="span">
            Zielone drzwi z napisem Auto-Lak.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePageContact;
