import express from 'express'
import cors from "cors"
import { connectDB } from './Config/db.js'
import foodRouter from './Routes/foodRoute.js'
import userRouter from './Routes/UserRoute.js'
import 'dotenv/config'
import cartRouter from './Routes/cartRoute.js'
import orderRouter from './Routes/OrderRoute.js'
const app=express()
const port=5000
//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)

app.use("/images",express.static('Uploads'))

app.use("/api/user",userRouter)

app.use("/api/cart",cartRouter)

app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API worked")
})

app.listen(port,()=>
    {
        console.log(`server started on http://localhost:${port}`)}
)
//mongodb+srv://surisettideepika999:<password>@cluster0.7smympi.mongodb.net/?