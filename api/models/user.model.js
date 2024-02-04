import mongoose from "mongoose";

// set up the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://i.pinimg.com/236x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg",
    },
  },
  {
    timestamps: true, //allow for marking creation and update dates
  }
);

const User = mongoose.model("User", userSchema);

export default User;
