import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  let footerDate = new Date().getFullYear;

  return (
    <Grid container sx={{ justifyContent: "center", backgroundColor: "#243763", py: 1.5 }}>
      <Typography variant="h4" component="div">
        © 2022 Copyright: Artur Nawrocki
      </Typography>
    </Grid>
  );
};

export default Footer;
