
import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="w-full h-full">
      {images.map((image, index) => (
        <div key={index} className="h-screen">
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
