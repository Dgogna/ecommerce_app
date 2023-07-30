import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
// const bodyParser=require("body-parser");
import bodyParser from "body-parser"
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url";


dotenv.config();

connectDB();

// es module fix

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app=express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./client/build")))


// routes
app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",productRoutes );


// api
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to ecommerce app</h1>")
// })


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on part ${PORT}`);
})
