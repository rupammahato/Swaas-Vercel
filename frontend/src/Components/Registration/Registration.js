import { Link,useNavigate } from 'react-router-dom'
import './Registration.css'
import PLogo from "../ProfileLogo/PLogo"
import swaaslogo from '../SwaasIcons/swaaslogo.png'
const Registration = (props) => {
    const {loggedIn}=props
   const navigate=useNavigate();

   const onButtonClick = () => {
    if (loggedIn) {
        // localStorage.removeItem("user")
        props.setLoggedIn(false)
    } else {
        navigate("/Registration")
    }
   }
    return (
        <div className='body'>
            <header className='headerHome'>
                <div className="dropdown">
                </div>
                <img src={swaaslogo} alt="swaas" className='swaas-logo'/>
                <div className="nav-bar">
                    <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
                    <Link to='/Teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
                    <Link to='/MedicalReports'><div className='navbar-elements'>Medical Reports</div> </Link>
                    <Link to='/BillsandInsuarance'><div className='navbar-elements'>Insurance</div></Link>
                    <Link to='/aboutus'><div className='navbar-elements'>About Us</div></Link>
                </div>
                <div className="LoginButtonHome">
                    <input type="button" onClick={onButtonClick} className="inputButtonLogin" value={loggedIn ? "Log out":"Log in"} />
                    {(loggedIn ?<PLogo/>:<div/>
                    )}
                </div>
            </header>

            <div className="registration" >
                <div className="registration-container">
                    <div className="full-height justify-content-center">
                        <div className="flex justify-center items-center h-screen col-12 text-center align-self-center py-5">
                            <div className="registration-section pb-5 pt-5 pt-sm-2 text-center">
                                <input className="registration-checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="registration-card-3d-wrap mx-auto">
                                    <div className="registration-card-3d-wrapper">
                                        <div className="registration-card-front">
                                            <div className="registration-center-wrap">
                                                <div className="registration-section text-center">
                                                    <div className='blackbox'><h4 className="mb-4 pb-3">Log In</h4></div>
                                                    <Link to="/PatientSignin"><input type="submit" className="registration-btn mt-4 btn" value="Login as Patient" /></Link>
                                                    <Link to="/"><input type="submit" className="registration-btn mt-4 btn" value="Login as Hospital" /></Link>
                                                    <Link to="/"><input type="submit" className="registration-btn mt-4 btn" value="Login as Doctor" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-card-back">
                                            <div className="registration-center-wrap">
                                                <div className='blackbox'><h4 className="mb-4 pb-3" style={{ color: "#0D6869" }}>Register</h4></div>
                                                <Link to="/PatientRegister"> <input type="submit" className="registration-btn mt-4 btn" value="Register as Patient" /></Link>
                                                <Link to='/'><input type="submit" className="registration-btn mt-4 btn" value="Register as Hospital" /></Link>
                                                <Link to="/DoctorRegister"> <input type="submit" className="registration-btn mt-4 btn" value="Register as Doctor" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration