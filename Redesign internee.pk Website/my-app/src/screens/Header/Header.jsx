import React from 'react';
import './Header.css';
import logo from './Logo.jpg';

function Header() {
  return (
    <div className="container">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Internee.Pk Logo" className="logo" />
          <div className="logo-text">
            <span className='c1'>Internee.<span>Pk</span></span>
            <strong><span className='c3'>Virtual Internship PLATFORM</span></strong>
          </div>
        </div>
        <div className="menu-container">
          <ul>
            <li>
              <a href="#" className="active">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Internship</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">LMS <sup>new</sup></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/soon.html">Job Portal<sup>Coming Soon</sup></a>
            </li>
            <li className="nav-item">
              <button className="button">Internee Portal</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
