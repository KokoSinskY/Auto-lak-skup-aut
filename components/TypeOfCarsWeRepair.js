import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SingleRoundedImage from "./TypeOfCarsWeBuy/SingleRoundedImage";

const TypeOfCarsWeRepair = () => {
  return (
    <Box sx={{ backgroundImage: "url('/typeofcarswebuy.webp')" }}>
      <Grid container sx={{ justifyContent: "center", py: 8 }}>
        <SingleRoundedImage
          src={"/sheet-metal-repairs.webp"}
          alt={"Dented car"}
          content={"Naprawy Blacharskie"}
        />
        <SingleRoundedImage
          src={"/auto-painting.webp"}
          alt={"Painted black car"}
          content={"Lakiernictwo"}
        />
        <SingleRoundedImage
          src={"/car_connected_to_laptop.webp"}
          alt={"Car connected to laptop"}
          content={"Diagnostyka Komputerowa"}
        />
      </Grid>
    </Box>
  );
};

export default TypeOfCarsWeRepair;
