import React from 'react'
import "./Emergency.css"
import {Link} from "react-router-dom"
import Footer from '../Footer/Footer'
import swaaslogo from '../SwaasIcons/swaaslogo.png'
const Emergency = () => {
  return (
    <div>
      <header className='header-aboutus'>
      <img src={swaaslogo} alt="swaas" className='swaas-logo'></img>
      </header>
    <div id="medicalbook">
        <div>
            <h1>Emergency Medical Book Page</h1> 
            <p>Medical emergency? Contact with us in 60 seconds</p> 
          <div className="Adi"><button id="bookmedical" >Book Now</button>
          </div> </div>
        <div className='medicalbookpic'>
                  </div>
    </div>
    <h1 id="hospitalnear">Hospital Nearby</h1>
    <div id="hospitallocdiv">
        <input id="hospitalloc" type="text" placeholder="City, State"/>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><Link to="/">View Now</Link></button>
    </div>
    <Footer/>
    </div>
  )
}

export default Emergency
