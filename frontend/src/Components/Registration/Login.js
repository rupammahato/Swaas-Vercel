import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import swaaslogo from '../SwaasIcons/swaaslogo.png'
import Navbar from '../Navbar/Navbar'
const Login = () => {
  return (
    <div>
    <header className='headerHome'>
                <div className="dropdown">
                </div>
                <img src={swaaslogo} alt="swaas" className='swaas-logo'/>
                <div className="nav-bar">
                    <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
                    <Link to='/Teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
                    <Link to='/MedicalReports'><div className='navbar-elements'>Medical Reports</div> </Link>
                    <Link to='/BillsandInsuarance'><div className='navbar-elements'>Insurance</div></Link>
                </div>
                <div className="LoginButtonHome">
                </div>
            </header>
    </div>
  )
}

export default Login
