import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/Image";
import Grid from "@mui/material/Grid";

const ImageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    speed: 5000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Grid container sx={{ alignItems: "center" }}>
        <Image src="/SkupJag.webp" alt="Black Car" width={900} height={600} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Image src="/SkupMeg.webp" alt="Black Car" width={900} height={600} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Image src="/BlachGolBf.webp" alt="Black Car" width={900} height={600} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Image src="/BlachGolAf.webp" alt="Black Car" width={900} height={600} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Image src="/SkupFia.webp" alt="Black Car" width={900} height={600} />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Image src="/BlachBM.webp" alt="Black Car" width={900} height={600} />
      </Grid>
    </Slider>
  );
};

export default ImageSlider;
