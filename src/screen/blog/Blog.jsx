import React from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import BlogNews from "../../components/blog-news/BlogNews";
import "./blog.css";
import { blogNews } from "../../data/db";
import ContactComponent from "../../components/contact-us/ContactComponent";

const Blog = () => {
  return (
    <Layout title={"Blogs&News"} activeLink={"Blogs & News"}>
      <BannerSecondary title={"Blogs & News"} />
      <Heading title={"Blogs & News"}/>

      <div className="blognews-container">
        {blogNews?.map((item, i) => (
          <BlogNews key={i} data={item} />
        ))}
      </div>


      <Heading title={"Contact Us"}/>
      <ContactComponent />
    </Layout>
  );
};

export default Blog;
