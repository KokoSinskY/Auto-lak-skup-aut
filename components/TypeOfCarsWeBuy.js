import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/Image";

const TypeOfCarsWeBuy = () => {
  return (
    <Box sx={{ backgroundImage: "url('/typeofcarswebuy.webp')" }}>
      <Grid container p={6}>
        <Typography variant="h1" component="h2" color="primary">
          Skupujemy auta...
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center", py: 6 }}>
        <Grid item container lg={4} md={4} sm={10} sx={{ justifyContent: "center" }}>
          <Grid>
            <Image
              src="/carCircle.webp"
              alt="Car circle"
              width={300}
              height={300}
              object-fit="cover"
              quality={100}
              className="carCircle"
            />
          </Grid>
          <Grid
            container
            sx={{
              justifyContent: "center",
              pt: 2,
              pb: 8,
            }}
          >
            <Typography
              variant="h2"
              component="h3"
              color="primary"
              sx={{ border: "2px solid white", borderRadius: "20px", p: 2 }}
            >
              Osobowe
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg={4} md={4} sm={10} sx={{ justifyContent: "center" }}>
          <Grid>
            <Image
              src="/deliveryCarCircle.webp"
              alt="delivery car circle"
              width={300}
              height={300}
              object-fit="cover"
              className="carCircle"
            />
          </Grid>
          <Grid container sx={{ justifyContent: "center", pt: 2, pb: 8 }}>
            <Typography
              variant="h2"
              component="h3"
              color="primary"
              sx={{ border: "2px solid white", borderRadius: "20px", p: 2 }}
            >
              Dostawcze
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg={4} md={4} sm={10} sx={{ justifyContent: "center" }}>
          <Grid>
            <Image
              src="/offRoadCarCircle.webp"
              alt="off-road car circle"
              width={300}
              height={300}
              object-fit="cover"
              className="carCircle"
            />
          </Grid>
          <Grid container sx={{ justifyContent: "center", pt: 2, pb: 8 }}>
            <Typography
              variant="h2"
              component="h3"
              color="primary"
              sx={{ border: "2px solid white", borderRadius: "20px", p: 2 }}
            >
              Terenowe
            </Typography>
          </Grid>
        </Grid>
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
