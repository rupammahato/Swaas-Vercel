import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const DoctorRegister=()=> {
  return (
    <>
      <Navbar/>
      <div className="sign-photo"></div>
        <h2 className="heading">Doctor Registration</h2>
      <div className="d-sign-in">
        <form method="post" action="/">
          <div className="doc-sign">
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                DoctorId
              </label>
              <br />
              <input
                placeholder=" Enter your Id"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Name
              </label>
              <br />
              <input
                placeholder=" Enter your Name"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Email
              </label>
              <br />
              <input
                placeholder=" Enter your Email"
                type="text"
                className="doctorId-in"
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
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Specialization
              </label>
              <br />
              <input placeholder="" type="text" className="doctorId-in" />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Praticing Since
              </label>
              <br />
              <input
                placeholder=" Enter time period"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Management
              </label>
              <br />
              <input type="select" className="doctorId-in" />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                City
              </label>
              <br />
              <input
                placeholder=" Enter your City"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Dristrict
              </label>
              <br />
              <input
                placeholder=" Enter your District"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                State
              </label>
              <br />
              <input
                placeholder=" Enter State"
                type="text"
                className="doctorId-in"
              />
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
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Hospital
              </label>
              <br />
              <input
                placeholder=" Enter here"
                type="text"
                className="doctorId-in"
              />
            </div>
          </div>
          <button className="doc-btn">Submit</button>
        </form>
      </div>
    </>
  );
}
export default DoctorRegister;
