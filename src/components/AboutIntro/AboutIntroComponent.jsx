import "./AboutIntro.css";

import Heading from "../../components/heading/Heading";
import { ProgressBarSm } from "../../assets/svg/SVGIcon";

const AboutIntroComponent = () => {
  return (
    <>
      <Heading title={"Introduction"} />
      <div className="about-intro-container">

        <div className="container ">
          <p className="text heading-desc">
            The best-known type of hospital is the general hospital, which
            typically has an emergency department to treat urgent health
            problems ranging from fire and accident victims to a heart attack. A
            district hospital typically is the major health care facility in its
            region.
          </p>
        </div>

        <div className="container1-wrapper">
            <div 
                className="container1-left">
                <div className="d-lg-block d-none"><L1 height={'14rem'}/></div>
                <div className="d-lg-none"><ProgressBarSm /></div>
                <div className="d-flex flex-column right" >
                    <div>
                        <header className="heading">Mission</header>
                        <ul className="text">
                            <li>To Provide Best Health Care At Affordable Price.</li>
                        </ul>
                    </div>
                    <div className="">
                        <header className="heading">Vision</header>
                        <ul className="text">
                            <li>To Provide World Class Health Services To All.</li>
                        </ul>
                    </div>
                    <div className="">
                        <header className="heading">Philosophy</header>
                        <ul className="text">
                            <li> Holistic, coordinated, and effective patient care based <span className="d-lg-block d-none"> on scientific and ethical principles, research findings, cultural understanding, and experience-based intuition.</span> </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="doctor-image-1 "></div>
        </div>

        <div className="container1-wrapper container2-wrapper mt-5">
            <div className="doctor-image-2 "></div>

            <div 
                className="container1-left container2-left">
                <div className="d-lg-block d-none"><L1 height={'29rem'}/></div>
                <div className="d-lg-none"><ProgressBarSm /></div>
                <div className="d-flex flex-column right" >
                    <div className="">
                        <header className="heading">Values</header>
                        <ul className="text">
                            <li>The unique position of the family in society<span className="d-lg-block d-none">, its central role in the promotion of holistic health, which we strive to enhance and support</span>.</li>
                            <li className="d-lg-block d-none">Compassion for the sick, suffering and grieving.</li>
                            <li className="d-lg-block d-none">The dignity and worth of each person regardless of race, sex, creed or social status.</li>
                        </ul>
                    </div>
                    <div className="">
                        <header className="heading">Belife</header>
                        <ul className="text">
                            <li>We Believe our role is to help you Maximize your health.</li>
                            <li className="d-lg-block d-none">We Believe we must deliver safe, High-quality care.</li>
                            <li className="d-lg-block d-none">We Believe we must invest in Our people.</li>
                            <li className="d-lg-block d-none">We Believe we must be Accountable.</li>
                        </ul>
                    </div>
                    <div>
                        <header className="heading">Quality Assurance</header>
                        <ul className="text">
                            <li>We will aggressively implement processes that advance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
};

export default AboutIntroComponent;

const L1 = ({ height }) => {
  return (
    <div className="mt-3" style={{ width: "3%" }}>
      <div
        className="container d-flex flex-column align-items-center p-0 "
        style={{ height: `${height ? height : "0px"}`, width: '1%' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="11.25"
            stroke="#0072BB"
            stroke-width="1.5"
          />
          <circle cx="11.9997" cy="11.9997" r="6.85714" fill="#0072BB" />
        </svg>

        <svg
          width="2"
          height="226"
          viewBox="0 0 2 226"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="2" height="226" fill="#0072BB" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="11.25"
            stroke="#0072BB"
            stroke-width="1.5"
          />
          <circle cx="11.9997" cy="11.9997" r="6.85714" fill="#0072BB" />
        </svg>

        <svg
          width="2"
          height="211"
          viewBox="0 0 2 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="2" height="211" fill="#0072BB" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="11.25"
            stroke="#0072BB"
            stroke-width="1.5"
          />
          <circle cx="11.9997" cy="11.9997" r="6.85714" fill="#0072BB" />
        </svg>
      </div>
    </div>
  );
};
