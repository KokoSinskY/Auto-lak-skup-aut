import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/Link";

const AdditionalNav = () => {
  return (
    <Grid container sx={{ justifyContent: "space-around", p: 4 }}>
      <Link href="/skup">
        <Card
          sx={{
            maxWidth: 380,
            backgroundColor: "#FFEBB7",
            p: 0.5,
            marginBottom: 5,
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-20px)",
              transition: "0.5s",
            },
          }}
        >
          <CardMedia component="img" height="450" image="/additionalNavSkup.webp" alt="car" />
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h1" component="div" sx={{ pb: 2 }}>
              SKUP AUT
            </Typography>
            <Typography variant="h3" component="div">
              Kupimy Twój samochód!
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link href="/blacharstwo-i-lakiernictwo">
        <Card
          sx={{
            maxWidth: 380,
            backgroundColor: "#FFEBB7",
            p: 0.5,
            marginBottom: 5,
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-20px)",
              transition: "0.5s",
            },
          }}
        >
          <CardMedia
            component="img"
            height="450"
            image="/blacharstwoImage.webp"
            alt="car painting"
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h2" component="div" sx={{ pb: 2 }}>
              Naprawa aut
            </Typography>
            <Typography variant="h2" component="div">
              powypadkowych
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default AdditionalNav;
