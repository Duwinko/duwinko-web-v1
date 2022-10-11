import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services-icon ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading text-center">
                <h2>Services We Provide</h2>
                <p>We are ready to provide the following services for you</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/coding.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="service-info-wrap">
                  <h3 className="h5">Web Development</h3>
                  <p>
                    We develop a very beautiful and amazing website with the
                    best design and high performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/app-development.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="service-info-wrap">
                  <h3 className="h5">App Development</h3>
                  <p>
                    We provide a Mobile apps that can help you to run your
                    business successfully
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center mt-3 border-bottom">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/shield.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="service-info-wrap">
                  <h3 className="h5"> MIS</h3>
                  <p>
                    We build the best management information system that is very
                    supportive to the business
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center border-end">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/curve.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">UI/UX Design</h3>
                  <p>
                    We provide the best and clear designs for both web and
                    mobile applications
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center border-end">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/graphic-design.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Project Analysis</h3>
                  <p>
                    We work with clients to develop and analyse the project with
                    the best ideas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-service p-lg-5 p-4 text-center">
                <div className="service-icon icon-center">
                  <img
                    src="assets/img/service/promotion.png"
                    alt="service icon"
                    width="65"
                    height="65"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Computer Service Support</h3>
                  <p>
                    We make all necessary computer services support to make your
                    life better
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
