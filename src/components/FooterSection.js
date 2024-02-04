import React from "react";
import Logo from "../assets/logo-white.png";

const FooterSection = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-top  bg-gradient text-white ptb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <img
                      src={Logo}
                      style={{ width: "200px", height: "100px" }}
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                  </div>
                  <p>Creating solutions for you on time is our priority.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Primary Links</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a href="#home" className="text-decoration-none">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="text-decoration-none">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#services" className="text-decoration-none">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#works" className="text-decoration-none">
                            Our Works
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-decoration-none">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Other Links</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a href="#about" className="text-decoration-none">
                            Mission
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="text-decoration-none">
                            Vission
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="text-decoration-none">
                            Value
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Media</h3>
                      <div className="footer-single-col text-start text-lg-end text-md-end">
                        <ul
                          className="list-unstyled footer-social-list justify-content-between align-items-center"
                          style={{ display: "flex" }}
                        >
                          <li className="">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="">
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="">
                            <a href="#">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                          <li className="">
                            <a href="https://github.com/duwinko" target="blank">
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom  bg-gradient text-white py-4">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; @{new Date().getFullYear()} Duwinko
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
