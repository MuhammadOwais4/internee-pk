import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import founderImage from "./founder.jpg";
import RayyanImage from "./rayyan.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function AboutSection() {
  return (
    <>
    <br />
    <br />
    <br />
      <Carousel responsive={responsive}>
        <div style={{ display: "flex", justifyContent: "center", marginLeft: "12%" }}>
          <div className="card" style={{ width: "28rem" }}>
            <img src={founderImage} className="card-img-top" alt="Founder" width={350} />
            <h2 className="card-text">Hammad Sheikh</h2>
            <p className="card-text">Founder</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center"   }}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title" style={{marginLeft:"5%"}}>Welcome to Internee.pk      
              </h2>
              <p>Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and
              <a href="/job-listings.html" style={{ color: "#30e792", fontWeight: "bolder" }} target="_parent">Apply Today</a>
              </p>
              <br />
              <div class="custom-border-btn-wrap d-flex align-items-center mt-5">
              <a href="about.html" class="custom-btn custom-border-btn btn me-4">Get to know us</a>
              <a href="job-listings.html" class="custom-link smoothscroll" style={{marginLeft:"5%"}}>Explore Internships</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="card" style={{ width: "28rem" }}>
            <img src={RayyanImage} className="card-img-top" alt="Rayyan" width={350} />
            <h2 className="card-text">Hammad Sheikh</h2>
            <p className="card-text">CMO</p>
           </div>
        </div>
      </Carousel>
    </>
  );
}

export default AboutSection;
