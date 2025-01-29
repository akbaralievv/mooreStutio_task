import Slider from 'react-slick';

import spatula from '../assets/images/spatula.png';
import spatula1 from '../assets/images/spatula1.png';
import spatula2 from '../assets/images/spatula2.png';
import spatula3 from '../assets/images/spatula3.png';
import arrow from '../assets/icons/arrowPage.svg';

import RecommendationCard from './RecommendationCard';

const images = [
  spatula,
  spatula1,
  spatula2,
  spatula3,
  spatula,
  spatula1,
  spatula2,
  spatula3,
  spatula,
  spatula1,
  spatula2,
  spatula3,
  spatula,
  spatula1,
  spatula2,
  spatula3,
  spatula,
  spatula1,
  spatula2,
  spatula3,
];

const PrevArrow = ({ onClick }) => (
  <img src={arrow} className="slick-arrow prev" alt="" onClick={onClick} />
);

const NextArrow = ({ onClick }) => (
  <img
    src={arrow}
    className="slick-arrow next"
    alt=""
    style={{ transform: 'rotate(180deg)' }}
    onClick={onClick}
  />
);

function SliderRecommendation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, id) => (
          <RecommendationCard image={item} key={id} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderRecommendation;
