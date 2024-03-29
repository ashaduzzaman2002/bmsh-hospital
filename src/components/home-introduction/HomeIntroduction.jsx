import React from "react";
import "./home-introduction.css";

const HomeIntroduction = () => {
  return (
    <div>
      <div className="container">
        <p className="mb-0 intro-desc">
          The best-known type of hospital is the general hospital, which
          typically has an emergency department to treat urgent health problems
          ranging from fire and accident victims to a heart attack. A district
          hospital typically is the major health care facility in its region.
        </p>
      </div>

      <div className="intro-bottom-container">
        <div>
          <div>

            
            <div className="indro-text-box">
            <div className="single-dot">
              <img src="/images/single-dot.svg" alt="" />
            </div>
              <div className="intro-text-inner">
                <div>
                  <img src="/images/step-initial.svg" alt="" />
                </div>

                <div>
                  <div>
                    <h2 className="mb-0">Mission</h2>
                    <p className="mb-0">
                      To Provide Best Health Care At Affordable Price.
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-0">Vision</h2>
                    <p className="mb-0">
                      To Provide World Class Health Services To All.
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-0">Philosophy</h2>
                    <p className="mb-0">
                      Holistic, coordinated, and effective patient care based.
                    </p>
                  </div>
                </div>
              </div>

              <div className="intro-text-inner">
                <div>
                  <img src="/images/step-end.svg" alt="" />
                </div>

                <div>
                  <div>
                    <h2 className="mb-0">Values</h2>
                    <p className="mb-0">
                      The unique position of the family in society.
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-0">Belife</h2>
                    <p className="mb-0">
                      We Believe our role is to help you Maximize your health.
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-0">Quality Assurance</h2>
                    <p className="mb-0">
                      We will aggressively implement processes that advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-image-1">
            <img className="intro-dot-left" src="/images/dot.svg" alt="" />
            <img
              className="intro-left-img"
              src="/images/intro-img-1.png"
              alt=""
            />

            <div className="intro-img">
              <img className="intro-dot-right" src="/images/dot.svg" alt="" />
              <img
                className="intro-right-img"
                src="/images/intro-img-2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="intro-second-img">
          <img className="intro-dot-right" src="/images/dot.svg" alt="" />
          <img
            className="intro-right-img"
            src="/images/intro-img-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeIntroduction;
