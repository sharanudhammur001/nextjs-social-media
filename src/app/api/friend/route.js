"use server";
import { NextResponse } from "next/server"
// import { connectToDB } from "../../utils";
import { connectToDB } from "../utils";
import { Friend } from "../modals";

export const GET = async (req, { params }) => {
    const { id } = params
    try {
        await connectToDB()
        const allFriendRequests = await Friend.find({ thirdPersonId: id });
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allFriendRequests })

    } catch (err) {
        console.log("error", err)
    }
}
export const POST = async (req) => {
    const body = await req.json();
    try {
        await connectToDB()
        const newFriend = new Friend(body)
        await newFriend.save();
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: newFriend })
    } catch (err) {
        console.log("error", err)
    }
}