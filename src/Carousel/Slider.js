// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import "../Carousel/Slider.css"

export default function Slider() {
  return (
    <>
    <div className='container'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={2} spaceBetween={10}>
        <SwiperSlide><div className='slide   slide1'></div></SwiperSlide>
        <SwiperSlide><div className='slide   slide2'></div></SwiperSlide>
        <SwiperSlide><div className='slide   slide3'></div></SwiperSlide>
        <SwiperSlide><div className='slide   slide4'></div></SwiperSlide>
      
      </Swiper>
    </div>
      
    </>
  );
}
