import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="portfolio bg-light ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Our Works</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, provident odio sit at quos pariatur.
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
                          src="assets/img/portfolio/portfolio1.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Website Design Project
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Design,</span>
                            <span>Web</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src="assets/img/portfolio/portfolio2.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Leafery Branding
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Branding,</span>
                            <span>Logo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src="assets/img/portfolio/portfolio3.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Information Architencure
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Branding,</span>
                            <span>Logo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src="assets/img/portfolio/portfolio4.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              User Interface Design
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src="assets/img/portfolio/portfolio5.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Information Architencure
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Branding,</span>
                            <span>Logo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src="assets/img/portfolio/portfolio6.jpg"
                          alt="portfolio photo"
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href="portfolio-single.html"
                              className="text-decoration-none text-white"
                            >
                              Branding & Corporate Identity
                            </a>
                          </h5>
                          <div className="categories">
                            <span>Branding,</span>
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
