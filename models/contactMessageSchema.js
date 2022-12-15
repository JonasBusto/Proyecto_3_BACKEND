const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
  },
  message: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("contactMessage", contactMessageSchema);
