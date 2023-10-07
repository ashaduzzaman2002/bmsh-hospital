import React, { useEffect, useState } from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { gallery, services } from "../../data/db";
import { Building, Openning, RightArrow } from "../../assets/svg/SVGIcon";

const GalleryComponent = () => {
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  const handleNext = () => {
    if (swiper1) {
      swiper1.slideNext();
    }

    if (swiper2) {
      swiper2.slideNext();
    }
  };

  // Function to handle the "Prev" button click
  const handlePrev = () => {
    if (swiper1) {
      swiper1.slidePrev();
    }
    if (swiper2) {
      swiper2.slidePrev();
    }
  };

  return (
    <div>
      <div className="bg-danger position-relative">
        <Swiper  spaceBetween={0} slidesPerView={4.5} onSwiper={setSwiper1}>
          {gallery.map((item, i) => (
            <SwiperSlide>
              <div key={i} className="gallery-card">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="next-btn" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M38.8895 23.049L16.6389 0.798774C16.1242 0.283738 15.4373 0 14.7047 0C13.9722 0 13.2852 0.283738 12.7706 0.798774L11.132 2.43697C10.0658 3.50444 10.0658 5.23939 11.132 6.30523L29.8164 24.9896L11.1113 43.6948C10.5966 44.2098 10.3125 44.8964 10.3125 45.6285C10.3125 46.3614 10.5966 47.048 11.1113 47.5634L12.7499 49.2012C13.2649 49.7163 13.9515 50 14.684 50C15.4165 50 16.1035 49.7163 16.6181 49.2012L38.8895 26.9307C39.4054 26.414 39.6887 25.7242 39.6871 24.9909C39.6887 24.2547 39.4054 23.5653 38.8895 23.049Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="bg-danger position-relative">
        <Swiper spaceBetween={0} slidesPerView={4.5} onSwiper={setSwiper2}>
          {gallery.reverse().map((item, i) => (
            <SwiperSlide>
              <div key={i} className="gallery-card">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prev-btn" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M11.1103 23.049L33.3609 0.798774C33.8755 0.283738 34.5625 0 35.295 0C36.0275 0 36.7145 0.283738 37.2291 0.798774L38.8678 2.43697C39.934 3.50444 39.934 5.23939 38.8678 6.30523L20.1833 24.9896L38.8885 43.6948C39.4031 44.2098 39.6873 44.8964 39.6873 45.6285C39.6873 46.3614 39.4031 47.048 38.8885 47.5634L37.2499 49.2012C36.7348 49.7163 36.0483 50 35.3157 50C34.5832 50 33.8962 49.7163 33.3816 49.2012L11.1103 26.9307C10.5944 26.414 10.3111 25.7242 10.3127 24.9909C10.3111 24.2547 10.5944 23.5653 11.1103 23.049Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryComponent;
