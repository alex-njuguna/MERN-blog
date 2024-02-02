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
  },
  {
    timestamps: true, //allow for marking creation and update dates
  }
);

const User = mongoose.model("User", userSchema);

export default User;
