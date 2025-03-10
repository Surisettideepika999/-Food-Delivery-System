import userModel from "../models/UserModel.js"

//add to cart model

const addToCart=async(req,res)=>{
    try {
        let userData= await userModel.findOne({_id:req.body.userId})
        // console.log(userData)
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"added to cart"})
    } catch (error) {
        res.json({success:false,message:"error"})
        console.log(error)
    }
}

//remove from cart

const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"removed from cartes"})
    } catch (error) {
        res.json({success:false,message:"error"})
    }
}

//fetch from cart

const fetchCartData= async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        res.json({success:false,message:"error"})
    }
}

export {addToCart,removeFromCart,fetchCartData}