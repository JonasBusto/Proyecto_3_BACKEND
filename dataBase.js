const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://JonasBustoRCS:Vk2YEqjIgDwtaKuJ@proyecto3grupo4rcs.skunrq6.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
