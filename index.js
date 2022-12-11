const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routesUser = require("./routes/userRoutes");
const routesPlaces = require("./routes/placeRouter");
const routesProvince = require("./routes/provinceRoutes");
const routesComments = require("./routes/commentsRoutes");
const routesContactMessage = require("./routes/contactMessageRoutes");
const PORT = process.env.PORT || 3001;
require("./dataBase");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/", routesUser);
app.use("/", routesPlaces);
app.use("/", routesProvince);
app.use("/", routesComments);
app.use("/", routesContactMessage);

app.listen(PORT, () => {
  console.log("Backend ejecutandose el puerto 3001");
});
