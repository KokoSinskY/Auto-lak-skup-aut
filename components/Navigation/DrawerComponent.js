import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/Link";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgba(36, 55, 99, 0.9)",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon sx={{ color: "#FF6E31" }} />
          </IconButton>
        </Grid>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link href="/">
              <Button size="large">Home</Button>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link href="/skup">
              <Button size="large">Skup</Button>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link href="/blacharstwo-i-lakiernictwo">
              <Button size="large">Blacharstwo i lakiernictwo</Button>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link href="/kontakt">
              <Button size="large">Kontakt</Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#FF6E31" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
