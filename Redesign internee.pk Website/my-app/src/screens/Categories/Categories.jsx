import React from 'react';
import './Categories.css'; 
import { BsWindow,BsRobot,BsVectorPen } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Categories = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h2 class="mb-5">Browse by <span>Categories</span></h2>

    <div className="container">
      <article className="col">
        <div className="spacer"></div>
        <div className="outline">
          <div className="circle">
            <div className="wrapcontent">   
              <BsWindow  style={{fontSize:"50", color:"white"}}/>
              <p>Website Designing</p>
            </div>
          </div>
        </div>
      </article>
      <article className="col">
        <div className="spacer"></div>
        <div className="outline">
          <div className="circle">
            <div className="wrapcontent">   
              <FaGlobe   style={{fontSize:"50", color:"white"}}/>
              <p> Web Development</p>
            </div>
          </div>
        </div>
      </article>
      <article className="col">
        <div className="spacer"></div>
        <div className="outline">
          <div className="circle">
            <div className="wrapcontent">   
              <BsRobot   style={{fontSize:"50", color:"white"}}/>
              <p>CRM's & Chatbot Development</p>
            </div>
          </div>
        </div>
      </article>
      <article className="col">
        <div className="spacer"></div>
        <div className="outline">
          <div className="circle">
            <div className="wrapcontent">   
              <BsVectorPen   style={{fontSize:"50", color:"white"}}/>
              <p>Graphic Designing & 3D Modeling</p>
            </div>
          </div>
        </div>
      </article>
      <article className="col">
        <div className="spacer"></div>
        <div className="outline">
          <div className="circle">
            <div className="wrapcontent">   
              <MdOutlinePhoneIphone  style={{fontSize:"50", color:"white"}}/>
              <p>Website Designing</p>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>
  );
};

export default Categories;
