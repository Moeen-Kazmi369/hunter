import mongoose from "mongoose";
const QSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    image:{
        type:File,
    }
});
mongoose.models={};
export const QUEST=new mongoose.model("QUEST",QSchema);