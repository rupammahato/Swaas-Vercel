import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const PatientLogin = (props) => {
  return (
    <div>
      <div className="loginbodypat">
        <div className='loginhead'>LOG IN AS PATIENT</div>
        <div className='loginhorizontal'>
          <div className='docsymbol'></div>
          <div className="loginbox">
            <div className='inputContainer'><input type="email" className="enterbox" placeholder="Enter your email/ mobile number"/>
            <label className="errorLabel"></label>
            </div>
            <div className='inputContainer'><input type="password" className="enterbox" placeholder="Enter password"/>
            <label className="errorLabel"></label>
            </div>
            <div className={"inputContainer"}>
              <input
                className={"inputButton"}
                type="button"
                value={"Log in"} />
            </div>
            <button className='forgotpass'>Forgot password?</button>
          </div>
          <div className='docsymbol'></div>
        </div>
      </div>
    </div>
  )
}

export default PatientLogin 