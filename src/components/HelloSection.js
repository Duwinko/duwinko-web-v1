import React from "react";

const HelloSection = () => {
  return (
    <div>
      <section className="hero-it-solution ptb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 className="fw-bold display-5">
                  We Care Your any IT Solution
                </h1>
                <p className="lead">
                  We are a tech company that is well-experienced in software
                  development
                </p>
                <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <a href="" className="btn btn-primary me-3">
                    MORE ABOUT US
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img position-relative mt-5 mt-lg-0">
                <img
                  src="assets/img/banner_image.png"
                  alt="hero hero-it-solution "
                  className="img-fluid"
                />
                <div className="dots">
                  <img
                    src="assets/img/banner_dot.png"
                    alt="dot"
                    className="dot-1"
                  />
                  <img
                    src="assets/img/banner_dot.png"
                    alt="dot"
                    className="dot-2"
                  />
                </div>
                <div className="bubble">
                  <span className="bubble-1"></span>
                  <span className="bubble-2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelloSection;
