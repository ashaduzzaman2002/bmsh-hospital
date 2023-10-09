import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import { allEvent } from "../../data/db";
import "./gallery.css";
import { CornerArrow } from "../../assets/svg/SVGIcon";

const Gallery = () => {
  const [events, setEvents] = useState(allEvent);
  const [eventsToShow, setEventsToShow] = useState(allEvent.length); // Initial number of events to show

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 600) {
        setEventsToShow(6);
      } else {
        setEventsToShow(allEvent.length);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Layout title={"Gallery"} activeLink={"Gallery"}>
      <BannerSecondary title={"Gallery"} />
      <Heading title={"Gallery"} />

      <div className="container gallery-container">
        <div className="gallery-box">
          {events.slice(0, eventsToShow).map((item, i) => (
            <div key={i}>
              <p className="mb-0">{item}</p>
              {i === 0 && <CornerArrow />}
            </div>
          ))}
        </div>

        <div className="image-box">
          <div className="row-1 rows">
            <div>
              <img src="/images/image-1.png" alt="" />
            </div>

            <div className="col-1">
              <img src="/images/image-2.png" alt="" />
              <img src="/images/image-3.png" alt="" />
            </div>
          </div>

          <div className="rows">
            <img src="/images/image-4.png" alt="" />
          </div>
          <div className="rows row-3">
            <div>
              <img src="/images/image-5.png" alt="" />
            </div>
            <div>
              <img src="/images/image-6.png" alt="" />
            </div>
            <div>
              <img src="/images/image-7.png" alt="" />
            </div>
          </div>

          <div className="row-1 rows">
            <div className="col-1">
              <img src="/images/image-8.png" alt="" />
              <img src="/images/image-9.png" alt="" />
            </div>
            <div>
              <img src="/images/image-10.png" alt="" />
            </div>
          </div>

          <div className="rows">
            <img src="/images/image-11.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
