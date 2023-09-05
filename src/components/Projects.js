import React from "react";
import projectOne from "../assets/ProjectOne.png";
import projectTwo from "../assets/projectTwo.png";
import ProjectThree from "../assets/projectThree.png";
import ProjectFour from "../assets/projectFour.png";
import ProjectFive from "../assets/projectFive.png";

const Projects = () => {
  return (
    <div>
      <section className="portfolio bg-light ptb-120" id="works">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Our Works</h2>
                <p>
                  Creating and delivering projects on time are important
                  elements in business; the list below contains the projects
                  we did.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="tab-content" id="pills-tabContent">
              {/* <!-- All --> */}
              <div
                className="tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={projectOne}
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Lebambe Saint Joseph
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Web Application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={projectTwo}
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="https://www.niyorwandacad.com/"
                              className="text-decoration-none text-white"
                            >
                              Construction company website
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Web Application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={ProjectThree}
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="https://www.samproltd.com/"
                              className="text-decoration-none text-white"
                            >
                              Sampro website
                            </a>
                          </h5>
                          <div className="categories">
                            <span>web Application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={ProjectFour}
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="https://dashboard.samproltd.com/"
                              className="text-decoration-none text-white"
                            >
                              Samproltd dashboard
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Web Application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={ProjectFive}
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Figma design
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Figma design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* TODO: In the future we can divide this project into categories
              EX: Mobile projects, Web Project, UI project ... */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
