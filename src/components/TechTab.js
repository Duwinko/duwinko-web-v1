import React from "react";
import hImgFour from "../assets/h-img4.png";

const TechTab = () => {
  return (
    <div>
      <section className="ptb-120 bg-dark" id="tech">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="text-center">
                <h2>We Build all Kinds Of Technology</h2>
                <p>
                  The world is changing very fast because of technology. We can
                  truly make an impact on that by building the best software.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="service-tabs">
                <ul className="nav nav-pills d-flex justify-content-center">
                  <li className="nav-item">
                    <button className="nav-link me-4">
                      <i className="fas fa-desktop me-3"></i>
                      <span>Web Development</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link me-4">
                      <i className="fas fa-tablet-alt me-3"></i>
                      <span>App Development</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link me-4">
                      <i className="fas fa-vector-square me-2"></i>
                      <span>UX/UI Design</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="tab-content-wrapper pt-60">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="text-center mb-5 mb-lg-0">
                        <img src={hImgFour} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab-right-content">
                        <h2>
                          We have the best team <br />
                          for your software
                        </h2>
                        <p>
                          We provide the best management system for businesses.
                          We share ideas with clients to provide a beautiful
                          software product by prioritizing clients' needs.
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <i className="fas fa-check text-primary"></i>
                            <span>Website and System development</span>
                          </li>
                          <li>
                            <i className="fas fa-check text-primary"></i>
                            <span>Mobile App development</span>
                          </li>
                          <li>
                            <i className="fas fa-check text-primary"></i>
                            <span>UI/UX design</span>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="text-white link-with-icon text-decoration-none"
                        >
                          More Info
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechTab;
