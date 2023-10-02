import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const HeaderLogoSkupAut = () => {
  return (
    <Grid item xl={6} lg={6} md={6} py={2} container sx={{ flexDirection: "column" }}>
      <Grid container sx={{ justifyContent: "center", pb: 2 }}>
        <Image src="/logo-skup.webp" alt="skup aut" width={150} height={130} priority={true} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid pr={2}>
          <Typography color="white" variant="h3" component="h1">
            Skup aut
          </Typography>
        </Grid>
        <Grid>
          <Typography color="primary" variant="h3" component="h1">
            790 857 962
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderLogoSkupAut;
