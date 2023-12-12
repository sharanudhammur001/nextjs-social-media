import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    }
  },
  { timestamps: true }
);

const requestSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    userPic: {
      type: String,
      required: true
    },
    thirdPersonId: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const frindsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    userProfilePic: {
      type: String,
    },
    thirdPersonId: {
      type: String,
      required: true,
    },
    thirdPersonProfilePic: {
      type: String,
    }
  },
  { timestamps: true }
);

const connectionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    userProfilePic: {
      type: String,
      required: true
    },
    thirdPersonId: {
      type: String,
      required: true,
    },
    thirdPersonName: {
      type: String,
      required: true
    },
    thirdPersonProfilePic: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    followBack: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);


export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Request = mongoose.models.Request || mongoose.model("Request", requestSchema);
export const Friend = mongoose.models.Friend || mongoose.model("Friend", frindsSchema);
export const Connection = mongoose.models.Connection || mongoose.model("Connection", connectionSchema);