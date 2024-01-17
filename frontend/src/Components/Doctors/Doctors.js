import React from 'react'
import "./Doctors.css";
import {Link} from "react-router-dom"
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Doctors = () => {
  return (
    <div>
        <Navbar/>
    <div className="infoDoc">Available Doctors Now</div>
    <div>
    <div className="doctor-details-card">
        <div className="doctor-profile-image"></div>
        <div className='doctor-details'>
        <ul className='doctor-details-list'>
            <li>Name,Experience</li>
            <li>18 year experience overall</li>
            <li>All these expertises</li>
            <li>Address</li>
            <li>Ratings:</li>

            </ul>
            <Link to="/"><button>View Profile</button></Link>
        </div>
        <div className="buttonDoc">
            <button className="btnDoc">Connect Now</button>
            <div className="btn-info">500 Consultation Fee</div>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Doctors
