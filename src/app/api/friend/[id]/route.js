"use server";
import { NextResponse } from "next/server"
import { connectToDB } from "../../utils";
import { Friend } from "../../modals";

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