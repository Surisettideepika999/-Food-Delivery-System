import foodModel from "../models/foodModel.js";
import fs from 'fs' //file system

//add food item api
const addFood = async(req,res)=>{

    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name : req.body.name,
        description :req.body.description,
        price:req.body.price,
        Image:image_filename,
        category :req.body.category
    })
    try{
        await food.save();
        res.json({success:true,message:"food added"})
    }catch(error){
            console.log(error);
            res.json({success:false,message:"Error"})
    }
}
 //all food list
const listFood = async (req,res)=>{
    try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
} 

//remove food item
const removeFood = async (req,res)=>{
        try {
            const food=await foodModel.findById(req.body.id);
            fs.unlink(`Uploads/${food.Image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"food removed"})
        } catch (error) {
            res.json({success:false,message:"Error"})
        }
}

export {addFood,listFood,removeFood}