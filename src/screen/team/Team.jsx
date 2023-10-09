import React from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import { team } from "../../data/db";
import "./team.css";
import { Link } from "react-router-dom";
import ReviewsComponent from "../../components/reviews-component/ReviewsComponent";

const Team = () => {
  return (
    <Layout activeLink={"Team"} title={"Team"}>
      <BannerSecondary title={"Team"} />
      <Heading title={"Our Team"} />

      <div className="container">
        <div className="team-container">
          {team.map((item, i) => (
            <Link to={`/team/${item.slug}`} className="team-card">
              <div>
                <img src={item.image} alt="" />
              </div>

              <div className="team-text">
                <h2 className="mb-0">{item.title}</h2>
                <h3 className="mb-0">{item.name}</h3>
                <h4 className="mb-0">{item.specialist}</h4>

                <p className="mb-0">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Heading title={'Our Review'} />
      <ReviewsComponent />
    </Layout>
  );
};

export default Team;
