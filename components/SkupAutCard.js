import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SkupAutCard = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 500, backgroundColor: "#FFEBB7", p: 0.5, marginBottom: 5 }}>
        <CardHeader
          sx={{ display: "flex", textAlign: "center" }}
          title={
            <Typography variant="h2" component="h2">
              Skup Aut Łódź
            </Typography>
          }
        ></CardHeader>
        <CardMedia component="img" height="450" image="/skupImageRedCar.webp" alt="red car" />
        <CardContent>
          <Typography variant="h3" component="h3">
            Prowadzimy skup samochodów na terenie całej Łodzi oraz okolic. Dojazd do klienta i
            oględziny w wyznaczonym miejscu, bez dodatkowych kosztów. Zakup auta natychmiast po
            ustaleniu ceny, gotówka od ręki. Odbieramy auto własną lawetą - nie musisz się
            martwić transportem. Wszelkie formalności załatwiamy wygodnie na miejscu.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SkupAutCard;
