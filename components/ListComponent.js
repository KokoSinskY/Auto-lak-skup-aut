import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import ListItemText from "@mui/material/ListItemText";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const ListComponent = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container p={4} xl={6} lg={6} md={12} sm={12} sx={{ justifyContent: "center" }}>
      <Paper elevation={0}>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <Typography variant="h2" component="h3">
            {props.header}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ borderBottomWidth: 3, mb: 2 }} />
        <List>
          {props.data.map((item, index) => (
            <ListItem
              key={item.id}
              sx={{
                ml: isMobile ? 0 : index * 2,
                mb: 2,
                borderRadius: "20px",
                backgroundColor: "#f0f0f0",
                py: 2,
                pl: 5,

                transition: "0.7s",
                "&:hover": {
                  transform: isMobile ? "translateX(0)" : "translateX(3rem)",
                  backgroundColor: "#FF6E31",
                  transition: "0.7s",
                },
              }}
            >
              <ListItemIcon>
                <CheckIcon
                  sx={{
                    fontSize: "3em",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.content}
                primaryTypographyProps={{
                  fontSize: "1.4rem",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default ListComponent;
