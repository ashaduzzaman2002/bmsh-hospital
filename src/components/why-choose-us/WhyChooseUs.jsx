import React from "react";
import "./why-choose-us.css";
import { Stethoscope, WhyChooseUsIcon } from "../../assets/svg/SVGIcon";

const WhyChooseUs = () => {
  return (
    <div className="container wcu-container">
      <div className="wcu-top">
        <div className="wcu-top-icons">
          <WhyChooseUsIcon />
        </div>

        <div className="wcu-outer">
          <div className="wcu-text-box">
            <div>
              <div className="wcu-text">
                <h2 className="mb-0">
                  <span style={{ color: "#333" }}>Great</span>{" "}
                  <span style={{ color: "#0072BB" }}>Infrastructure</span>
                </h2>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>

              <hr />
            </div>

            <div>
              <div className="wcu-text">
                <h2 className="mb-0">
                  <span style={{ color: "#0072BB" }}>Qualified</span>{" "}
                  <span style={{ color: "#333" }}>Doctors</span>
                </h2>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>

              <hr />
            </div>

            <div>
              <div className="wcu-text">
                <h2 className="mb-0">
                  <span style={{ color: "#333" }}>Emergency</span>{" "}
                  <span style={{ color: "#0072BB" }}>Departments</span>
                </h2>

                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>

          <div className="wcu-video">
            <img src="/images/wcu-video.png" alt="" />
          </div>
        </div>
      </div>

      <div className="wcu-svg">
        <Stethoscope />
      </div>
    </div>
  );
};

export default WhyChooseUs;
