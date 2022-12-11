const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admig4:e0CqfPSX92N7cRys@cluster0.2jif1ol.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
