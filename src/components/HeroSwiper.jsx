import React from 'react';
import './HeroSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function HeroSwiper({ slides }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1021: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            loop={true}
            modules={[Autoplay]}
            className="heroSwiper"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                    <img src={slide.bgImg} alt="slide" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSwiper;
