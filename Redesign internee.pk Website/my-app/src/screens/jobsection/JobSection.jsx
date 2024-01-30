import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import analysis from './analysis.jpg';
import hack from './hack.jpeg';
import cloud from './cloud.jpg';
import FrontEnd from'./FrontEnd.jpeg' 
import BackendDevelopment from './BackendDevelopment.jpeg'
import chatbotDevelopment from './chatbotDevelopment.jpeg'
import MachineLearning from './Machine Learning.jpeg'
import MobileAppDeveloper from './Mobile App Developer.jpeg'
import logodesigner from'./logo-designer.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import './JobSection.css';
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

function JobSection() {
  return (
    <>
      <div className="container">
        <h2>Recent Internships</h2>
        <p>
          <strong>Internships come every two months</strong> Grab your internships in your
          <br /> favorite domain to boost yourself in the field of Computer technology
        </p>
      </div>
      <br />
      <Carousel responsive={responsive}>
        <div>
          <img src={analysis} alt="Analysis"  width={"90%"}/>
          <h1>Data Analyst</h1>
         <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
         <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={hack} alt="Analysis 2"   width={"90%"}/>
          <h1>Cyber Security</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={cloud} alt="Analysis 3"   width={"90%"}/>
          <h1>Cloud Computing</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
    
      </Carousel>
      <br />
      <br />
      <Carousel responsive={responsive}>
        <div>
          <img src={FrontEnd} alt="Analysis"  width={"90%"}/>
          <h1>Frontend Development</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={BackendDevelopment} alt="Analysis 2"   width={"90%"}/>
          <h1>Backend Development</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={chatbotDevelopment} alt="Analysis 3"   width={"90%"}/>
          <h1>Chatbot Development</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
    
      </Carousel>
      <br />
      <br />
      <Carousel responsive={responsive}>
        <div>
          <img src={MachineLearning} alt="Analysis"  width={"90%"}/>
          <h1>Machine Learning</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={MobileAppDeveloper} alt="Analysis 2"   width={"90%"}/>
          <h1>Mobile App Development</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
        <div>
          <img src={logodesigner} alt="Analysis 3"   width={"90%"}/>
          <h1>Graphic Design</h1>
          <p>  <FaMapMarkerAlt  color="#43a724"/>Remote<FaRegClock  style={{marginLeft:"2%",color:"#43a724"}}/>1 Month</p>
          <button class="button" style={{marginLeft:"50%"}}>Appply Now</button>
        </div>
      </Carousel>
      <br />
      <br />
      <button class="button1" style={{marginLeft:"90%"}}>Appply Now</button>
    </>
  );
}

export default JobSection;
