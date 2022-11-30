const mongoose = require("mongoose");

const userLogueadoSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("userLogueado", userLogueadoSchema);
