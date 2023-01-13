import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64d655",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "2em",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
  },
});
export default theme;
