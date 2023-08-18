import { QUEST } from "@/models/QusestionSchema";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();
        const data=await QUEST.find();
        return NextResponse.json({
            message:'successfully',
            data,
        },{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:'fail',
        },{status:401})
    }
}