import LOGO from "../../assets/Logo.svg";
import HamburgerLOGO from "../../assets/Hamburger-button-Logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  function openHamburgerMenu() {}
  return (
    <>
      <div className="nav-container w-100 py-2">
        <div className="d-flex w-75  gap-5 justify-content-between justify-content-lg-center align-items-center mx-auto nav-text">
          <div className="nav-left d-flex gap-3 justify-content-center align-items-center ">
            <img className="nav-logo" src={LOGO} alt="bmsh-logo" />
            <p className=" fw-bold m-0 p-0">
              Bombay Maternity & Surgical Hospital
            </p>
          </div>

          <div className="nav-right m-0 fw-bold d-none d-lg-block">
            <ul className="d-flex gap-4 m-0 p-0 ">
              <li>
                <Link to="/" style={{ color: "#ED3237" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li className="d-inline-block " style={{ width: "6rem" }}>
                <a href="#">Blogs & News</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="hamberger-menu d-lg-none">
            <img
              src={HamburgerLOGO}
              alt="Hamburger-button-logo "
              onClick={openHamburgerMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const HamburgerMenu = () => {
  return <></>;
};
