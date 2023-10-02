import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const AdditionalNav = () => {
  return (
    <Grid container sx={{ justifyContent: "space-around", p: 4 }}>
      <Link href="/skup">
        <Card
          sx={{
            maxWidth: 380,
            backgroundColor: "rgba(117, 117, 117, 0.5)",
            marginBottom: 5,
            borderRadius: "40px",
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-20px)",
              transition: "0.5s",
            },
          }}
        >
          <CardMedia component="img" height="450" image="/additionalNavSkup.webp" alt="car" />
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              color="primary"
              variant="h2"
              component="div"
              sx={{ pb: 2, fontSize: "2rem" }}
            >
              SKUP AUT
            </Typography>
            <Typography variant="h2" component="div">
              w każdym stanie
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link href="/blacharstwo-i-lakiernictwo">
        <Card
          sx={{
            maxWidth: 380,
            backgroundColor: "rgba(117, 117, 117, 0.5)",
            marginBottom: 5,
            borderRadius: "40px",
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
            <Typography
              color="primary"
              variant="h2"
              component="div"
              sx={{ pb: 2, fontSize: "2rem" }}
            >
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
