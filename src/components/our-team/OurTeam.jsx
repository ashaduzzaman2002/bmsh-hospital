import React from "react";
import Swiper from "swiper";

import "swiper/css";
import "./our-team.css";
import { LeftArrow, RightArrow } from "../../assets/svg/SVGIcon";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  render() {
    return (
      <div className="container">
        <div className="team-container">
          <div className="team-text-box">
            <h3 className="mb-0">General Medicine and Intensive Care</h3>
            <p className="mb-0">
              He is a full-time physician and intensivist in Bombay Multi
              Speciality Hospital. He has good ICU experience from Apollo, CIMS
              hospital Ahmedabad.Cardiac and critical care experience from
              Wockheart Hospital Surat. He worked as a physician with ONGC
              Surat.
            </p>

            <h4 className="mb-0">Dr Alpesh Zala</h4>
          </div>

          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.props.items.map((item, index) => (
                <div key={index} className="swiper-slide">
                  <div className="slider-item">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;