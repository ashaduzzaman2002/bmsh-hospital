import React from "react";
import "./contactus.css";
import Layout from "../../layout/Layout";
import BannerSecondary from "../../components/Banner/BannerSecondary";
import Heading from "../../components/heading/Heading";
import ContactComponent from "../../components/contact-us/ContactComponent";
import "./contactus.css";
import Stethoscope from "../../assets/stethoscope.svg";
import Heart from "../../assets/Heart.svg";
import MedicineBottle from "../../assets/MedicineBottle.svg";
import MrX1 from "../../assets/MrX1.svg";

const ContactUs = () => {
  return (
    <Layout title={"Contact Us"} activeLink={"Contact Us"}>
      <BannerSecondary title={"Contact Us"} />
      <Heading title={"Contact Us"} />
      {/* <ContactComponent/> */}
      <div className="container contact-container-wrapper">
        <div className="contact-container-top"></div>

        <div className="contact-container d-flex flex-column justify-content-center align-items-center py-4 py-md-5">
          {/* svg stethoscope */}
          <div className="position-absolute z-index-n10 start-0 bottom-0 d-none d-md-block">
            <img
              className="w-100 ratio ratio-1x1"
              src={Stethoscope}
              alt="stethoscope-logo"
            />
          </div>

          {/* svg Heart */}
          <div className="position-absolute z-index-n10 end-0 top-0 d-none d-md-block">
            <img
              className="w-100 ratio ratio-1x1"
              src={Heart}
              alt="stethoscope-logo"
            />
          </div>

          {/* svg Medicine bottle */}
          <div className="position-absolute z-index-n10 end-0 bottom-0 d-none d-md-block">
            <img
              className="w-100 ratio ratio-1x1"
              src={MedicineBottle}
              alt="stethoscope-logo"
            />
          </div>

          {/* svg MrX1 */}
          <div className="position-absolute z-index-n11 start-0 bottom-0 d-none d-md-block">
            <img
              className="w-100 ratio ratio-1x1"
              src={MrX1}
              alt="stethoscope-logo"
            />
          </div>

          <div className="top d-flex flex-column justify-content-center align-items-center">
            <div className="heading">Get In Touch</div>
            <p className="text-center text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="bottom d-flex flex-wrap gap-3  ">
            <input className="col " type="text" placeholder="Name" />
            <input className="col " type="number" placeholder="Number" />
            <input className="col" type="email" placeholder="Email" />
            <input className="col" type="text" placeholder="Subject" />
            <textarea
              className="col col-12"
              type="textbox"
              placeholder="Reason of Appointment"
            />
            <div className="col col-12 text-center btn-primary">Submit</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
