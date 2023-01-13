import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

const MainNav = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <ToolBar sx={{ justifyContent: "center" }}>
          <Stack direction="row" spacing={3}>
            <Link href="/">
              <Button size="large">Home</Button>
            </Link>
            <Link href="/skup">
              <Button size="large">Skup</Button>
            </Link>
            <Link href="/blachastwo-i-lakiernictwo">
              <Button size="large">Blacharstwo i lakiernictwo</Button>
            </Link>
            <Link href="/kontakt">
              <Button size="large">Kontakt</Button>
            </Link>
          </Stack>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default MainNav;
