import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      Types: String,
      required: true,
    },

    email: {
      Types: String,
      required: true,
      unique: true,
    },

    password: {
      Types: String,
      required: true,
    },

    isAdmin: {
      Types: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
