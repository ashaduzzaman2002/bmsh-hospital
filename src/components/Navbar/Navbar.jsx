import LOGO from "../../assets/Logo.svg";
import HamburgerLOGO from "../../assets/Hamburger-button.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  function openHamburgerMenu() {}
  return (
    <>
      <div className="w-100 py-2">
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

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav> */}
    </>
  );
};

export default Navbar;

const HamburgerMenu = () => {
  return <></>;
};
