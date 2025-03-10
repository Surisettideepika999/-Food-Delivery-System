import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken" //authentication
import bcrypt from "bcrypt"
import validator from "validator"


//login user

const loginUser =async (req,res)=>{
    const {name,password,email}=req.body;
    try {
        const user=await userModel.findOne({email})
        if(!user)
            return res.json({success:false,message:"no user found.Please register"})
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)
            return res.json({success:false,message:"wrong password"})
        const token=createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:" no user"})
    }
}

const createToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const regUser =async(req,res)=>{
    const {name,password,email}=req.body;
    console.log(name)
    try {
        const exist=await userModel.findOne({email})
        if(exist)
            return res.json({success:false,message:"user already exist"})
        //validating email format & strong password
        if(!validator.isEmail(email))
            return res.json({success:false,message:"please enter valid email"})
        if(password.length<8)
            return res.json({success:false,message:"Please enter strong password "})
        //encrypt password-hashing
        const salt=await bcrypt.genSalt(10) //5-15
        const encPass=await bcrypt.hash(password,salt)

        const newUser=new userModel({
            name:name,
            email:email,
            password:encPass
        })

        const user=await newUser.save()
        const token=createToken(user._id)
        console.log(token)
        res.json({success:true,token:{token}})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}


export {loginUser,regUser}