"use server";
import { NextResponse } from "next/server"
import { connectToDB } from "../../utils";
import { Request, User } from "../../modals";

export const GET = async (req, { params }) => {
    const { username } = params
    try {
        await connectToDB()
        const regexPattern = new RegExp(username, 'i');
        const allUsers = await User.find({ username: { $regex: regexPattern } });
        // const allFriendRequests = await Request.find({ userId: id });
        // const requestId = allFriendRequests.map((ele) => {
        //     return ele.thirdPersonId.toString()
        // })
        // const modifiedData = allUsers.map((ele) => {
        //     const id = ele._id
        //     if (requestId.includes(id.toString())) {
        //         return {
        //             ...ele.toObject(),
        //             requested: true
        //         }
        //     } else {
        //         return {
        //             ...ele.toObject(),
        //             requested: false
        //         }
        //     }
        // })
        // console.log(modifiedData)
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allUsers })
    } catch (err) {
        console.log("error", err)
    }
}