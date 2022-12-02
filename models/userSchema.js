const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  lastName: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
  },
  token: {
    type: String,
    default: "",
  },
  photoProfile: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  },
  rol: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("user", userSchema);
