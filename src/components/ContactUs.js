import React from "react";
import contactImg from "../assets/contact-img.jpg";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-us-form pt-60 pb-120">
        <div className="container">
          <div className="text-center">
            <h2>Reach Us</h2>
            <p>Let us get in touch with you</p>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8">
              <form className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="mb-1">
                      First name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        required
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <label className="mb-1">Last name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="mb-1">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        required
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="mb-1">
                      Email<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="mb-1">
                      Message <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        id="yourMessage"
                        required
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Get in Touch
                </button>
              </form>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="contact-us-img">
                <img src={contactImg} alt="contact us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
