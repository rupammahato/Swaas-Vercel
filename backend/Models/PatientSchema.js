const mongoose=require("mongoose");
require("dotenv").config();
const JWT=require("jsonwebtoken");
const JOI=require("joi");
const passwordComplexity=require("joi-password-complexity");
const Joi = require("joi");

const PatientSchema = new mongoose.Schema({
	healthId:{ type: String, required: true },
	firstName: { type: String, required: true },
    middleName:{ type: String,required:false},
    lastName:{ type: String,required:false},
    email: { type: String, required: true},
    mobileNumber:{type: String, required: true},
    password:{type: String, required: true},
    confirmpassword:{type: String, required: true},
	address: { type: String, required: true},
	dayOfBirth: { type: String, required: true},
    monthOfBirth:{ type: String, required: true },
    yearOfBirth: { type: String, required: true },
    gender:{ type: String, required: true },
	pincode:{type: String, required: true},
    profilePhotoURL: {type:String,required:false},
});

PatientSchema.methods.generateToken=async function(){
    const payload={
        healthId:this.healthId,
        firstName:this.firstName,
        middleName:this.middleName,
        lastName:this.lastName,
        email:this.email,
        mobileNumber:this.mobileNumber,
        address:this.address,
        dayOfBirth:this.dayOfBirth,
        monthOfBirth:this.monthOfBirth,
        yearOfBirth:this.yearOfBirth,
        gender:this.gender,
        pincode:this.pincode,
        profilePhotoURL:this.profilePhotoURL,

    }
    const token=await JWT.sign(payload,process.env.JWTPRIVATEKEY,{expiresIn:"1d"});
    return token;
}

PatientSchema.methods.generateAuthToken=async function(){
    const token=await JWT.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1d"});
    return token;
}

const Patient=new mongoose.model("Patient",PatientSchema);

const validateRegistration=(data)=>{
    const schema=JOI.object({
        firstName: JOI.string().required().label("First Name"),
        middleName:JOI.string().label("Middle Name"),
        lastName:JOI.string().label("Last Name"),
        email: JOI.string().email().required().label("Email"),
        mobileNumber:JOI.string().min(10).max(10).required().label("Mobile Number"),
        password:passwordComplexity().required().label("Password"),
        confirmpassword:passwordComplexity().required().label("Confirm Password"),
        address: JOI.string().required().label("Address"),
        dayOfBirth: JOI.string().required().label("Day of Birth"),
        monthOfBirth:JOI.string().required().label("Month of Birth"),
        yearOfBirth: JOI.string().required().label("Year of Birth"),
        gender:JOI.string().label("Gender"),
        healthId:JOI.string().required().label("Health Id"),
        pincode:JOI.string().min(6).max(6).required().label("Pincode"),
        profilePhotoURL:JOI.string().label("Profile Photo URL"),
    });
    return schema.validate(data);
}

const validateLogin=(data)=>{
    const schema=JOI.object({
        email:JOI.string().email().required().label("Email"),
        password:JOI.string().required().label("Password"),
    });
    return schema.validate(data);
}
module.exports={Patient,validateRegistration,validateLogin};