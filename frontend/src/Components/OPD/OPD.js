import './OPD.css'
import {Link,useNavigate} from "react-router-dom"
import Footer from '../Footer/Footer'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { indiancities } from './Location'
import PLogo from "../ProfileLogo/PLogo"
import swaaslogo from '../SwaasIcons/swaaslogo.png'
import cardiologist from '../SwaasIcons/stethoscope.png'
import dentist from '../SwaasIcons/dentist.png'
import gynecologist from '../SwaasIcons/gynecologist.png'
const OPD = (props) => {
  const {loggedIn}=props
   const navigate=useNavigate();

   const onButtonClick = () => {
    if (loggedIn) {
        props.setLoggedIn(false)
    } else {
        navigate("/Registration")
    }
   }

    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
    const formatResult = (indiancities) => {
        console.log(indiancities);
        return (
          <div className="result-wrapper">
            <span className="result-span">id: {indiancities.id}</span>
            <span className="result-span">name: {indiancities.name}</span>
          </div>
        );
      };
    return (
            <div>
<header className='opd-header'>
        <Link to="/"><img src={swaaslogo} alt="swaas" className='swaas-logo-opd'/></Link>
        <div className='opd-navbar'>
        <div className="nav-bar">
            <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
            <Link to='/teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
            <Link to='/medicalreports'><div className='navbar-elements'>Medical Reports</div> </Link>
            <Link to='/insurance'><div className='navbar-elements'>Insurance</div></Link>
            <Link to='/aboutus'><div className='navbar-elements'>About Us</div></Link>
        </div>
      </div>
        <div className="LoginButtonHome-opd">
            <input type="button" onClick={onButtonClick} className="inputButtonLogin" value={loggedIn ? "Log out":"Log in"} />
            {(loggedIn ?<PLogo/>:<div/>
            )}
        </div>
        <div className='opd-doctor-search'>
          <div className="SearchBox"style={{ width: 400,marginTop:"1rem" }}>
            <ReactSearchAutocomplete
              items={indiancities}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              onClear={handleOnClear}
              styling={{ zIndex: 0 }}
              autoFocus
              placeholder='Speciality'
            />
            </div>
            <div className="SearchBox"style={{ width: 400,marginTop:"1rem" }}>
            <ReactSearchAutocomplete
              items={indiancities}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              onClear={handleOnClear}
              styling={{ zIndex: 0 }}
              autoFocus
              placeholder='Location'
            />
            </div>
          </div>

      </header> 
                <div id="opdbody">
                    <div className='opd-speciality-heading'>Choose the Speciality of Doctor</div>
                    <div className='opd-speciality'>
                      <div className='opd-speciality-card'>
                        <div className='opd-speciality-card-text'>Cardiologist</div>
                        <img src={cardiologist} alt="" className='opd-speciality-card-image'/>
                      </div>
                      <div className='opd-speciality-card'>
                        <div className='opd-speciality-card-text'>General Physician</div>
                        <img src={cardiologist} alt="" className='opd-speciality-card-image'/>
                      </div>
                      <div className='opd-speciality-card'>
                        <div className='opd-speciality-card-text'>Dentist</div>
                        <img src={dentist} alt="" className='opd-speciality-card-image'/>
                      </div>
                      <div className='opd-speciality-card'>
                        <div className='opd-speciality-card-text'>Gynecologist</div>
                        <img src={gynecologist} alt="" className='opd-speciality-card-image'/>
                      </div>
                      <div className='opd-speciality-card'>
                        <div className='opd-speciality-card-text'>Orthologist</div>
                        <img src={cardiologist} alt="" className='opd-speciality-card-image'/>
                      </div>
                    </div>
                </div>
                <Footer/>
            </div>
            )
}

            export default OPD
