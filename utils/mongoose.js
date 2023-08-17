import mongoose from "mongoose";
export const connectDB=async()=>{
    mongoose.connect('mongodb+srv://firstTime:firstTime@cluster0.ibabf4i.mongodb.net/',{
        dbName:'Questions',
    }).then(()=>{
        console.log('MongoDB is connected');
    })
}