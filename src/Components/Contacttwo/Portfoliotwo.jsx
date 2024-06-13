import React, { useEffect } from "react";
import "./Portfoliotwo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

import portfolio from '../../Assets/portfolio.png';
import card1 from '../../Assets/card1.png';
import card12 from '../../Assets/card12.png';

import Aos from "aos";
import "aos/dist/aos.css";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Portfoliotwo = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const images = [card12, card1];

  return (
    <div className="Contacttwo section" id="portfolio">
      <div className="portfolioTitletwo" data-aos="fade-down">
        <img src={portfolio} alt="Portfolio" />
      </div>
      <div className="secContainerPorttwo flex">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Contact Image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfoliotwo;
