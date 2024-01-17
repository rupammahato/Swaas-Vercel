import {BrowserRouter as Main,Routes,Route} from "react-router-dom";
import BillsandInsuarance from "./Components/BillsandInsuarance/BillsandInsuarance"
import Emergency from "./Components/Emergency/Emergency"
import HomePage from "./Components/HomePage/HomePage"
import MentalHealth from "./Components/MentalHealth/MentalHealth"
import OPD from "./Components/OPD/OPD"
import Pathology from "./Components/Pathology/Pathology"
import Teleconsultation from "./Components/Teleconsultation/Teleconsultation"
import Doctors from "./Components/Doctors/Doctors"
import About from "./Components/AboutUS/About"
import MedicineNew from "./Components/Medicine-New/MedicineNew"
import PatientList from "./Components/PatientList/PatientList"
import PatientRegister from "./Components/Registration/Patient/Register"
import DoctorRegister from "./Components/Registration/Doctor/Register"
import PatientReports from "./Components/Profile/PatientReports/PatientReports"
import Registration from "./Components/Registration/Registration"
import PatientLogin from "./Components/Registration/Patient/Login"
import { useState } from "react";
import PatientProfile from "./Components/Profile/PatientProfile";
import Login from "./Components/Registration/Login";
const App = () => {
  const [loggedIn,setLoggedIn]= useState(false)
  const [email,setEmail]=useState("")
  return (
    <>
    <div>
      <Main>
        <Routes>
          <Route exact path='/medicine' element={<MedicineNew/>}/> 
          <Route exact path='/aboutus' element={<About/>}/> 
          <Route exact path='/insurance' element={<BillsandInsuarance/>}/>       
          <Route exact path='/emergency' element={<Emergency/>}/>       
          <Route exact path='/' element={<HomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>                
          <Route exact path='/mentalhealth' element={<MentalHealth/>}/>       
          <Route exact path='/OPD' element={<OPD/>}/>       
          <Route exact path='/pathology' element={<Pathology/>}/>       
          <Route exact path="/patientprofile" element={<PatientProfile/>}/>   
          <Route exact path='/registration' element={<Registration/>}/>       
          <Route exact path='/teleconsultation' element={<Teleconsultation/>}/> 
          <Route exact path='/doctors' element={<Doctors/>}/> 
          <Route exact path='/patientreport' element={<PatientReports/>}/>
          <Route exact path='/patientlist' element={<PatientList/>}/>
          <Route exact path='/patientregister' element={<PatientRegister/>}/>
          <Route exact path='/patientsignin' element={<PatientLogin setLoggedIn={setLoggedIn} setEmail={setEmail}/>}/>
          <Route exact path='/doctorregister' element={<DoctorRegister/>}/>
          <Route exact path='/patienreports' element={<PatientReports/>}/>
          <Route exact path='/doctors' element={<Doctors/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Main>
    </div>
      
    </>
  )
}

export default App
