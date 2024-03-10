import mongoose, { Schema } from "mongoose";

const whitelistSchema = new Schema({
  userName: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minLength: [2, "Usser Name must be greater than 2 characters"],
    maxLength: [50, "User Name must not be greater than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  country:{
    type:String,
    required:[true,"Country field cannot be empty"]
  },

  format:{
    type:String,
    required:[true, "Game format is missing."],  
  }
});

const whitelist = mongoose.model.whitelist || mongoose.model("Whitelist", whitelistSchema)

export default whitelist;