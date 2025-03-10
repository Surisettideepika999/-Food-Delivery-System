import { count } from "console";
import orderModel from "../models/orderModel.js"
import fs from 'fs' //file system

//add food item api
const placeOrder = async(req,res)=>{

    // let image_filename=`${req.file.filename}`;
    // let cartdata= await req.
    const order=new orderModel({
        firstName:req.body.firstName,
        lastnam:req.body.lastName,
        email:req.body.email,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        country:req.body.country,
        phone:req.body.phone,
        items:req.body.food_list
    })
    try{
        await order.save();
        res.json({success:true,message:"food orderd"})
    }catch(error){
            console.log(error);
            res.json({success:false,message:"Error"})
    }
}
 //all food list
const listOrders = async (req,res)=>{
    try {
        const orders=await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
} 

//remove food item
const removeOrders = async (req,res)=>{
        try {
            const food=await foodModel.findById(req.body.id);
            fs.unlink(`Uploads/${food.Image}`,()=>{})
            await order.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"food removed"})
        } catch (error) {
            res.json({success:false,message:"Error"})
        }
}

export {addFood,listFood,removeFood}