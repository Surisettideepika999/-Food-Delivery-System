import mongoose from "mongoose";

orderSchema =mongoose.Schema({
    firstName:({type:String,required:true}),
    lastName:({type:String,required:true}),
    email:({type:String,required:true}),
    street:({type:String,required:true}),
    city:({type:String,required:true}),
    state:({type:String,required:true}),
    zipcode:({type:String,required:true}),
    country:({type:String,required:true}),
    phone:({type:String,required:true}),
    items:({type:Object,required:true})
})

const orderModel=mongoose.models.order || mongoose.model("order",orderSchema)

export default orderModel
