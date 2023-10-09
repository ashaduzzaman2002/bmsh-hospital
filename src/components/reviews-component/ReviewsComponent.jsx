import React, { useState } from "react";
import "./reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviews } from "../../data/db";
import {
  NextArrow,
  PrevArrow,
  Qoute,
  ReviewBorder,
  RightArrow,
} from "../../assets/svg/SVGIcon";

const ReviewsComponent = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="container">
      <div className="review-container">
        <div className="review-prev-btn">
          <button onClick={handlePrev}>
            <PrevArrow />
          </button>
          <div />
        </div>

        <div className="review-slider h-100">
          <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setSwiper}
            className="h-100"
          >
            {reviews.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="review-card">
                  <img src={item.image} alt="" />
                  <div className="review-text-box">
                    {/* <div className="review-border">
                      <ReviewBorder />
                    </div> */}

                    <div className="inner-border">
                      <Qoute />
                      <p className="mb-0 review-msg">{item.message}</p>

                      <div className="d-flex align-items-center user-details">
                        <img src={item.profile} alt="" />

                        <div>
                          <p className="mb-0">{item.name}</p>
                          <p className="mb-0">{item.subHeading}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="review-next-btn">
          <button onClick={handleNext}>
            <NextArrow />
          </button>
          <div />
        </div>

        <div className="mobile-arrow">
          <button onClick={handlePrev}>
            <PrevArrow />
          </button>
          <button onClick={handleNext}>
            <NextArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
