import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const MyCard = (props) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 700, backgroundColor: "#FFEBB7", p: 0.5, marginBottom: 5 }}>
        <CardHeader
          sx={{ display: "flex", textAlign: "center" }}
          title={
            <Typography variant="h2" component="h2">
              {props.cardHeader}
            </Typography>
          }
        ></CardHeader>
        <CardMedia
          component="img"
          height="450"
          image={props.cardImage}
          alt={props.cardImageAlt}
        />
        <CardContent>
          <Typography variant="h3" conponent="h3">
            {props.cardContent}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MyCard;
