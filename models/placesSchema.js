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
    img1: {
      type: String,
      trim: true,
      require: true,
    },
    img2: {
      type: String,
      trim: true,
      require: true,
    },
    img3: {
      type: String,
      trim: true,
      require: true,
    },
    img4: {
      type: String,
      trim: true,
      require: true,
    },
    img5: {
      type: String,
      trim: true,
      require: true,
    },
  },
  contLikes: {
    type: Number,
    trim: true,
    require: true,
    default: 0,
  },
  featured: {
    type: Boolean,
    trim: true,
    require: true,
    default: false,
  },
  description: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("place", placeSchema);
