import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ListComponent = (props) => {
  return (
    <Box className="skupBottomBG">
      <Grid container p={4} sx={{ justifyContent: "center" }}>
        <Paper elevation={0} className="border">
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <Typography variant="h2" component="h3">
              {props.header}
            </Typography>
          </Box>
          <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
          <List sx={{ mr: 10 }}>
            {props.data.map((item) => (
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
    </Box>
  );
};

export default ListComponent;
