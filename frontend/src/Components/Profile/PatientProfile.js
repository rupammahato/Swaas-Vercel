import { NavLink, useLocation,useNavigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./PatientProfile.css"

const PatientProfile = () => {
  return (
    <>
      <Navbar/>
      <div className="PatientProfileHeading">My Profile</div>
      <div className='PatientProfileDiv'>
        <div className="detailsImagePatient">
          <div className="userImage"></div>
        </div>
        <div className="registrationDetails">
          <div className="details">
            <div className="DetailsForm">

              <div className="doc-sign">
              <table>
      <tbody className='tableBody'>
        
          <tr  className='table'>
            <td><strong className='tableHeading'>Name:</strong></td>
          <td className="tableDetail"></td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>DOB:</strong></td>
              <td className="tableDetail"></td>
            </tr>
            <tr className='table'>
            <td><strong className='tableHeading'>Email:</strong></td>
              <td className="tableDetail"></td>

                      </tr>
                      <tr className='table' >
            <td><strong className='tableHeading'>Aadhar Number:</strong></td>
              <td className="tableDetail"></td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>Gender:</strong></td>
              <td className="tableDetail"></td>
            </tr>
            <tr  className='table'>
            <td><strong className='tableHeading'>Age:</strong></td>
              <td className="tableDetail"></td>
            </tr>
            <tr  className='table'>
            <td><strong className='tableHeading'>Phone Number:</strong></td>
              <td className="tableDetail"></td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>Pincode:</strong></td>
              <td className="tableDetail"></td>
            </tr>
      </tbody>
     </table>
              </div>

            </div>
            <div>
              <button className="doc-btn">Edit</button>
              <button className="doc-btn">View Reports</button>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PatientProfile
