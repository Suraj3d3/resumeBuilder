const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, //it means DB will always ecpect this data
      maxlenght: 80,
      trim: true, //trim will remove extra spaces
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
