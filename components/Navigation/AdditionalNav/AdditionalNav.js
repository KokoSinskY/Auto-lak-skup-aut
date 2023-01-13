import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AdditionalNav = () => {
  return (
    <Grid container sx={{ justifyContent: "space-around", p: 1 }}>
      <Card sx={{ maxWidth: 345, backgroundColor: "#A6BB8D", p: 0.5, marginBottom: 5 }}>
        <CardMedia component="img" height="450" image="/skupImage.webp" alt="car" />
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h1" component="div" sx={{ pb: 3 }}>
            SKUP AUT
          </Typography>
          <Typography variant="h3" component="div">
            Kupimy twój samochód!
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, p: 0.5, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="450"
          image="/blacharstwoImage.webp"
          alt="green iguana"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h2" component="div" sx={{ pt: 1 }}>
            Naprawa
          </Typography>
          <Typography variant="h2" component="div" sx={{ p: 1 }}>
            Aut
          </Typography>
          <Typography variant="h2" component="div">
            Powypadkowych
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AdditionalNav;
