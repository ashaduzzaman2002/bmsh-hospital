import LOGO from "../../assets/Logo.svg";
import HamburgerLOGO from "../../assets/Hamburger-button-Logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink }) => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Team",
      path: "/team",
    },
    {
      name: "Blogs & News",
      path: "/blogs&news",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <div className="nav-left d-flex gap-xl-3 gap-2 justify-content-center align-items-center ">
            <img className="nav-logo" src={LOGO} alt="bmsh-logo" />
            <p className="mb-0">Bombay Maternity & <br /> Surgical Hospital</p>
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((item, i) => (
              <li key={i} class="nav-item">
                <Link
                  class={`nav-link ${activeLink === item.name && "activeLink"}`}
                  aria-current="page"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
