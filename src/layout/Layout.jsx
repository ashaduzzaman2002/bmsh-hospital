import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - BMSH Hospital" : "BMSH Hospital"}</title>
      </Helmet>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
