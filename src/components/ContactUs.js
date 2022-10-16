import React, { useState } from "react";
import contactImg from "../assets/contact-img.jpg";
import sanityClient from "../client.js";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessfullySent, setIsSuccessfullySent] = useState(false);

  const submitContactUs = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const contacts = {
      _type: "contacts",
      fullName: fullName,
      phone: phone,
      email: email,
      message: message,
    };

    sanityClient.create(contacts).then((res) => {
      setIsSubmitting(false);

      setIsSuccessfullySent(true);
      setTimeout(() => {
        setIsSuccessfullySent(false);
      }, 5000);

      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");
    });
  };

  return (
    <div>
      <section className="contact-us-form pt-60 pb-120">
        <div className="container">
          <div className="text-center">
            <h2>Reach Us</h2>
            <p>Let us get in touch with you</p>
          </div>
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-lg-6 col-md-8">
              <form className="register-form" onSubmit={submitContactUs}>
                <div className="row">
                  <div className="col-12">
                    <label className="mb-1">Full name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Full name"
                        value={fullName}
                        required
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4 d-flex align-items-center"
                >
                  {isSubmitting && <div className="loader"></div>}
                  Get in Touch
                </button>
              </form>
              {isSuccessfullySent && (
                <p className="sussess-msg">
                  The message is sent successfully, Thank you for contancting us
                </p>
              )}
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
