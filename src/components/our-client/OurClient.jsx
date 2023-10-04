import React from "react";
import Heading from "../heading/Heading";
import "./our-client.css";

const OurClient = ({ ourClient }) => {
  return (
    <div className="">
      <Heading title="Our Client" />

      <div className="our-client-cards container">
        {ourClient?.map((item, i) => (
          <div key={i}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
