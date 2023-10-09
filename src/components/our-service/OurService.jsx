import React, { useEffect, useState } from "react";
import "./our-service.css";
import { services } from "../../data/db";
import { Building, Openning, RightArrow } from "../../assets/svg/SVGIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const OurService = () => {

  const [slideGap, setSlideGap] = useState(30);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 450) {;
        setSlideGap(20);
      } else if (window.innerWidth < 501) {
        setSlideGap(20);
      } else if (window.innerWidth < 768) {
        setSlideGap(15);
      } else {
      }
    };

    // Update the slidesPerView initially and add a listener for window resize events
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="container">
      <div className="our-service-container">
        {services.map((item, i) => (
          <div key={i} className="our-service-card">
            <div className="our-service-heading">
              {item.icon}
              <h3 className="mb-0">{item.title}</h3>
            </div>

            <p className="mb-0">{item.description}</p>

            <div>
              <Link to={`/services/${item.slug}`}>
                Read More <RightArrow />
              </Link>
            </div>

            <div className="building">
              <Building />
            </div>
          </div>
        ))}

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
      </div>

      <div className="mobile-view">
        <Swiper
          spaceBetween={slideGap}
          slidesPerView={1}
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
                  <Link to={`/services/${item.slug}`}>
                    Read More <RightArrow />
                  </Link>
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
    </div>
  );
};

export default OurService;
