import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import "./Register.css";
import { Link } from "react-router-dom";

function PatientRegister() {
  const navigate = useNavigate();

  const [patientRecord, setpatientRecord] = useState([]);

  const [userRegistration, setuserRegistration] = useState({
    aadhar: "",
    firstName: "",
    lastName: "",
    middleName: "",
    dob: "",
    password: "",
    cpassword: "",
    pincode: "",
    email: "",
    phone: "",
    gender: "",
    image: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserRegistration({ ...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatientRecord = { ...userRegistration, id: new Date().getTime().toString() }
    setpatientRecord([...patientRecord, newPatientRecord]);
    navigate('/PatientProfile', { state: { data: userRegistration } });

  }

  return (
    <>
      <Navbar/>
      <h2 className="heading">Patient Register</h2>
      <div className="Register">
        <div className="RegistrationPhoto"></div>
        <div className="registrationForm">
          <form method="post" action="" onSubmit={handleSubmit} >
            <div className="doc-sign">
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Aadhar Number
                </label>
                <br />
                <input
                  placeholder=" Enter your Aadhar Number"
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.aadhar}
                  name="aadhar"
                  id="aadhar"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  First Name
                </label>
                <br />
                <input
                  placeholder=" Enter your First Name"
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.firstName}
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Middle Name
                </label>
                <br />
                <input
                  placeholder=" Enter your Middle Name"
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.middleName}
                  name="middleName"
                  id="middleName"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Last Name
                </label>
                <br />
                <input
                  placeholder=" Enter your Last Name"
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.lastName}
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Email
                </label>
                <br />
                <input
                  placeholder=" Enter your email"
                  type="email"
                  className="doctorId-in"
                  value={userRegistration.email}
                  name="email"
                  id="email"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Phone Number
                </label>
                <br />
                <input
                  placeholder=" Enter your No."
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.phone}
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Password
                </label>
                <br />
                <input
                  placeholder=" Enter your password"
                  type="password"
                  className="doctorId-in"
                  value={userRegistration.password}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Confirm Password
                </label>
                <br />
                <input
                  placeholder=" Enter your password"
                  type="password"
                  className="doctorId-in"
                  value={userRegistration.cpassword}
                  name="cpassword"
                  id="cpassword"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Day Of Birth
                </label>
                <br />
                <input
                  placeholder=" Enter your day of birth"
                  type="date"
                  className="doctorId-in"
                  value={userRegistration.dob}
                  name="dob"
                  id="dob"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              {/* <div className="doctor">
              <label for="doctorId" className="doctorId">
                Month Of Birth
              </label>
              <br />
              <input
                placeholder=" Enter your Month of birth"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Year Of Birth
              </label>
              <br />
              <input
                placeholder=" Enter your Year of birth"
                type="text"
                className="doctorId-in"
              />
            </div> */}
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Gender
                </label>
                <br />
                <select className="genderOption" value={userRegistration.gender}
                  name="gender"
                  id="gender"
                  onChange={handleChange} >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Pincode
                </label>
                <br />
                <input
                  placeholder=" Enter Pincode"
                  type="text"
                  className="doctorId-in"
                  value={userRegistration.pincode}
                  name="pincode"
                  id="pincode"
                  onChange={handleChange}
                  autoComplete="off"

                />
              </div>
              <div className="doctor">
                <label for="doctorId" className="doctorId">
                  Profile Photo
                </label>
                <br />
                <input
                  placeholder=" Enter here"
                  type="file"
                  value={userRegistration.image}
                  onChange={handleChange}
                  className="doctorId-in-File"
                />
              </div>
            </div>
            <button className="doc-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default PatientRegister;
