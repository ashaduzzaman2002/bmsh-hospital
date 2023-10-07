import Layout from "../../layout/Layout";
import Footer from "../../components/Footer/Footer";
import OurClient from "../../components/our-client/OurClient";
import { ourClient } from "../../data/db";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import GalleryComponent from "../../components/gallery/GalleryComponent";

const About = () => {
  return (
    <Layout title={"About Us"} activeLink="About Us">
      <BannerSecondary title={"About Us"} />
      <OurClient ourClient={ourClient} />
      <Heading title={"Gallery"} path="/gallery" />
      <GalleryComponent />
    </Layout>
  );
};

export default About;
