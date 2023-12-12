"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { User } from "./modals";
import { connectToDB } from "./utils";
import { NextResponse } from "next/server";

export const register = async (formData) => {
    const { username, password, profilePic } = formData
    try {
        connectToDB();

        const newUser = new User({
            username,
            password,
            profilePic
        });

        await newUser.save();
        return newUser
    } catch (err) {
        throw new Error("Failed to create user!", err);
    }
};

export const login = async (data) => {
    const { username, password } = data
    try {
        connectToDB();

        const user = await User.findOne({ username: username });
        console.log("user", user)
        if (user) {
            if (user.password === password) {
                console.log(true)
                return { isError: false, message: "user found", returnLst: JSON.parse(JSON.stringify(user)) }
            } else {
                return { isError: true, message: "Invalid Credentials" }
            }
        }
        else {
            return { isError: true, message: "User not found" }

        }
    } catch (err) {
        return new Error("Something went wrong!", err);
    }
};