import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SingleRoundedImage from "./SingleRoundedImage";

const TypeOfCarsWeBuy = () => {
  return (
    <Box sx={{ backgroundImage: "url('/typeofcarswebuy.webp')" }}>
      <Grid container p={6}>
        <Typography variant="h1" component="h2" color="primary">
          Skupujemy auta...
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center", py: 6 }}>
        <SingleRoundedImage src={"/carCircle.webp"} alt={"Car circle"} content={"Osobowe"} />
        <SingleRoundedImage
          src={"/deliverycarCircle.webp"}
          alt={"Delivery car circle"}
          content={"Dostawcze"}
        />
        <SingleRoundedImage
          src={"/offRoadCarCircle.webp"}
          alt={"Off-road car circle"}
          content={"Terenowe"}
        />
      </Grid>
      <Grid container sx={{ justifyContent: "flex-end", p: 6 }}>
        <Typography variant="h1" component="h2" color="primary">
          ...w każdym stanie.
        </Typography>
      </Grid>
    </Box>
  );
};

export default TypeOfCarsWeBuy;
