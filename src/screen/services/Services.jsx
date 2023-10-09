import React from "react";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Faq from "../../components/faq/Faq";
import { faq } from "../../data/db";
import OurService from "../../components/our-service/OurService";
import Heading from "../../components/heading/Heading";
import ReviewsComponent from "../../components/reviews-component/ReviewsComponent";

const Services = () => {
  return (
    <Layout title={"Services"} activeLink="Services">
      <BannerSecondary title={"Services"} activeLink="Services" />
      <Heading title={"Our Service"}/>
      <OurService />
      <Heading title={"Our Service"}/>
      <ReviewsComponent />
      <Faq faq={faq} />
    </Layout>
  );
};

export default Services;
