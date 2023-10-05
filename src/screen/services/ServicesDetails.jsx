import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import { Building, ServicesArrow } from "../../assets/svg/SVGIcon";
import { services } from "../../data/db";
import "./services.css";

const ServicesDetails = () => {
  const [data, setData] = useState({});
  const { slug } = useParams();
  const getData = async () => {
    const filteredData = services.find((service) => service.slug === slug);
    console.log(filteredData);
    setData(filteredData);
  };

  useEffect(() => {
    getData();
  }, [slug]);
  return (
    <Layout title={"Services"} activeLink={"Services"}>
      <BannerSecondary title={"Services"} />
      <Heading title={"Our Services"} />
      <div className="container">
        <div className="our-service-card serrvice-details">
          <div className="our-service-heading">
            {data.icon}
            <h3 className="mb-0">{data.title}</h3>
          </div>

          <ul className="services-list">
            {data.list?.map((item, i) => (
              <li>
                <ServicesArrow /> {item}
              </li>
            ))}
          </ul>

          <div className="building">
            <Building />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesDetails;
