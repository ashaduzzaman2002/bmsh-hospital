import React from "react";
import "./home.css";
import Layout from "../../layout/Layout";
import Banner from "../../components/Banner/Banner";
import OurClient from "../../components/our-client/OurClient";
import BlogNews from "../../components/blog-news/BlogNews";
import Faq from "../../components/faq/Faq";

const Home = () => {
  return (
    <Layout activeLink='Home'>
      <Banner />
      {/* <OurClient />
      <BlogNews />
      <Faq /> */}
    </Layout>
  );
};

export default Home;
