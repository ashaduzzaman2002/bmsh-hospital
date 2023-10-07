import React from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import { team } from "../../data/db";
import './team.css'

const Team = () => {
  return (
    <Layout activeLink={"Team"} title={"Team"}>
      <BannerSecondary title={"Team"} />
      <Heading title={"Our Team"} />

      <div className="container team-container">
        {team.map((item, i) => (
          <div className="team-card">
            <div>
              <img src={item.image} alt="" />
            </div>

            <div>
              <h2>{item.title}</h2>
              <h4>{item.name}</h4>
              <p>{item.specialist}</p>

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Team;
