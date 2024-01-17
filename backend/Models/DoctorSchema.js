const mongoose=require("mongoose");
require("dotenv").config();
const JOI = require("joi");
const jwt = require('jsonwebtoken');
const DoctorSchema = new mongoose.Schema({
    doctorId:{type:String,requird:true},
	name:{type:String,requird:true},
    email:{type:String,requird:true},
    password:{type:String,requird:true},
    confirmpassword:{type: String, required: true},
    mobileNumber:{type:String,requird:true},
    specialization:{type:String,required:true},
    practicingSince:{type:String,required:true},
    management:{type:String,required:true},
    city:{type:String,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
    hospital:{type:String,required:true},
});
const validatedoctor= (data) => {
    const schema = JOI.object({
        doctorId: JOI.string().required().label("Doctor Id"),
        name: JOI.string().required().label("Name"),
        email: JOI.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password"),
        confirmpassword:passwordComplexity().required().label("Confirm Password"),
        mobileNumber: JOI.string().required().label("Mobile Number"),
        specialization: JOI.string().required().label("Specialization"),
        practicingSince: JOI.string().required().label("Practicing Since"),
        management: JOI.string().required().label("Management"),
        city: JOI.string().required().label("City"),
        district: JOI.string().required().label("District"),
        state: JOI.string().required().label("State"),
        pincode: JOI.string().required().label("Pincode"),
        hospital: JOI.string().required().label("Hospital"),
    });
    return schema.validate(data);
};



DoctorSchema.methods.generateToken = function() {
    const token = jwt.sign({ _id: this._id },process.env.JWTPRIVATEKEY, { expiresIn: '1h' });
    return token;
};

const Doctor = mongoose.model('Doctor', DoctorSchema,);
module.exports={Doctor,validatedoctor};