import Layout from "../../layout/Layout";
import Footer from "../../components/Footer/Footer";
import OurClient from "../../components/our-client/OurClient";
import { ourClient } from "../../data/db";

const About = () => {
  return (
    <Layout title={"About Us"} activeLink="About Us">
      <OurClient ourClient={ourClient} />
    </Layout>
  );
};

export default About;
