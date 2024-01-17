import "./BillsandInsuarance.css"
import {Link,useNavigate} from "react-router-dom"
import Footer from '../Footer/Footer'
import Review from '../Review/Review'
import PLogo from '../ProfileLogo/PLogo'
import swaaslogo from '../SwaasIcons/swaaslogo.png'
const BillsandInsuarance = (props) => {
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
    <div>
     <header className='headerHome'>
        <div className="dropdown">
        </div>
        <img src={swaaslogo} alt="swaas" className='swaas-logo'/>
        <div className="nav-bar">
            <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
            <Link to='/teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
            <Link to='/medicalreports'><div className='navbar-elements'>Medical Reports</div> </Link>
            <Link to='/insurance'><div className='navbar-elements'>Insurance</div></Link>
            <Link to='/aboutus'><div className='navbar-elements'>About US</div></Link>
        </div>
        <div className="LoginButtonHome">
            <input type="button" onClick={onButtonClick} className="inputButtonLogin" value={loggedIn ? "Log out":"Log in"} />
            {(loggedIn ?<PLogo/>:<div/>
            )}
        </div>
    </header>

          <div id="bills">
       <div className="Adi"> <div className='billimg'></div></div>
        <div id="billtext">
            <h1>Pay The Bills Online, Safe and Secured</h1>
            <h2>Simplify medical bill payments online</h2>
            
            <p style={{color:"#6999B3",fontSize:"1.1rem"}}> Our secure online payment portal streamlines the process of settling your medical bills quickly and conveniently, ensuring a hassle-free experience.</p>
            
            <button id="pay"><a href="/">Let's Pay</a></button>
        </div>
    </div>
    <div id="insurance">
        <div id="insurancetext">
            <h1>Still In Need Of Health Insurance?</h1> 
            <h2>When the unexpected happens, we are here for you.</h2> 
            <p style={{color:"#6999B3",fontSize:"1.1rem"}}>You can enroll in or change plans if you have cerain life events or income range, or you qualify for Medical or CHIP</p>
            
            <div className="Adi"><button id="insure" ><a href="/">Get Started</a></button></div>
        </div>
        <div className="Adi"><div className='insuranceimg'></div>
        </div>
    </div>
    
    <h1>Buy Our Insurance</h1>
    <Review/>
    {/* <div className="review">
          <p>Reviews</p>
      </div> */}
   {/* <div className="footer"></div> */}
   <Footer/>
  </div>
  )
}

export default BillsandInsuarance
