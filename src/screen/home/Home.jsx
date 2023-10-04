import React from "react";
import "./home.css";
import Layout from "../../layout/Layout";
import Banner from "../../components/Banner/Banner";
import OurClient from "../../components/our-client/OurClient";
import BlogNews from "../../components/blog-news/BlogNews";
import Faq from "../../components/faq/Faq";
import { ourClient } from "../../data/db";

const Home = () => {
  return (
    <Layout activeLink='Home'>
      <Banner />
      <OurClient ourClient={ourClient} />
      {/* <BlogNews />
      <Faq /> */}
    </Layout>
  );
};

export default Home;
