import React from "react";
import userImg from "../assets/userImg.png";

const Testimonial = () => {
  return (
    <div>
      <section
        className="testimonial-section bg-light pb-120"
        id="testimonials"
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h4 className="h5"></h4>
                <h2>Testimonial</h2>
                <p>What they say</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="position-relative w-100">
              <div className="col-lg-9 col-sm-12" style={{ margin: "0 auto" }}>
                <div className="p-4 bg-white rounded-custom position-relative shadow-sm">
                  <p>
                    I just wanted to share a quick note and let you know that
                    you guys do a really good job. I’m glad I decided to work
                    with you. It’s really great how build my website. I never
                    have any problem at all.
                  </p>

                  <div className="author d-flex">
                    <div className="author-img me-3">
                      <img
                        src={userImg}
                        alt=""
                        className="rounded-circle"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="author-info">
                      <h6 className="m-0">Emmanuel Niyomukiza</h6>
                      <span>CEO and Founder at NRC ltd</span>
                      <ul className="review-rate mb-0 list-unstyled list-inline">
                        <li className="list-inline-item">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                      </ul>
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

export default Testimonial;
