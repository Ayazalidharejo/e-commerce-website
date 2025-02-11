import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import image from "../images/fan.jpg";

function Items() {
  return (
    <Swiper
      pagination={true}       // Enable pagination
      modules={[Pagination, Autoplay]}  // Import Pagination and Autoplay modules
      className="mySwiper"
      slidesPerView={6}       // Show 6 images at once
      spaceBetween={10}       // Space between slides (optional)
      autoplay={{             // Enable autoplay
        delay: 2500,          // Delay between each slide (in milliseconds)
        disableOnInteraction: false,  // Don't stop autoplay on interaction
      }}
    >
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide className='mx-5'><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
      <SwiperSlide><img style={{width:"300px",height:"250px"}} src={image} alt="Product 1" /></SwiperSlide>
     
    </Swiper>
  );
}

export default Items;
