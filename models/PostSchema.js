import mongoose from "mongoose";
const PSchema=new mongoose.Schema({
    post:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
});
mongoose.models={};
export const Newpost=new mongoose.model("Newpost",PSchema);