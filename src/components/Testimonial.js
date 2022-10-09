import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="testimonial-section bg-light ptb-120">
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h4 className="h5">Testimonial</h4>
                <h2>What’s Clients Say</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, provident odio sit at quos pariatur
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="position-relative w-100">
              <div className="col-lg-9 col-sm-12" style={{ margin: "0 auto" }}>
                <div className="p-4 bg-white rounded-custom position-relative shadow-sm">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, provident odio sit at quos pariatur provident
                    odio sit at quos pariatur
                  </p>

                  <div className="author d-flex">
                    <div className="author-img me-3">
                      <img
                        src="assets/img/testimonial/author1.jpg"
                        alt="author photo"
                        className="rounded-circle"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="author-info">
                      <h6 className="m-0">Alex Loverty</h6>
                      <span>Product Designer</span>
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
