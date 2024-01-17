import {Link,useNavigate} from "react-router-dom";
import PLogo from "../ProfileLogo/PLogo"
import swaaslogo from '../SwaasIcons/swaaslogo.png'

const Navbar = (props) => {
  const {loggedIn}=props
   const navigate=useNavigate();

   const onButtonClick = () => {
    if (loggedIn) {
        props.setLoggedIn(false)
    } else {
        navigate("/Registration")
    }
   }
  return (
    <header className='headerHome'>
                <div className="dropdown">
                </div>
                <Link to="/"><img src={swaaslogo} alt="swaas" className='swaas-logo'/></Link>
                <div className="nav-bar">
                    <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
                    <Link to='/teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
                    <Link to='/medicalreports'><div className='navbar-elements'>Medical Reports</div> </Link>
                    <Link to='/insurance'><div className='navbar-elements'>Insurance</div></Link>
                    <Link to='/aboutus'><div className='navbar-elements'>About Us</div></Link>
                </div>
                <div className="LoginButtonHome">
                    <input type="button" onClick={onButtonClick} className="inputButtonLogin" value={loggedIn ? "Log out":"Log in"} />
                    {(loggedIn ?<PLogo/>:<div/>
                    )}
                </div>
            </header>
  
  )
}

export default Navbar
