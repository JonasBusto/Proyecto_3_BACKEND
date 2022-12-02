const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  namePlace: {
    type: String,
    trim: true,
    unique: true,
    require: true,
  },
  province: {
    type: String,
    trim: true,
    require: true,
  },
  category: {
    type: String,
    trim: true,
    require: true,
  },
  img: {
    type: String,
    trim: true,
    require: true,
  },
  contLikes: {
    type: Number,
    trim: true,
    require: true,
  },
  featured: {
    type: Boolean,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("place", placeSchema);
