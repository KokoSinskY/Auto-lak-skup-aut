import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/Image";

const HeaderLogoAutoLak = () => {
  return (
    <Grid
      item
      xl={6}
      lg={6}
      md={6}
      container
      py={2}
      sx={{ flexDirection: "column", justifyContent: "center" }}
    >
      <Grid container sx={{ justifyContent: "center", pb: 2 }}>
        <Image
          src="/logo-auto-lak.webp"
          alt="auto-lak"
          width={320}
          height={100}
          priority={true}
        />
      </Grid>
      <Grid container sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Grid pr={2}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Typography color="white" variant="h3" component="h1">
              Naprawa aut
            </Typography>
          </Grid>
          <Grid>
            <Typography color="white" variant="h3" component="h1">
              powypadkowych
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="primary" variant="h3" component="h1">
            123 456 789
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderLogoAutoLak;
