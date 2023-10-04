import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";

const Layout = ({ children, title, activeLink }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Helmet>
        <title>{title ? title + " - BMSH Hospital" : "BMSH Hospital"}</title>
      </Helmet>
      <Navbar activeLink={activeLink} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
