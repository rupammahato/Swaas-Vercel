const express=require("express");
require("dotenv").config();
const app=express();
const connection=require('./Database/database');
const PatientRoute=require('./Routes/PatientRoutes');
const DoctorRoute=require('./Routes/DoctorRoutes');
connection();

const cors=require("cors");
const database = require("./Database/database");

app.use(express.json());
app.use(cors());
app.use(PatientRoute);
app.use(DoctorRoute);

const PORT=process.env.PORT;
app.listen(PORT,console.log(`Listening on port : ${PORT}`));