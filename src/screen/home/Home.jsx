import React from "react";
import "./home.css";
import Layout from "../../layout/Layout";
import Banner from "../../components/Banner/Banner";
import OurClient from "../../components/our-client/OurClient";
import BlogNews from "../../components/blog-news/BlogNews";
import Faq from "../../components/faq/Faq";
import { blogNews, faq, ourClient } from "../../data/db";
import Heading from "../../components/heading/Heading";
import OurService from "../../components/our-service/OurService";

const Home = () => {
  
  return (
    <Layout activeLink='Home'>
      <Banner />
      <Heading title={"Our Service"} path="/services" />
      <OurService />
      <OurClient ourClient={ourClient} />
      <Heading title={"Blogs & News"} path="/blogs&news" />
      <BlogNews data={blogNews[0]} />
      <Faq faq={faq} />
    </Layout>
  );
};

export default Home;
