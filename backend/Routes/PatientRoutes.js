const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const router = new express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const JOI = require("joi");
const {
  Patient,
  validateRegistration,
  validateLogin,
} = require("../Models/PatientSchema");
const Token = require("../Models/TokenSchema");
const validateToken = require("../Utils/validateToken");
const sendEmail = require("../Utils/sendEmail");
const OPDBooking = require("../Models/OPDBookingSchema");
const { Vonage } = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: process.env.VONAGEAPIKEY,
  apiSecret: process.env.VONAGEAPISECRET
});
const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./Files/Patient/ProfileImage`));
  },
  fileName: function (req, res, cb) {
    const { patientId } = req.body;
    const fileName = `${Date.now()}-${patientId}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: Storage });

//Registration of Patient
router.post(
  "/patient-register",
  upload.single("profileImage"),
  async (req, res) => {
    try {
      const { error } = validateRegistration(req.body);
      if (error) {
        res.status(400).send({ message: error.details[0].message });
      }
      const { email, password, confirmpassword, mobileNumber, healthId } =
        req.body;
      const useremail = await Patient.findOne({ email: email });
      const usermobilenumber = await Patient.findOne({
        mobileNumber: mobileNumber,
      });
      if (useremail || usermobilenumber) {
        res.status(422).send({ message: "User already exists" });
      } else if (password !== confirmpassword) {
        res
          .status(422)
          .send({ message: "Password and Confirm Password did not match" });
      } else {
        const healthId = crypto.randomBytes(4).toString("hex");
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password, salt);
        const hashconfirmpassword = await bcrypt.hash(confirmpassword, salt);
        const patient = await new Patient({
          ...req.body,
          healthId: healthId,
          password: hashPassword,
          confirmpassword: hashconfirmpassword,
          profilePhotoURL: `/ProfileImage/${req.file.filename}`,
        });
        const patienttoken = patient.generateToken();
        const token = await new Token({
          userId: patient._id,
          user: patienttoken,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}/patient/verify-email/${patient._id}/${token.token}`;
        await sendEmail(patient.email, "Verify Email", url);
        res.status(201).send({ message: "Patient Registered Successfully" });
      }
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
      console.log(err);
    }
  }
);

//Email Verification
router.get("/verify-email/:id/:token", async (req, res) => {
  try {
    const token = await Token.findOne({
      userId: req.params.id,
      token: req.params.token,
    });
    if (!token) {
      res.status(400).send({ message: "Invalid Link" });
    }
    const userToken = await validateToken(token.user);
    if (!userToken) {
      res.status(404).send({ message: "Token not found" });
    }
    await new Patient({ ...userToken }).save();
    await token.deleteOne(token.userId);
    res.status(200).send({ message: "Email Verified Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});

//Patient Login
router.post("/patient-login", async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      res.status(400).send({ message: error.details[0].message });
    }
    const { email, mobileNumber, password, healthId } = req.body;
    const useremail = await Patient.findOne({ email: email });
    const usermobilenumber = await Patient.findOne({
      mobileNumber: mobileNumber,
    });
    if (!useremail || !usermobilenumber) {
      res.status(422).send({ message: "Invalid Email or Mobile Number" });
    }
    const validPassword = await bcrypt.compare(
      password,
      useremail.password || usermobilenumber.password
    );
    if (!validPassword) {
      res.status(422).send({ message: "Invalid Password" });
    }
    const token = await useremail.generateAuthToken();
    res.status(200).send({
      data: { useremail, token },
      message: "Patient Logged In Successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//Update Details
router.patch("/patient-update/:id", async (req, res) => {
  try {
    const { error } = validateRegistration(req.body);
    if (error) {
      res.status(400).send({ message: error.details[0].message });
    }
    const { email, password, confirmpassword, mobileNumber } = req.body;
    const useremail = await Patient.findOne({ email: email });
    const usermobilenumber = await Patient.findOne({
      mobileNumber: mobileNumber,
    });
    if (!useremail && !usermobilenumber) {
      res.status(404).send({ message: "User not found" });
    } else {
      const patient = await Patient.findByIdAndUpdate(
        req.patient._id,
        { ...req.body },
        { new: true }
      );
      res
        .status(201)
        .send({ message: "Patient Updated Successfully", data: patient });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});

//Delete Patient
router.delete("/patient-remove/:id", async function (req, res) {
  try {
    const patient = await Patient.findByIdAndDelete(req.patient._id);
    res
      .status(200)
      .send({ message: "Patient Deleted Successfully", data: patient });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});

//Send Password Reset Link
router.post("/forgot-password", async (req, res) => {
  try {
    const emailSchema = JOI.object({
      email: JOI.string().email().required().label("Email"),
    });
    const { error } = emailSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const useremail = await Patient.findOne({ email: email });
    const usermobilenumber = await Patient.findOne({
      mobileNumber: req.body.mobilenumber,
    });
    if (!useremail && !usermobilenumber) {
      res.status(404).send({ message: "User not found" });
    }
    const token = await Token.findOne({ userId: user_id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const url = `${process.env.BASE_URL_FRONTEND}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Reset Password", url);
    res.status(200).send({ message: "Password Reset link sent to your email" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});

//Verify Password Reset Link
router.get("password-reset/:id/:token", async (req, res) => {
  try {
    const user = await Patient.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.status(200).send("Valid Url");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//Set New Password
router.post("password-reset/:id/:token", async (req, res) => {
  try {
    const passwordSchema = JOI.object({
      password: passwordComplexity().required().label("Password"),
    });
    const { error } = passwordSchema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await Patient.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const hashconfirmpassword = await bcrypt.hash(
      req.body.confirmpassword,
      salt
    );
    const patient = await new Patient({
      ...req.body,
      password: hashPassword,
      confirmpassword: hashconfirmpassword,
    }).save();
    await token.remove();
    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// opdbooking route
router.post("/OPDBooking", async (req, res) => {
  try {
    const details = req.body;
    const appointmentId = crypto.randomBytes(16).toString("hex");
    const opd = new OPDBooking({
      appointmentId: appointmentId,
      patientId: details.patientId,
      doctorId: details.doctorId,
      appointmentDate: details.appointmentDate,
      appointmentTime: details.appointmentTime,
      reasonForVisit: details.reasonForVisit,
      status: "BOOKED",
    });

    await opd.save();

    const email = details.patientId;
    const text = `Your Appointment for OPD has been booked for the date of ${details.appointmentDate} at ${details.appointmentTime}`;
    await sendEmail(
      email,
      `Your Appointment for OPD Booked on ${details.appointmentDate} at ${details.appointmentTime}`,
      text
    );

    const from = "Vonage APIs"
    const phoneNumber = "+91"+details.phoneNumber;
    const to = phoneNumber;
    const text1 = `your appointment has been booked for the date of ${details.appointmentDate} at ${details.appointmentTime}`;
    
    async function sendSMS() {
        await vonage.sms.send({to, from, text: text1})
            .then(resp => { console.log('Message sent successfully'); console.log(resp); })
            .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    }
    await sendSMS();
    res.status(200).send({ message: "OPD Booked Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Error" });
  }
});
module.exports = router;
