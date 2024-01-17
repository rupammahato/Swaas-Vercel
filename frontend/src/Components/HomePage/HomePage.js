import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PLogo from "../ProfileLogo/PLogo"
import swaaslogo from '../SwaasIcons/swaaslogo.png'
import aboutus from '../SwaasIcons/aboutus-card.png'
import opdbooking from '../SwaasIcons/opdbooking.png'
import medicines from '../SwaasIcons/medicines.png'
import billsandinsurance from '../SwaasIcons/billsandinsurance.png'
import Navbar from "../Navbar/Navbar";
const HomePage = (props) => {
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
    <>
      <Navbar/>
    
    <div className="infoHome">
        <div className="text-infoHome">
            <div className="main-msg">We Are Ready To Help & Take Care Of Your Medical Health</div>
            <p></p>
        <div className='Adi'>
            <button id="toknow">
                <Link to='/aboutus'>Know About Us</Link>
            </button>
        </div>
        </div>
        <div className="image-info1">
            <img src={aboutus} alt="aboutus" className='aboutus-image'/>
        </div>
    </div>
    <div className="communicationHome">
        <div className="commHome1">
            <div className="img-com1"></div>
            <div className="info-comHome">
                <Link className='info-comHome' to="/Emergency">Emergency</Link>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com2"></div>
            <div className="info-comHome">
                <Link to="/Teleconsultation">Teleconsultation</Link>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com3"></div>
            <div className="info-comHome">
                <Link to="/MentalHealth">Mental Health Care</Link>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com4"></div>
            <div className="info-comHome">
                <Link to="/Pathology">Pathology & Reports</Link>
                <p>Connect within 60s</p>
            </div>
        </div> 
    </div>
    <div className="infoHome2">
        <div className="image-info2 ">
         <img src={opdbooking} alt="opdbooking" className='banner-image'/>
        </div>
        <div className="text-infoHome">
            <div className="banner-heading">OPD Booking</div>
            <p>OPD Booking on our website allows you to conviniently schedule non emergency medical appointment with your preffered healthcare providers,ensuring timly access to outpatient healthcare services.</p>
      <div className="Adi"> <button id="toknow"><Link to="OPD">Click here</Link></button>
      </div> </div>
        </div>
        <div className="infoHome2">
            <div className="text-infoHome">
                <div className="banner-heading">Bills & Insurance</div>
                <p>On our website,delve into the intricacies of medical bills and insurance to gain insights into healthcare expenses and discover how insurance plays a vital role in managing and reducing these costs. </p>
               <div className="Adi"> <button id="toknow"><Link to="BillsandInsuarance">Click here</Link></button>
               </div>  </div>
            <div className="image-info3">
                <img src={billsandinsurance} alt="billsandinsurance" className='banner-image'/>
            </div>
        </div>
        <div className="infoHome2">
            <div className="image-info4">
                <img src={medicines} alt="medicines" className='banner-image'/>
            </div>
            <div className="text-infoHome">
                <div className="banner-heading">Medical shop</div>
                <p>On Swaas, you can easily order medicines linked with your prescription provided by the doctor you opted for. We have the most diversed set of medicines linked with us.</p>
                <div className="Adi"><button id="toknow"><Link to="MedicineNew">Click here</Link></button>
                </div> </div>
        </div>
        <div className="blank"></div>
    </>
  )
}

export default HomePage
