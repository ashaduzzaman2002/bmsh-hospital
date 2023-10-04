import React, { useEffect, useState } from "react";

const BannerSecondary = ({ title }) => {
  const text = "Bombay Maternity & Surgical Hospital";
  const [initialScreenWidth, setInitialScreenWidth] = useState(
    window.innerWidth
  );

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
    <div className="banner-container banner-secondary d-flex align-items-center justify-content-center position-relative">
      <div className="banner-box">
        <h1 className="banner-secondary-heading mb-0">{title}</h1>
        <div className="d-flex">
          <p className="mb-0">Home |</p>
          <p className="mb-0"> {title}</p>
        </div>
      </div>

      <div id="moving-text" className="moving-text">
        {text}
      </div>
    </div>
  );
};

export default BannerSecondary;
