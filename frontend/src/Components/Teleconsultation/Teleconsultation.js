import "./Teleconsultation.css";
import {Link} from "react-router-dom"
import teleconsultation from '../SwaasIcons/teleconsultatation.png'
import Navbar from "../Navbar/Navbar";
const Teleconsultation = () => {
  return (
    <div >
        <Navbar/>
        <div className='teleconsultation-main'>
                <div className="headingTele">
                    <p className="TeleHI1">Skip The Travel!</p>
                    <p className="TeleHI2">Take Online Doctor Consultation</p>
                    <p className="Teleinfo1">Private Consultation + Audio Call : Starts at just 199</p>
                    <p  className="Teleinfo1">+ 124 Doctors are online</p>
                    <div className="Adi"> 
                        <div className="button" id="button1">Consult Now</div>
                    </div> 
                    <p className="infoLinks">
                        <a href="/" className="VD">Verified Doctors</a> 
                        <a href="/" className="DP">Digital Prescription</a> 
                        <a className="FF" href="/">Free Fellowship</a>
                    </p>
                </div>
                <div className="teleconsultaion-image">
                    <img src={teleconsultation} alt="teleconsult" className="teleconsultaion-main-image"/>
        </div>
        </div>
    <div className="specialities">
        <div className="heading-specialities">
            <h2>Specialities</h2>
            <p className="SP1">Consult with top doctors across specialities</p>
            <div className="communication">
                <div className="comm1">
                    <div className="info-com">
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Teleconsultation
