import mongoose from "mongoose";
const connectDB = (uri)=>{
   console.log("connected to database");
   return mongoose.connect(uri);
};

export default connectDB
