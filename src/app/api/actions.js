"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { User } from "./modals";
import { connectToDB } from "./utils";
import { NextResponse } from "next/server";

export const sendRequest = async (formData) => {
  const { userId, receiverId } = Object.fromEntries(formData);
  console.log(userId)
  console.log(receiverId)

  // try {
  //     connectToDB()
  //     const allUsers = await Friends.find();

  //     const connection = new Friends({
  //         userId,
  //         receiverId
  //     });

  //     await connection.save();
  //     return connection
  // } catch (error) {
  //     console.log(error)
  // }
};


export const logins = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDB();

    const user = await User.findOne({ username: username });
    if (user) {
      if (user.password === password) {
        console.log(true)
        return user.json()
      }
    }
  } catch (err) {
    throw new Error("Failed to create user!", err);
  }
};