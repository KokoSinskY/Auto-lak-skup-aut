import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import HeaderLogoAutoLak from "./HeaderLogoAutoLak";
import HeaderLogoSkupAut from "./HeaderLogoSkupAut";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#243763" }}>
      <Grid container>
        <HeaderLogoAutoLak />
        <HeaderLogoSkupAut />
      </Grid>
    </Box>
  );
};

export default Header;
