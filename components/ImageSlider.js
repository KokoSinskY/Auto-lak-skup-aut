import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Grid from "@mui/material/Grid";

import data from "../src/data";

const ImageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    speed: 3500,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Grid mt={2}>
      <Slider {...settings}>
        {data[0].imageSlider.map((item) => (
          <Grid key={item.id}>
            <Image src={item.src} alt={item.alt} width={900} height={600} />
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

export default ImageSlider;
