import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import connectDB from "./db/connect.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({limit : "30mb" , extended : "true"}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : "true"}));
app.use(cors());

app.use("/posts" ,postRoutes);
app.use("/user" ,userRoutes);

const PORT = process.env.PORT || 5000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
       
        app.listen(PORT , ()=>{
            console.log(`Server is listening on ${PORT}`);
        })
    }
    catch(error){
        console.log(error.message);
    }
}
start();