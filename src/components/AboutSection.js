import React from "react";
import hImgOne from "../assets/h-img1.jpg";

const AboutSection = () => {
  return (
    <div>
      <section className=" ptb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left text-lg-center mb-32 mb-lg-0">
                <img src={hImgOne} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <h4 className="text-primary h5 mb-3">Why Choose Us</h4>
                <h2 className="mb-4">
                  We provide <br />
                  the best of your desire
                </h2>
                <p>
                  Duwinko's main target is to be the clients' first choice by
                  giving them the best software product that match their needs
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <div className="d-flex about-icon-box align-items-center">
                      <div className="me-3">
                        <img src="assets/img/pie-chart.png" alt="" />
                      </div>
                      <div>
                        <h5>We are Expert in IT</h5>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="d-flex about-icon-box align-items-center">
                      <div className="me-3">
                        <img src="assets/img/team.png" alt="" />
                      </div>
                      <div>
                        <h5>We Make Best Product For Business</h5>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Understanding customer needs
                  </li>
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Tech stack expertise helps
                  </li>
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Customer support
                  </li>
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Delivering on time
                  </li>
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Long-term relationship
                  </li>
                  <li className="py-1">
                    <i className="fad fa-check-circle me-2 text-primary"></i>
                    Projects follow up
                  </li>
                </ul>
                <a
                  href="#"
                  className="link-with-icon text-decoration-none mt-3 btn btn-primary"
                >
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Mission vision and goals */}
          <div className="m-v-g-container d-flex align-items-center mt-5 pt-5">
            <div className="about-card d-flex">
              <div className="about-icon-container bg-primary text-light">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="about-content">
                <h4 className="h5 mb-3">Our Mission</h4>
                <p>
                  Our mission is to develop a software product that help
                  decrease the failure rates of software projects that lead to
                  the success of the companies.
                </p>
              </div>
            </div>
            <div className="about-card d-flex">
              <div className="about-icon-container bg-primary text-light">
                <i className="fa-solid fa-eye-low-vision"></i>
              </div>
              <div className="about-content">
                <h4 className="h5 mb-3">Our Vision</h4>
                <p>
                  Our Vision is to provide software for businesses in order to
                  lower the high failure rate that affects them globally.
                </p>
              </div>
            </div>
            <div className="about-card d-flex">
              <div className="about-icon-container bg-primary text-light">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div className="about-content">
                <h4 className="h5 mb-3">Our Goals</h4>
                <p>
                  Reduce the cost, effort, time, and risk of software projects
                  in a proven and reliable way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
