import mongoose from "mongoose";
export const connectDB=async()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:'Questions',
    }).then(()=>{
        console.log('MongoDB is connected');
    })
}