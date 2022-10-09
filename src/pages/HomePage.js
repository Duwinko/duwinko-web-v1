import React from "react";
import AboutSection from "../components/AboutSection";
import ContactUs from "../components/ContactUs";
import FooterSection from "../components/FooterSection";
import HelloSection from "../components/HelloSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TechTab from "../components/TechTab";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HelloSection />
      <AboutSection />
      <TechTab />
      <Services />
      <Projects />
      <Testimonial />
      <ContactUs />
      <FooterSection />
    </div>
  );
};

export default HomePage;
