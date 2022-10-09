import React from "react";
import Logo from "../assets/Logo.png";

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
                      style={{ width: "200px", height: "70px" }}
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                  </div>
                  <p>
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Primary Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a href="index.html" className="text-decoration-none">
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="about-us.html"
                            className="text-decoration-none"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="services.html"
                            className="text-decoration-none"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="career.html"
                            className="text-decoration-none"
                          >
                            Career
                          </a>
                        </li>
                        <li>
                          <a
                            href="integrations.html"
                            className="text-decoration-none"
                          >
                            Integrations
                          </a>
                        </li>
                        <li>
                          <a
                            href="integration-single.html"
                            className="text-decoration-none"
                          >
                            Integration Single
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a
                            href="pricing.html"
                            className="text-decoration-none"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" className="text-decoration-none">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-single.html"
                            className="text-decoration-none"
                          >
                            Blog Details
                          </a>
                        </li>
                        <li>
                          <a
                            href="contact-us.html"
                            className="text-decoration-none"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="career-single.html"
                            className="text-decoration-none"
                          >
                            Career Single
                          </a>
                        </li>
                        <li>
                          <a
                            href="service-single.html"
                            className="text-decoration-none"
                          >
                            Services Single
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Template</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a
                            href="contact-us.html"
                            className="text-decoration-none"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="support.html"
                            className="text-decoration-none"
                          >
                            Support
                          </a>
                        </li>
                        <li>
                          <a
                            href="support-single.html"
                            className="text-decoration-none"
                          >
                            Support Single
                          </a>
                        </li>
                        <li>
                          <a href="team.html" className="text-decoration-none">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a
                            href="client-review.html"
                            className="text-decoration-none"
                          >
                            Customer Review
                          </a>
                        </li>
                        <li>
                          <a
                            href="career-single.html"
                            className="text-decoration-none"
                          >
                            Career Single
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
        <div className="footer-bottom  bg-gradient text-white py-4">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">&copy; 2022 Duwinko</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
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
