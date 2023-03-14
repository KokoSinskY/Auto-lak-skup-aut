import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/Image";
import Grid from "@mui/material/Grid";

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
    <Grid mt={2}>
      <Slider {...settings}>
        {data[0].carPartsVendors.map((item) => (
          <Grid key={item.id} sx={{ pl: 4, pr: 4 }}>
            <Image src={item.src} alt={item.alt} width={200} height={100} />
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

export default CarPartsVendors;
