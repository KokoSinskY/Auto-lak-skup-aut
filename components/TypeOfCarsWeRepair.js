import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SingleRoundedImage from "./TypeOfCarsWeBuy/SingleRoundedImage";

const TypeOfCarsWeRepair = () => {
  return (
    <Box sx={{ backgroundImage: "url('/typeofcarswebuy.webp')" }}>
      <Grid container sx={{ justifyContent: "center", py: 8 }}>
        <SingleRoundedImage
          src={"/carCircle.webp"}
          alt={"Car circle"}
          content={"Naprawy Blacharskie"}
        />
        <SingleRoundedImage
          src={"/deliveryCarCircle.webp"}
          alt={"Delivery car circle"}
          content={"Lakiernictwo"}
        />
        <SingleRoundedImage
          src={"/offRoadCarCircle.webp"}
          alt={"Off-road car circle"}
          content={"Diagnostyka Komputerowa"}
        />
      </Grid>
    </Box>
  );
};

export default TypeOfCarsWeRepair;
