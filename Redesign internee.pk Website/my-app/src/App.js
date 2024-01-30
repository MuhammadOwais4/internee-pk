
import React from "react";
import Header from "./screens/Header/Header"
import Section from "./screens/Section/Section"
import AboutSection from "./screens/about-section/about-section"
import Categories from "./screens/Categories/Categories";
import TechLaunchSection from "./screens/TechLaunchSection/TechLaunchSection"
import JobSection from "./screens/jobsection/JobSection";
import Testimonial from "./screens/Testimonial/Testimonial"
import Footer from "./screens/Footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <AboutSection />
      <Categories />
      <TechLaunchSection />
      <JobSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
