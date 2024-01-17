const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const router = new express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const JOI = require("joi");
const { Doctor, validatedoctor } = require("../Models/DoctorSchema");
const Token = require("../Models/TokenSchema");
const validateToken = require("../Utils/validateToken");
const sendEmail = require("../Utils/sendEmail");
const jwt = require("jsonwebtoken");

// doctor registration
const otp = Math.floor(100000 + Math.random() * 900000);
router.post("/doctor-register", async (req, res) => {
  const {
    doctorId,
    name,
    email,
    password,
    confirmpassword,
    mobileNumber,
    specialization,
    practicingSince,
    management,
    city,
    district,
    state,
    pincode,
    hospital,
  } = req.body;
  // checking for duplicates
  const doctor = await Doctor.findOne({ email: email });
  if (doctor) {
    return res.status(400).send({ message: "Doctor already exists" });
  }else if(password !== confirmpassword) {
    res
      .status(422)
      .send({ message: "Password and Confirm Password did not match" });
  }
  try {
    const { error } = validatedoctor(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send({ message: error.details[0].message });
    }
    const doctor = new Doctor({
      doctorId: doctorId,
      name: name,
      email: email,
      password:password,
      confirmpassword:confirmpassword,
      mobileNumber: mobileNumber,
      specialization: specialization,
      practicingSince: practicingSince,
      management: management,
      city: city,
      district: district,
      state: state,
      pincode: pincode,
      hospital: hospital,
    });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    doctor.password = await bcrypt.hash(req.body.password, salt);
    doctor.confirmpassword = await bcrypt.hash(req.body.confirmpassword, salt);
    const token = await doctor.generateToken();
    await doctor.save();
    const doctorToken = new Token({
      userId: doctor._id,
      token: token,
      user: doctor,
    });
    await doctorToken.save();
    // sending mail

    const url = `You have become a doctor registered at Swaas. Click here to verify your email: ${process.env.BASE_URL}/doctor/verify-email/${doctor._id} and your otp is ${otp}`;

    await sendEmail(doctor.email, "Verify Email regardding registration", url);

    res.status(201).send({ doctor, token });
  } catch (error) {
    let message = "An error occurred";
    if (error.message) {
      message = error.message;
    }
    res.status(400).send({ message });
  }
});

// email verification
router.get("/doctor/verify-email/:id/", async (req, res) => {
  try {
    const doctor = await Doctor.findById(Token.userId);
    if (!doctor) {
      return res.status(400).send({ message: "Invalid link" });
    }
    doctor.save();
    res
      .status(200)
      .send({ message: "Email verified successfully" })
      .redirect("/doctor-otp-verify");
  } catch (error) {
    let message = "An error occurred";
    if (error.message) {
      message = error.message;
    }
    res.status(400).send({ message });
  }
});

// resend otp
router.get("/doctor/resend-otp",async(req,res)=>{
  try{
    const user = await Doctor.findOne({ _id: req.body.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });
    otp=Math.floor(100000 + Math.random() * 900000);
    const url = `youhave become a doctor registered at Swaas. click here to verify your email: ${process.env.BASE_URL}/doctor/verify-email/${user._id} and your otp is ${otp}`;
    await sendEmail(user.email, "Verify Email regardding registration", url);
    res.status(200).send({ message: "OTP sent to your email" });
  }catch(err){
    res.status(500).send({message:"Internal Server Error"});
    console.log(err);
  }
});
//otpverification
router.post("/doctor/verify-email/:id", async (req, res) => {
  try {
    if (req.body.otp === otp) {
      res.status(200).send({ message: "OTP verified successfully" });
    } else {
      res.status(400).send({ message: "Invalid OTP" });
    }
  } catch (error) {
    let message = "An error occurred";
    if (error.message) {
      message = error.message;
    }
    res.status(400).send({ message });
  }
});

// doctor login
router.post("/doctor-login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).send({ message: "Invalid email" });
    }
    const validPassword = await bcrypt.compare(password, doctor.password);
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid password" });
    }
    const token = doctor.generateToken();
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//update details via patch
router.patch("/doctor/update-details", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.body.id);
    if (!doctor) {
      return res.status(400).send({ message: "Invalid link" });
    }
    doctor = {
      name: req.body.name,
      specialization: req.body.specialization,
      practicingSince: req.body.practicingSince,
      management: req.body.management,
      city: req.body.city,
      district: req.body.district,
      state: req.body.state,
      pincode: req.body.pincode,
      hospital: req.body.hospital,
    };
    doctor.save();
    res.status(200).send({ message: "Details updated successfully" });
  } catch (error) {
    let message = "An error occurred";
    if (error.message) {
      message = error.message;
    }
    res.status(400).send({ message });
  }
});

// delete account
router.delete("/doctor/delete-account", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.body.id);
    if (!doctor) {
      return res.status(400).send({ message: "Invalid link" });
    }
    doctor.remove();
    res.status(200).send({ message: "Account deleted successfully" });
  } catch (error) {
    let message = "An error occurred";
    if (error.message) {
      message = error.message;
    }
    res.status(400).send({ message });
  }
});

// send password reset link
router.post("/doctor/forgot-password",async(req,res)=>{
    try{
        const emailSchema = JOI.object({
            email:JOI.string().email().required().label("Email"),
        });
        const {error} = emailSchema.validate(req.body);
        if(error){
            return res.status(400).send({message:error.details[0].message});
        }
        const useremail = await Doctor.findOne({email:req.body.email});
        if(!useremail){
            return res.status(404).send({message:"User not found"});
        }
        const token = await Token.findOne({userId:useremail._id});
        if(!token){
            token = await new Token({
                userId:useremail._id,
                token:crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const url = `${process.env.BASE_URL_FRONTEND}/doctor-password-reset/${useremail._id}/${token.token}`;
        await sendEmail(useremail.email,"Reset Password",url);
        res.status(200).send({message:"Password Reset link sent to your email"});
    }catch(err){
        res.status(500).send({message:"Internal Server Error"});
        console.log(err);
    }
});
// verify password reset link
router.get("/doctor-password-reset/:id/:token",async(req,res)=>{
    try{
        const user = await Doctor.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link" });

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) {
            return res.status(400).send({ message: "Invalid link" });
        }

        res.status(200).send("Valid Url");

    }catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }
});

//set new password
router.post("/doctor-password-reset/:id/:token",async(req,res)=>{
    try{
        const user = await Doctor.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link" });

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send({ message: "Invalid link" });
        const {password} = req.body;
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password,salt);
        user.password = hashedPassword;
        user.save();
        token.remove();
        res.status(200).send({message:"Password reset successfully"});

    }catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }
});

module.exports = router;
