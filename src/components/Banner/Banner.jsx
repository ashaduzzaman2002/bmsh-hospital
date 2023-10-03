import { useEffect } from "react";
import { Apointment } from "../../assets/svg/SVGIcon";
import "./Banner.css";

const Banner = () => {
  const text = "Bombay Maternity & Surgical Hospital";
  const initialScreenWidth = window.innerWidth;

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
    const interval = setInterval(moveText, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container d-flex align-items-center justify-content-center position-relative">
      <div className="banner-box">
        <h1>If you have any specific questions about</h1>
        <button>
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
