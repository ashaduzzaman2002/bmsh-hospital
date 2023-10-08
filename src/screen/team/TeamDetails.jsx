import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import { team } from "../../data/db";
import { useLocation, useParams } from "react-router-dom";
import {
  Apointment,
  FbLogo,
  InstaLogo,
  Twitter,
} from "../../assets/svg/SVGIcon";

const TeamDetails = () => {
  const [data, setData] = useState({});
  const { slug } = useParams();
  const getData = async () => {
    const filteredData = team.find((item) => item.slug === slug);
    console.log(filteredData);
    setData(filteredData);
  };

  useEffect(() => {
    getData();
  }, [slug]);

  const location = useLocation();

  useEffect(() => {
    const cardSection = document.getElementById("card");

    console.log(cardSection);
    if (cardSection) {
      cardSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <Layout title={"Team"} activeLink={"Team"}>
      <BannerSecondary title={"Team"} />
      <div id="card" />
      <Heading title={"Our Team"} />

      <div className="container team-details">
        <div className="team-card">
          <div>
            <img src={data.image} alt="" />
          </div>

          <div className="team-details-text">
            <div>
              <h5 className="mb-0">Name</h5>
              <p className="mb-0">{data.name}</p>
            </div>

            <div>
              <h5 className="mb-0">Designation</h5>
              <p className="mb-0">{data.specialist}</p>
            </div>
            <div>
              <h5 className="mb-0">Description</h5>
              <p className="mb-0">{data.desc}</p>
            </div>
            <div className="team-details-icon">
              <FbLogo />
              <InstaLogo />
              <Twitter />
            </div>
            <button className="btn-primary" style={{ maxWidth: 300 }}>
              <Apointment /> Book Appointment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamDetails;
