import React from "react";
import "./contactus.css";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";

const ContactUs = () => {
  return (
    <Layout title={"Contact Us"} activeLink={"Contact Us"}>
      <BannerSecondary title={"Contact Us"} />
      <Heading title={"Contact Us"} />
    </Layout>
  );
};

export default ContactUs;
