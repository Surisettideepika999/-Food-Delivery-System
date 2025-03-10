import express from  "express"
import { addFood, listFood, removeFood } from "../Controllers/foodController.js"
import multer from "multer"

const orderRouter = express.Router();



const upload=multer({storage:storage})

orderRouter.post("/order",placeOrder)
orderRouter.get("/list",listOrders)



export default orderRouter