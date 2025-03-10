import express from "express"
import { addToCart,removeFromCart,fetchCartData } from "../Controllers/cartController.js"
import authMiddleware from "../middleware/auth.js"

const cartRouter=express.Router()

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,fetchCartData)

export default cartRouter