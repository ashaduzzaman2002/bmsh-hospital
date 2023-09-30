import React from "react";
import "./heading.css";
import { Link } from "react-router-dom";

const Heading = ({ title, path }) => {
  return (
    <div className="heading-container">
      <div className="d-flex gap-4">
        {/* <img src="/images/doted-line.svg" alt="" /> */}
        <div className="d-flex align-items-center ">
          <div className="dotted-line" />
        </div>
        <h2 className="mb-0">{title}</h2>
      </div>

      {path ? (
        <Link to={path}>
          View More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_121_5161)">
              <path
                d="M19.7709 9.94699L19.7702 9.94625L15.688 5.88375C15.3821 5.57941 14.8875 5.58054 14.5831 5.8864C14.2787 6.19222 14.2799 6.68687 14.5857 6.99125L17.3265 9.71875H0.78125C0.349766 9.71875 0 10.0685 0 10.5C0 10.9315 0.349766 11.2812 0.78125 11.2812H17.3264L14.5857 14.0087C14.2799 14.3131 14.2788 14.8078 14.5831 15.1136C14.8875 15.4195 15.3822 15.4205 15.688 15.1162L19.7702 11.0537L19.7709 11.053C20.0769 10.7476 20.0759 10.2514 19.7709 9.94699Z"
                fill="#0072BB"
              />
            </g>
            <defs>
              <clipPath id="clip0_121_5161">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Heading;
