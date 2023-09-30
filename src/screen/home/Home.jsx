import React from "react";
import "./home.css";
import Layout from "../../layout/Layout";
import Banner from "../../components/Banner/Banner";
import OurClient from "../../components/our-client/OurClient";
import BlogNews from "../../components/blog-news/BlogNews";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <OurClient />
      <BlogNews />
    </Layout>
  );
};

export default Home;
