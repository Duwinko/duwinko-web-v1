import React from "react";
import Logo from "../assets/Logo-v2.png";

const Navbar = () => {
  return (
    <div>
      <header className="main-header position-absolute w-100">
        <nav className="navbar navbar-expand-xl navbar-light">
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <a
              href="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src={Logo}
                style={{ width: "200px", height: "80px" }}
                alt="logo"
                className="img-fluid logo-color"
              />
            </a>

            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#works" className="nav-link">
                    Our Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Font awesome icon */}
            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block ">
              <a href="" className="m-2">
                <i className="fa-brands fa-linkedin fs-4"></i>
              </a>
              <a href="" className="m-2">
                <i className="fa-brands fa-twitter fs-4"></i>
              </a>
              <a href="" className="m-2">
                <i className="fa-solid fa-envelope fs-4"></i>
              </a>
              <a href="" className="m-2">
                <i className="fa-brands fa-instagram fs-4"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
