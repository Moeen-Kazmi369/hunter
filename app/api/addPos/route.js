import { Newpost } from "@/models/PostSchema";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB();
        const data=await request.json();
        const newPost=await Newpost.create(data);
        return NextResponse.json({
            message:'succesfully',
            newPost,
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'fail',
        },{status:401})
    }
}