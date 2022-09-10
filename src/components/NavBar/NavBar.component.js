import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.styles.css'
//import { FaEnvelope, FaFacebook, /*FaFacebookF,*/ FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="header-sec">
          
      <div className="nav_bar">
        <div className="logo">
          <h1>
            Starlight <em>Foundation</em>
          </h1>
        </div>
        <div className="routes">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="about">About</Link></li>
            <li> <Link to="registerdonor">Register_Donors</Link></li>
            <li> <Link to="viewdonor">View_Donors</Link></li>
            {/* <li> <Link to="petsdata">Pets Data</Link></li> */}
            {/* <li> <Link to="/home"/>Pets Data</li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar