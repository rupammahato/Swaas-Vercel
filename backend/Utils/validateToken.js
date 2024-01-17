require("dotenv").config();
const JWT=require("jsonwebtoken");

module.exports=async(token)=>{
    try{
        const verifyToken=await JWT.verify(token,process.env.SECRET_KEY);
        if(verifyToken){
            return verifyToken;
        }else{
            return false;
        }
    }catch(err){
        return false;
    }
}