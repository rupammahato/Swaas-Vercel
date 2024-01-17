import React from 'react'
import "./MentalHealth.css"
import {Link} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import mentalhealth from '../SwaasIcons/mentalhealth-1.png'
const MentalHealth = () => {
  return (
    <div >
      <Navbar/>
      <main className='mentalhealth-main'>
          <div className="infoMental">
              <div className="heading">
                  <p className="HI HI1">Discover Mental Health Care</p>
                  <p className="HI HI2">Solution</p>
                  <p className="info1">Online Councilling Threapy With Top</p>
                  <p  className="info1">Physiologist Any time, Any where, Any device</p>
                  <Link to='/'><button className="buttonMental">View Our Counselor</button></Link>
              </div>   
          </div>
          <div>
            <img src={mentalhealth} alt="" className="mentalhealth-main-image"/>
          </div>
      </main>
      <p className="INF-H">Choose Help. Not Suffering.</p>
      <div className="info2">
          <div className="photo2Mental"></div>
          <div className="info3">
              <p className="para">Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process.</p>
          <button id="button2">Get Started</button>
          </div>
      </div>
      <p className="INF-H">Specialised Help For Your Mental Health</p>
      <div className="nav">
          <div className="nav1">Anexiety & Stress</div>
          <div className="nav1">Depression</div>
          <div className="nav1">Relationship  Issues</div>
      </div>
    </div>
  )
}

export default MentalHealth
