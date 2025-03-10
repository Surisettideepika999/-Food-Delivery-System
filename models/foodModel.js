import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    Image: {type:String,required:true},
    category :{type:String,required:true}
})

//creates foodmodel if it doesnot exist 
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;