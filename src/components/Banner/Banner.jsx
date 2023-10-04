import { useEffect, useState } from "react";
import { Apointment } from "../../assets/svg/SVGIcon";
import "./Banner.css";

const Banner = () => {
  const text = "Bombay Maternity & Surgical Hospital";
  const [initialScreenWidth, setInitialScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const textElement = document.getElementById("moving-text");
    const textWidth = textElement.offsetWidth;

    let position = initialScreenWidth;

    const moveText = () => {
      let newPosition = position - 1;
      if (newPosition < -textWidth) {
        newPosition = initialScreenWidth;
      }
    
      textElement.style.left = `${newPosition}px`;
      position = newPosition;
    };

    const handleResize = () => {
      setInitialScreenWidth(window.innerWidth);
    };

    const interval = setInterval(moveText, 10);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [initialScreenWidth]);

  return (
    <div className="banner-container d-flex align-items-center justify-content-center position-relative">
      <div className="banner-box">
        <h1>If you have any specific questions about</h1>
        <button className="btn-primary">
          <Apointment /> Book Appointment
        </button>
      </div>

      <div
        id="moving-text"
        className="moving-text"
      >
        {text}
      </div>
    </div>
  );
};

export default Banner;
