"use server";
import { NextResponse } from "next/server"
import { connectToDB } from "../../utils";
import { Connection, Request } from "../../modals";

export const GET = async (req, { params }) => {
    const { id } = params
    try {
        await connectToDB()
        const allFriendRequests = await Connection.find({ userId: id });
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allFriendRequests })

    } catch (err) {
        console.log("error", err)
    }
}
export const PUT = async (req, { params }) => {
    const body = await req.json();
    const { id } = params
    try {
        await connectToDB()
        const allFriendRequests = await Connection.findByIdAndUpdate(id, { status: body.status }, { new: true });
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allFriendRequests })

    } catch (err) {
        console.log("error", err)
    }
}