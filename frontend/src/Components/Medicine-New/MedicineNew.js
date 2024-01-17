import React from 'react'
import  "./MedicineNew.css"
import {Link} from "react-router-dom"
import PLogo from '../ProfileLogo/PLogo'
import swaaslogo from '../SwaasIcons/swaaslogo.png'
const MedicineNew = () => {
  return (
    <div>
      <header>
        <img src={swaaslogo} alt="swaas" className='swaas-logo'/>
        <input type="search" class="med-search" placeholder=" Search for medicines and more"/>
        <button class="cart"> <i class="fa-solid fa-cart-plus"></i> View Cart</button>
       <div className="medProfile"> <Link to="/patientprofile"><PLogo/></Link></div>
    </header>
    <div className="medi">
    <div class="main-head">Browse Medicines and Health Products</div>
    <div class="med-health">
        <div class="health-head">Health Conditions</div>
        <div class="med-img-div">
            <div class="med-img1 med-img"></div>
            <div class="med-img2 med-img"></div>
            <div class="med-img3 med-img"></div>
            <div class="med-img4 med-img"></div>
        </div>
    </div>
    <div class="med-health">
        <div class="health-head">Categories</div>
        <div class="med-img-div">
            <div class="med-img1 med-img"></div>
            <div class="med-img2 med-img" ></div>
            <div class="med-img3 med-img"></div>
            <div class="med-img4 med-img"></div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default MedicineNew
