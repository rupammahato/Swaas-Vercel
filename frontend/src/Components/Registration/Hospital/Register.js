import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function PatientRegister() {
  return (
    <>
      <header className="header">
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>
      <div className="sign-photo"></div>
        <h2 className="heading">Patient Register</h2>
      <div className="d-sign-in">
        <form method="post" action="/">
          <div className="doc-sign">
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                HealthId
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
                First Name
              </label>
              <br />
              <input
                placeholder=" Enter your First Name"
                type="text"
                className="doctorId-in"
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
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Email
              </label>
              <br />
              <input
                placeholder=" Enter your email"
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
                Password
              </label>
              <br />
              <input
                placeholder=" Enter your password"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Confirm Password
              </label>
              <br />
              <input
                placeholder=" Enter your password"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Day Of Birth
              </label>
              <br />
              <input
                placeholder=" Enter your day of birth"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
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
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Gender
              </label>
              <br />
              <input
                placeholder=" Enter your gender"
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
                Profile Photo
              </label>
              <br />
              <input
                placeholder=" Enter here"
                type="file"
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
export default PatientRegister;
