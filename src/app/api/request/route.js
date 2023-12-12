"use server";
import { NextResponse } from "next/server"
import { connectToDB } from "../utils";
import { Request } from "../modals";
import { Connection } from "../modals";

export const GET = async (req) => {
    try {
        await connectToDB()
        const allFriendRequests = await Request.find();
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allFriendRequests })

    } catch (err) {
        console.log("error", err)
    }
}
export const POST = async (req) => {
    const body = await req.json();
    console.log("body", body)
    const netObject = {
        userId: body.thirdPersonId,
        userName: body.thirdPersonName,
        userProfilePic: body.thirdPersonProfilePic,
        thirdPersonId: body.userId,
        thirdPersonName: body.userName,
        thirdPersonProfilePic: body.userProfilePic,
        status: body.status,
        followBack: body.followBack
    }
    try {
        await connectToDB()

        const newRequest = new Connection(netObject)

        await newRequest.save();
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: newRequest })

    } catch (err) {
        console.log("error", err)
    }
}
export const DELETE = async (req) => {
    const body = await req.json();
    console.log(body)
    const { requestedId } = body
    try {
        await connectToDB()
        const allFriendRequests = await Request.findByIdAndDelete({ _id: requestedId });
        // const newRequest = new Request(body)

        // await newRequest.save();
        return NextResponse.json({ isSuccess: true, statusCode: 200 })

    } catch (err) {
        console.log("error", err)
    }
}