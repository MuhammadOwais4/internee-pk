import React from "react";
import './section.css';
import employee from "./employee.png";

function Section() {
  const backgroundImageStyle = {
    backgroundColor: "rgba(55, 104, 40)", 
    backgroundImage: `url(${employee})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "130vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <section className="hero-section" style={backgroundImageStyle}>
        <div className="section-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="hero-section-text mt-5" style={{ marginLeft:"-70%",marginTop:"-10%" }}>
  <h6 style={{ color: "white", fontSize: "1.2rem" }}>Are you looking for your dream Internship?</h6>
  <h1 className="hero-title text-white mt-4 mb-4" style={{ color: "white", fontSize: "2.5rem", lineHeight: "1.4" }}>Join Internee.pk now..!</h1>
  <p style={{ color: "white", fontSize: "1.1rem" }}>
    Pakistan's Virtual Internship Platform Powered By{" "}
    <a href="https://techviochats.com/" style={{ fontWeight: "bold", color: "white" }}>
      TechvioChats
    </a>
  </p>
  <a href="#" style={{ color: "white", border: "2px solid white", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", display: "inline-block" }} id="styling" className="Button">
    Browse Internships
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}

export default Section;
