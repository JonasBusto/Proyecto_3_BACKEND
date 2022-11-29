const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase connection OK"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3001;

var cors =require('cors')
app.use(cors())

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});