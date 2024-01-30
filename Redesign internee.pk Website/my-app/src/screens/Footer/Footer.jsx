import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs';
import Logo from './Logo.jpg';
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <Container>
        <footer className="py-5">
          <div className="container">
            <nav>
              <div className="logo-container">
                <img src={Logo} alt="Internee.Pk Logo" className="logo" />
                <div className="logo-text">
                  <span className='c1'>Internee.<span>Pk</span></span>
                  <strong><span className='c3'>Virtual Internship PLATFORM</span></strong>
                </div>
              </div>
            </nav>
            <Row>
              <Col md={3} className="mb-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      <Row>
                        <a href="https://www.internee.pk" style={{ marginLeft: "2%" }}>www.internee.pk</a>
                      </Row>
                      <Row>
                        <a href="#">+92 345 3191638</a>
                        <br />
                        <a href="#">+92 349 2861021</a>
                      </Row>
                      <Row>
                        <a href="#" style={{ marginLeft: "2%" }}>info@internee.pk</a>
                      </Row>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Company
                    </a>
                    <Row>
                      <Col><a href="#">Home</a></Col>
                      <br />
                      <Col><a href="#">About</a></Col>
                      <br />
                      <Col><a href="#">Internships</a></Col>
                      <br />
                      <Col><a href="#">Contact</a></Col>
                    </Row>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Resources
                    </a>
                    <Row>
                      <Col><a href="#">Discord Server</a></Col>
                      <br />
                      <Col><a href="#">Blog</a></Col>
                      <br />
                      <Col><a href="#">Podcast</a></Col>
                      <br />
                    </Row>
                  </li>
                </ul>
              </Col>
              <Col md={5} offset-md={1} className="mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </footer>
      </Container>
    
    </>
  );
}

export default Footer;
