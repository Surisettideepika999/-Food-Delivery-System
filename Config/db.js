import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://surisettideepika999:deepika999@cluster0.d4argnz.mongodb.net/fooddelivery").then(()=>console.log("DB Connected"))
}