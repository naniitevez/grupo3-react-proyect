import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderData } from "../../data/SliderData";
import ImageCard from "./ImageCard";

const arrowStyles = {
  width: 40,
  height: 40,
  position: "absolute",
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, right: "-85px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, left: "-85px" }}
      onClick={onClick}
    />
  );
}

const MyCarousel = () => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // pauseOnHover: true
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    // <div >
      <Slider {...settings} style={{width: "60%"}}>
         {
           SliderData.map(obj => <ImageCard url={obj.url} description={obj.description} key={obj.id} />)
         }
      </Slider>
    // </div>
  );
};

export default MyCarousel;
