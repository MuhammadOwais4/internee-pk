import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonial.css';
import testimonial1 from'./testimonial1.png'
import testimonial2 from'./testimonial2.png'
import testimonial3 from './testimonial3.png'
import { FaStar } from "react-icons/fa";
// import { CiStar } from "react-icons/ci";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Testimonial() {
  return (
    <>
      <br />
      <br />
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Happy Internee Reviews</h2>
      </div>
      <br />
      <Carousel responsive={responsive}>
        <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 2"
            style={{ width: "20%", borderRadius: "50%", marginLeft:"22%" }}
         /> 
         <FaStar style={{marginLeft:"85%",marginTop:"-20%",color:"#8A2BE2"}}/><FaStar color="#8A2BE2"/>
         <FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/>
         <p style={{marginLeft:"22%"}}><strong>Obaid Muneer</strong>
          <br />
          AI & Chatbot Developer
         </p>
         <h5 style={{margin:"5%"}} >This internship gives me challanges through which it helps me grew myself in the field of Chatbot development.</h5>
         </div>
         <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 2"
            style={{ width: "20%", borderRadius: "50%", marginLeft:"22%" }}
         /> 
         <FaStar style={{marginLeft:"85%",marginTop:"-20%",color:"#8A2BE2"}}/><FaStar color="#8A2BE2"/>
         <FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/>
         <p style={{marginLeft:"22%"}}><strong>Rasib Ahmed</strong>
          <br />
          Graphic Designer
         </p>
         <h5 style={{margin:"5%"}} >This internship oppurtunity boost my pen's productivity and helps me to increase the design knowladge and branding</h5>
         </div>
         <div className="testimonial-item">
          <img
            src={testimonial3 }
            alt="Testimonial 2"
            style={{ width: "20%", borderRadius: "50%", marginLeft:"22%" }}
         /> 
         <FaStar style={{marginLeft:"85%",marginTop:"-20%",color:"#8A2BE2"}}/><FaStar color="#8A2BE2"/>
         <FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/>
         <p style={{marginLeft:"22%"}}><strong>Shafiq Ashfaque</strong>
          <br />
          Data Engineer
         </p>
         <h5 style={{margin:"5%"}} >Being Data enthusiast, internee.pk internship helps me to programed more and solve more data related problems during the task</h5>
         </div>
         <div className="testimonial-item">
          <img
            src={testimonial1}
            alt="Testimonial 2"
            style={{ width: "20%", borderRadius: "50%", marginLeft:"22%" }}
         /> 
         <FaStar style={{marginLeft:"85%",marginTop:"-20%",color:"#8A2BE2"}}/><FaStar color="#8A2BE2"/>
         <FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/><FaStar color="#8A2BE2"/>
         <p style={{marginLeft:"22%"}}><strong>Hafsa Nadeem</strong>
          <br />
          Web Developer
         </p>
         <h5 style={{margin:"5%"}} >Internee.pk helps me to scale my programing skills and now i am good in JAVASCRIPT programing especially in Front End development</h5>
         </div>
      </Carousel>
      <br />
      <section style={{ backgroundColor: "#376828" }} className="cta-section">
  <div style={{ backgroundColor: "#376828" }} className="section-overlay">
    <h2 style={{ color: "white" }}>Internships every month</h2>
    <p style={{color:"white"}}>Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the
    country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT
     field</p>
  </div>
</section>

    </>
  );
}

export default Testimonial;
