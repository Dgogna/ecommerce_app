import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import JWT from "jsonwebtoken"

export const registerController = async (req,res)=>{
    try {
        // console.log("request is comming");
        const {name,email,password,phone,address} = req.body;
        if(!name){
            return res.send({success:false,error:"name is required"});
        }
        if(!email){
            return res.send({success:false,error:"email is required"});
        }
        if(!password){
            return  res.send({success:false,error:"password is required"});
        }
        if(!phone){
            return res.send({success:false,error:"phone no is required"});
        }
        if(!address){
            return  res.send({success:false,error:"address is required"});
        }
        // console.log(email);
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.send({success:false,message:"user is already registered please login"});
        }

        // register the user
        const hashedPassword = await hashPassword(password);
        const user=await new userModel({name,email,phone,address,password:hashedPassword}).save();

        return res.send({
            success:true,
            message:"user registered Succesfully",
            user
        })

    } catch (error) {
        console.log(error)
        return res.send({
            success:false,
            meaasge:"error in registering the user"
        })
    }
}


export const loginController=async(req,res)=>{
    try {
        const {email,password}  =req.body;
        if(!email || !password){
            return res.send({
                success:false,
                message:"incorrect email or passowrd"
            })
        }

        const user=await userModel.findOne({email:email});
        if(!user){
            console.log("user is not there")
            return res.send({
                success:false,
                message:"please register first"
            })
        }
        const match =await  comparePassword(password,user.password);
        if(!match){
            return res.send({
                success:false,
                message:"password does not match"
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});

        return res.send({
            success:true,
            message:"login in succesful",
            user,
            token
        }) 


    } catch (error) {
        console.log(error);
        return res.send({
            success:false,
            message:"error in logging in the user"
        })
    }
}

export const testController = (req,res)=>{
    res.send("protected route");
}


//update prfole
export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
        //   email:email,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };


  //orders
export const getOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({ buyer: req.user._id })
        .populate("products", "-photo")
        .populate("buyer", "name");
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };

//orders
export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: "-1" });
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };


  //order status
export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };

// export default {registerController};