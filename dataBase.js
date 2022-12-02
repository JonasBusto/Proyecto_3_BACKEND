const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://JonasBustoRCS:Vk2YEqjIgDwtaKuJ@proyecto3grupo4rcs.skunrq6.mongodb.net/?retryWrites=true&w=majority"
// );

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
