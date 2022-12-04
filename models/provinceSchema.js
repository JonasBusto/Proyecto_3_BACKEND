const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema({
  nameProvince: {
    type: String,
    trim: true,
    unique: true,
    require: true,
  },
  type: {
    type: String,
    trim: true,
    unique: true,
    require: true,
  },
  img: {
    type: String,
    trim: true,
    unique: true,
    require: true,
  },
});

module.exports = mongoose.model("province", provinceSchema);
