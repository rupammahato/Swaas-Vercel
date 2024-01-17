const mongoose=require("mongoose");
require("dotenv").config();

const EmergencySchema = new mongoose.Schema({
    appointmentId: { type: String, required: true },
    patientId:{ type: String, required: true },
    appointmentDate:{type:Date,required:true},
    appointmentTime:{type:String,required:true},
    ambulanceRequired:{type:Boolean,required:true},
});

const Doctor=new mongoose.model("Emergency",EmergencySchema);

module.exports=Doctor;