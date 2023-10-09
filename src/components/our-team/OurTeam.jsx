import React from "react";
import Swiper from "swiper";

import "swiper/css";
import "./our-team.css";

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
        <div className="slider-container">
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

// import React from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// const OurTeam = ({ items }) => {
//   return (
//     <div className="container">
//       <div className="swiper-container">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={3}
//           loop={true}
//         >
//           {items.map((item, i) => (
//             <SwiperSlide>
//               <div >
//                 <img className="w-100" src={item.image} alt="" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;
