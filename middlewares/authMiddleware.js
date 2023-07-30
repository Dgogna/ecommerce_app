import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";



export const requireSignIn = async(req,res,next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res.send( {
            message:"error in decoding",
            error
        });
    }
}

export const isAdmin = async(req,res,next)=>{
    try {
        const user= await userModel.findById(req.user._id);
        if(user.role !==1){
            return res.send({
                message:"unaurhorized access"
            })
        }else{
            next();
        }
    } catch (error) {
        return res.send({
            message:"its Not the Admin",
            error
        })
    }
}