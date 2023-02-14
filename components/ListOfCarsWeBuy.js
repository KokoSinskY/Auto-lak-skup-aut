import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import data from "../src/data.js";

const ListOfCarsWeBuy = () => {
  return (
    <Grid item container m={5} xl={6} lg={6} md={8} sm={10}>
      <Paper elevation={3} sx={{ backgroundColor: "#FFEBB7" }}>
        <List sx={{ mr: 10 }}>
          {data[0].paperData.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={"- " + item.content}
                primaryTypographyProps={{ fontSize: "1.4rem" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default ListOfCarsWeBuy;
