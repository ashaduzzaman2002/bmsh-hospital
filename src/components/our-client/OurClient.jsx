import React from "react";
import Heading from "../heading/Heading";
import "./our-client.css";

const OurClient = () => {
  const list = [
    {
      image: "/images/client1.png",
    },
    {
      image: "/images/client2.png",
    },
    {
      image: "/images/client3.png",
    },
    {
      image: "/images/client4.png",
    },
    {
      image: "/images/client5.png",
    },
    {
      image: "/images/client6.png",
    },
    {
      image: "/images/client7.png",
    },
    {
      image: "/images/client8.png",
    },
    {
      image: "/images/client9.png",
    },
    {
      image: "/images/client10.png",
    },
    {
      image: "/images/client11.png",
    },
  ];
  return (
    <div className="">
      <Heading title="Our Client" />

      <div className="our-client-cards container">
        {
            list.map((item, i) => (
                <div key={i}>
                    <img src={item.image} alt="" />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default OurClient;
