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
import GalleryComponent from "../../components/gallery/GalleryComponent";
import ContactComponent from "../../components/contact-us/ContactComponent";
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs";
import ReviewsComponent from "../../components/reviews-component/ReviewsComponent";
import HomeIntroduction from "../../components/home-introduction/HomeIntroduction";
import OurTeam from "../../components/our-team/OurTeam";

const Home = () => {
  const items = [
    { image: "/images/team-1.png", alt: "Image 1" },
    { image: "/images/team-2.png", alt: "Image 2" },
    { image: "/images/team-3.png", alt: "Image 3" },
    { image: "/images/team-4.png", alt: "Image 1" },
    { image: "/images/team-2.png", alt: "Image 2" },
    { image: "/images/team-3.png", alt: "Image 3" },
    // Add more items as needed
  ];
  return (
    <Layout activeLink="Home">
      <Banner />
      <Heading title={"Introduction"} path="/about-us" />
      <HomeIntroduction />
      <Heading title={"Our Service"} path="/services" />
      <OurService />
      <Heading title={"Our Team"} path={"/team"} />
      <OurTeam items={items} />
      <OurClient ourClient={ourClient} />
      <Heading title={"Why Choose Us"} />
      <WhyChooseUs />
      <Heading title={"Our Review"} />
      <ReviewsComponent />
      <Heading title={"Blogs & News"} path="/blogs&news" />
      <BlogNews data={blogNews[0]} />
      <Faq faq={faq} />
      <Heading title={"Contact Us"} path="/gallery" />
      <ContactComponent />
      <Heading title={"Gallery"} path="/gallery" />
      <GalleryComponent />
    </Layout>
  );
};

export default Home;
