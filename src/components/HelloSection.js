import React from "react";
import hImgTwo from "../assets/h-img2-v2.png";

const HelloSection = () => {
  return (
    <div>
      <section className="hero-it-solution home-background ptb-120" id="home">
        <div className="container">
          <div className="row align-items-center pt-4">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 className="fw-bold display-5">
                  We develop and build the company's software and IT solutions.
                </h1>
                <p className="lead">
                  We are a tech company that is well-experienced in software
                  development and information technology solutions.
                </p>
                <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <a href="#about" className="btn btn-primary me-3">
                    MORE ABOUT US
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img position-relative mt-5 mt-lg-0">
                <img src={hImgTwo} alt="" className="img-fluid" />
                <div className="dots">
                  <img
                    src="assets/img/banner_dot.png"
                    alt=""
                    className="dot-1"
                  />
                  <img
                    src="assets/img/banner_dot.png"
                    alt=""
                    className="dot-2"
                  />
                </div>
                <div className="bubble">
                  {/* <span className="bubble-1"></span> */}
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
