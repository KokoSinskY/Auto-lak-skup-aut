import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/Image";

const SingleTypeOfCar = (props) => {
  return (
    <Grid item container lg={4} md={4} sm={10} sx={{ justifyContent: "center" }}>
      <Grid>
        <Image
          src={props.src}
          alt={props.alt}
          width={300}
          height={300}
          object-fit="cover"
          quality={100}
          className="carCircle"
        />
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          pt: 2,
          pb: 8,
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          color="primary"
          sx={{ border: "2px solid white", borderRadius: "20px", p: 2, cursor: "pointer" }}
        >
          {props.content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SingleTypeOfCar;
