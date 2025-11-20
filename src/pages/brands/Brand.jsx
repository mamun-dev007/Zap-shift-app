import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import amazon from '../../assets/brands/amazon.png'
import amazonVector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starPpeople from '../../assets/brands/start_people.png'


const Brand = () => {
    return (
        <div className='py-10 '>
        <div>
      <h2 className='text-center text-4xl pb-15 font-bold'>We've helped thousands of sales teams</h2>

        </div>
     <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
    autoplay={{
        delay: 1000,
      disableOnInteraction: false,

    }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={amazon} alt=""/></SwiperSlide>
        <SwiperSlide><img src={amazonVector} alt=""/></SwiperSlide>
        <SwiperSlide><img src={casio} alt=""/></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt=""/></SwiperSlide>
        <SwiperSlide><img src={randstad} alt=""/></SwiperSlide>
        <SwiperSlide><img src={star} alt=""/></SwiperSlide>
        <SwiperSlide><img src={starPpeople} alt=""/></SwiperSlide>
         </Swiper>
        </div>
    );
};

export default Brand;