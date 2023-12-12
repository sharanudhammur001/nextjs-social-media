// "use server";
// import { NextResponse } from "next/server"
// import { connectToDB } from "../utils";
// import { User } from "../modals";

// export const GET = async () => {
//     try {
//         await connectToDB()
//         const allUsers = await User.find();
//         const allFriendRequests = await Request.find({ thirdPersonId: id });
//         console.log(allFriendRequests)
//         return NextResponse.json({ isSuccess: true, statusCode: 200, returnLst: allUsers })

//     } catch (err) {
//         console.log("error", err)
//     }
// }