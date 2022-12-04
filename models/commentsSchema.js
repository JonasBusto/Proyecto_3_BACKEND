const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    trim: true,
    require: true,
  },
  userProfile: {
    type: String,
    trim: true,
    require: true,
  },
  date: {
    type: String,
    trim: true,
    require: true,
  },
  infoComment: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("comment", commentSchema);
