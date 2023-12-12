"use server";
import { NextResponse } from "next/server"
import { connectToDB } from "../../utils";
import { Connection, Request, User } from "../../modals";

export const GET = async (req, { params }) => {
    const { id } = params
    try {
        await connectToDB()
        const allUsers = await User.find();
        const allFriendRequests = await Connection.find({ userId: id });
        const requestId = allFriendRequests.map((ele) => {
            return ele.thirdPersonId.toString()
        })
        const modifiedData = allUsers.map((ele) => {
            const id = ele._id
            const requestedUser = allFriendRequests.find((item) => {
                console.log(item.thirdPersonId == id.toString())
                // console.log(id.toString())
                if(item.thirdPersonId == id.toString()){
                    return item
                }
                
            })
            if (requestedUser) {
                return {
                    ...ele.toObject(),
                    requested: true,
                    connectionId: requestedUser._id
                }
            } else {
                return {
                    ...ele.toObject(),
                    requested: false,
                    requestedId: null
                }
            }
        })
        return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: modifiedData })

    } catch (err) {
        console.log("error", err)
    }
}