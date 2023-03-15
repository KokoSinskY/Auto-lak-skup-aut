import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/Image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import data from "../src/data";

const CarPartsVendors = () => {
  const settings = {
    dots: false,
    arrows: false,
    accessibility: false,
    autoplay: true,
    draggable: false,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography
          color="primary"
          variant="h1"
          component="div"
          sx={{ fontWeight: 600, pt: 2, pb: 2 }}
        >
          Nasi Partnerzy
        </Typography>
      </Grid>
      <Divider />
      <Grid mt={2}>
        <Slider {...settings}>
          {data[0].carPartsVendors.map((item) => (
            <Grid key={item.id} sx={{ pl: 4, pr: 4 }}>
              <Image src={item.src} alt={item.alt} width={200} height={100} />
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default CarPartsVendors;
