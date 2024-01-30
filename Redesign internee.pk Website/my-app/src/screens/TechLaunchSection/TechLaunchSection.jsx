import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Teamcompany from'./Teamcompany.jpg'
const TechLaunchSection = () => {
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
    return (
    <>
    <br />
    <br />
        <Carousel responsive={responsive}>
        <div className="col-lg-6 col-12" style={{marginLeft:"20%"}}>
      <div className="custom-text-block custom-border-radius-start">
        <h2 className="text-white mb-3">Launching tech careers with internships, exposure, and networking.</h2>

        <p className="text-white">Internee.pk kickstarts students' tech careers with first internships,
          providing industry exposure, practical skills, and networking opportunities, paving the
          way for their success in the tech industry.</p>

        <div className="d-flex mt-4">
          <div className="counter-thumb">
            <div className="d-flex">
              <span className="counter-number" data-from="1" data-to="5000" data-speed="1000"></span>
            </div>
          </div>
     </div>
      </div>
    </div>
        <div style={{ display: "flex", justifyContent: "center",  marginLeft:"120%"}}>
          <div className="card" style={{ width: "28rem" }}>
            <img src={Teamcompany} className="card-img-top" alt="Rayyan" width={450} />
           </div>
        </div>
      </Carousel>
    </>
    );
};

export default TechLaunchSection;
