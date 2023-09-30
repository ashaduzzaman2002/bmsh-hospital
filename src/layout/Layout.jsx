import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - BMSH Hospital" : "BMSH Hospital"}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
