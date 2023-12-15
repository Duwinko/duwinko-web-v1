import React, {useEffect, useState} from "react";
import Logo from "../assets/Logo-v2.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })


  return (
    <div>
      <header className={`${navbar ? "bg-white" : "bg-none"} main-header position-fixed w-100 z-10`} style={{height: "100px" }}>
        <nav className="navbar navbar-expand-xl navbar-light">
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <a
              href="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src={Logo}
                style={{ width: "200px", height: "80px" }}
                alt="logo"
                className="img-fluid logo-color"
              />
            </a>

            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#works" className="nav-link">
                    Our Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Font awesome icon */}
            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block ">
              <a href="https://www.linkedin.com/in/duwinko-company-4419a5251/" target='brank' className="m-2">
                <i className="fa-brands fa-linkedin fs-4"></i>
              </a>
              <a href="https://twitter.com/duwinko" target='brank' className="m-2">
                <i className="fa-brands fa-twitter fs-4"></i>
              </a>
              <a href="https://www.instagram.com/duwinko/" target='brank' className="m-2">
                <i className="fa-brands fa-instagram fs-4"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
