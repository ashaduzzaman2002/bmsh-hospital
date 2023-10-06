import React from 'react'
import './gallery.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services } from '../../data/db';
import { Building, Openning, RightArrow } from '../../assets/svg/SVGIcon';

const GalleryComponent = () => {
  return (
    <div>
      <Swiper
          spaceBetween={10}
          slidesPerView={2}
          // onProgress={(swiper) => handleProgress(swiper)}
          className="py-lg-5 py-3"
        >
          {services.map((item, i) => (
            <SwiperSlide>
              <div key={i} className="our-service-card">
                <div className="our-service-heading">
                  {item.icon}
                  <h3 className="mb-0">{item.title}</h3>
                </div>

                <p className="mb-0">{item.description}</p>

                <div>
                  <button>
                    Read More <RightArrow />
                  </button>
                </div>

                <div className="building">
                  <Building />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div className="our-service-card">
              <div className="our-service-heading">
                <Openning />
                <h3 className="mb-0">Opening Hours</h3>
              </div>

              <div className="time-table">
                <div>
                  <p className="mb-0">Monday - Friday</p>
                  <p className="mb-0">8:00 - 18:00</p>
                </div>

                <div>
                  <p className="mb-0">Saturday</p>
                  <p className="mb-0">8:00 - 16:00</p>
                </div>
                <div>
                  <p className="mb-0">Sunday</p>
                  <p className="mb-0">8:00 - 13:00</p>
                </div>
              </div>

              <div className="building">
                <Building />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default GalleryComponent