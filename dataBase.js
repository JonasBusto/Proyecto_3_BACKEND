const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://JonasBustoRCS:Vk2YEqjIgDwtaKuJ@proyecto3grupo4rcs.skunrq6.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
