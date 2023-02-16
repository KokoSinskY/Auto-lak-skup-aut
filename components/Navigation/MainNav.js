import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent";

const MainNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        {isMobile ? (
          <ToolBar sx={{ justifyContent: "flex-end" }}>
            <DrawerComponent />
          </ToolBar>
        ) : (
          <ToolBar sx={{ justifyContent: "center" }}>
            <Stack direction="row" spacing={3}>
              <Link href="/">
                <Button size="large">Home</Button>
              </Link>
              <Link href="/skup">
                <Button size="large">Skup</Button>
              </Link>
              <Link href="/blacharstwo-i-lakiernictwo">
                <Button size="large">Blacharstwo i lakiernictwo</Button>
              </Link>
              <Link href="/kontakt">
                <Button size="large">Kontakt</Button>
              </Link>
            </Stack>
          </ToolBar>
        )}
      </AppBar>
    </>
  );
};

export default MainNav;
