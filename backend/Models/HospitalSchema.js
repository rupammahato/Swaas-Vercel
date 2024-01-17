const mongoose=require("mongoose");
require("dotenv").config();

const HospitalSchema = new mongoose.Schema({
	name:{type:String,requird:true},
    email:{type:String,requird:true},
    phonenumber:{type:String,required:true},
    medicineType:{type:String,required:true},
    ownershipType:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
});

const Doctor=new mongoose.model("Hostpital",HospitalSchema);

module.exports=Doctor;