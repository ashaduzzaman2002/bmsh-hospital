import "./Footer.css";
import BMSH_LOGO from "../../assets/BMSH-footer-Logo.svg";
import FB_LOGO from "../../assets/FB-Logo.svg";
import LINKEDIN_LOGO from "../../assets/LinkedIn-Logo.svg";
import GOOGLE_LOGO from "../../assets/Google-Logo.svg";
import LOCATION_LOGO from "../../assets/Location-Logo.svg";
import CALL_LOGO from "../../assets/Call-Logo.svg";
import MAIL_LOGO from "../../assets/Mail-Logo.svg";
import BG_LOGO1 from "../../assets/Footer-Logo-1.svg";
import BG_LOGO2 from "../../assets/Footer-Logo-2.svg";

const Footer = () => {
  return (
    <div
      className="position-relative footer-container p-0 w-full  "
    >
      <div className="">
        {/* BG LOGO1 */}
        <div className="d-none d-lg-block">
          <img
            className="position-absolute"
            style={{ top: "8rem", right: "3rem", width: "6rem" }}
            src={BG_LOGO2}
            alt=""
          />
        </div>

        {/* BG LOGO2 */}
        <div className="d-none d-lg-block">
          <img
            className="position-absolute"
            style={{ top: "4rem", left: "3rem", width: "6rem" }}
            src={BG_LOGO1}
            alt=""
          />
        </div>

        {/* floating card sm */}
        {/* <div
          className="d-lg-none position-absolute shadow-lg bg-white footer-floating-card p-3 mx-auto"
          style={{ transform: "translateX(5.5%)", borderRadius: "1rem" }}
        >
          <div>
            <p className="fw-bold">
              <span style={{ color: "#ED3237" }}>Subscribe</span> for the
              exclusive updates!
            </p>
          </div>
          <div className="my-2 ">
            <input
              className="text-black  d-inline w-100 rounded-pill py-1 px-2"
              style={{
                color: "#D2D2D2",
                outline: "none",
                border: "2px solid #e5e5e5",
              }}
              type="email"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div
            className="text-center text-white rounded-pill py-1"
            style={{ background: "#ED3237" }}
          >
            Subscribe Now
          </div>
        </div> */}

        {/* floating card lg */}
        {/* <div
          className="d-none d-lg-flex justify-content-between align-items-center position-absolute shadow-lg bg-white footer-floating-card p-3 mx-auto"
          style={{ transform: "translateX(5.5%)", borderRadius: "1rem" }}
        >
          <div>
            <p className="fw-bold m-0 p-0">
              <span style={{ color: "#ED3237" }}>Subscribe</span> for the
              exclusive updates!
            </p>
          </div>

          <div
            className="d-flex rounded-pill"
            style={{ border: "2px solid #e5e5e5" }}
          >
            <input
              className="text-black  d-inline w-100 rounded-pill py-1 px-2"
              style={{ color: "#D2D2D2", outline: "none", border: "none" }}
              type="email"
              placeholder="Enter Your Email Address"
            />
            <div
              className="text-center text-white rounded-pill py-2 "
              style={{ background: "#ED3237", width: "15rem" }}
            >
              {" "}
              Subscribe Now
            </div>
          </div>
        </div> */}

        <div className="news-letter container">
         <div className="news-letter-box h-100 d-flex justify-content-between align-items-center">
         <h3>
            <span style={{color: '#ED3237'}}>Subscribe</span> for the exclusive <br />
            updates!
          </h3>

          <div className="d-flex gap-4">
            <input type="text" placeholder="Enter Your Email Address" />
            <button className="btn-primary">Subscribe Now</button>
          </div>
         </div>
        </div>

        <div className="footer-container-card-wrapper container text-white d-grid">
          <div className="left ">
            <div className="d-flex align-items-center m-0 p-0">
              <img
                className="footer-bmsh-logo m-0 p-0"
                src={BMSH_LOGO}
                alt=""
              />
              <p className="text-danger ms-2" style={{ width: "10rem" }}>
                Bombay Maternity & Surgical Hospital
              </p>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
            <div className="logos d-flex gap-3 ">
              <div>
                <img className="footer-logos" src={FB_LOGO} alt="" />
              </div>
              <div>
                <img className="footer-logos" src={LINKEDIN_LOGO} alt="" />
              </div>
              <div>
                <img className="footer-logos" src={GOOGLE_LOGO} alt="" />
              </div>
            </div>
          </div>

          <div className="middle ">
            <h5>Department</h5>
            <ul>
              <li>GENRAL SURGERY DEPARTMENT</li>
              <li>EAR NOSE AND THROAT</li>
              <li>OBSTETRIC AND GYNECOLOGY</li>
              <li>ORTHOPEDIC AND JOINT REPLACEMENT</li>
              <li>SKIN V D</li>
              <li>PHYSIOTHERAPY AND REHABILITATION</li>
              <li>DEPARTMENT OF GENERAL MEDICINE</li>
            </ul>
          </div>

          <div className="right ">
            <h3>Contact</h3>
            <div className="d-flex flex-column gap-3 mt-4">
              <div className="d-flex flex-row">
                <img className="footer-logos" src={LOCATION_LOGO} alt="" />
                <p className="m-0 p-0 ms-2">
                  4th floor, Atlanta Shopping Mall, Althan Chokdi Vesu,
                  Althan-Bhimrad canal Road, Surat-395017
                </p>
              </div>
              <div>
                <img className="footer-logos" src={CALL_LOGO} alt="" />
                <span className="ms-2">+91 9227928283</span>
              </div>
              <div>
                <img className="footer-logos" src={MAIL_LOGO} alt="" />
                <span className="ms-2">bmsh.surat@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-white" />

        <div>
          <p className="text-white text-center pb-4 m-0">
            All Rights Reserved | Designed & eveloped by Tapti Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
