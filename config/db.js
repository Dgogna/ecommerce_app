
import mongoose from "mongoose";
// import dotenv from "dotenv"

// // config .env
// dotenv.config();

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is Succesfully connected")
    } catch (error) {
        console.log(`Error in mongo DB connection ${error}`);
    }
}

export default connectDB;