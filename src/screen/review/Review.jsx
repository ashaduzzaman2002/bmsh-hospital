import React from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import BlogNews from "../../components/blog-news/BlogNews";
import { blogNews } from "../../data/db";

const Review = () => {
  return (
    <Layout title={"Reviews"} activeLink={"Reviews"}>
      <BannerSecondary title={"Reviews"} />
      <Heading title={"Blogs & News"} path="/blogs&news" />
      <BlogNews data={blogNews[0]} />
    </Layout>
  );
};

export default Review;
