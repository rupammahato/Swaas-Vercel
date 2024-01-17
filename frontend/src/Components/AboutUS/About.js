import React from 'react'
import "./About.css";
import {Link} from "react-router-dom"
import swaaslogo from '../SwaasIcons/swaaslogo.png'
const About = () => {
  return (
    <div>
    <header className='header-aboutus'>
        <Link to="/"><img src={swaaslogo} alt="swaas" className='swaas-logo'/></Link>
        <div className="navbar-aboutus">
            <Link to='/'><div className='navbar-elements'>Features</div></Link>
            <Link to='/'><div className='navbar-elements'>Industries</div></Link>
            <Link to='/'><div className='navbar-elements'>Contact us</div> </Link>
            <Link to='/'><div className='navbar-elements'>Reviews</div></Link>
            <Link to='/'><div className='navbar-elements'>Complain</div></Link>
            <Link to='/'><div className='navbar-elements'>Join us</div></Link>
        </div>
    </header>
    <div className='tagline'>MAKING HEALTHCARE ACCESIBLE TO EVERYONE</div>
    <div className="mission">
        <div id="missiontext">
            <div className='aboutus-mission-heading'>Our Mission</div> 
            <div className='aboutus-para'>Swaas is on a mission to make healthcare available easily for over a billion+ people across the globe through every channel. Our values lie in providing our patients with a complete help for their health problems. We serve our patients in every possible way. We also believe in empowering our users with most viable comprehensive accurate an curated information and care enabling them to make better descisions regarding their health. We want to make our systems so strong so that we can connect any patient to any health care service provider in the world. </div>
        </div>
    </div>
    <div className="aboutus">
        <div className="abouttext">
            <div className='aboutus-about-heading'>About Us</div>
            <div className='aboutus-para'>Swaas is a complete solution needed to jump the obstacles available in the health care space. We provide and connect our patients with every healthcare provider.</div>
        </div>
    </div>
    <div className="offering">
        <div className="offeringtext">
            <div className='aboutus-offering-heading'>Our Offering</div> 
            <div className='aboutus-para'>
            <ul>
                <li className='offering-heading'>OPD Booking<span className='offerings-description'> with detailed information transfer according to scrutiny of the patient with hospital throughout India</span></li>
                <li className='offering-heading'>Emergency<span className='offerings-description'></span></li>
                <li className='offering-heading'>Teleconsultation<span className='offerings-description'></span></li>
                <li className='offering-heading'>Medical Reports<span className='offerings-description'></span></li>
                <li className='offering-heading'>Bills and Insurance<span className='offerings-description'></span></li>
                <li className='offering-heading'>Buying Medicines<span className='offerings-description'></span></li>
                <li className='offering-heading'>Mental Health Space<span className='offerings-description'></span></li>
            </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
