const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routesUser = require("./routes/userRoutes");
const routesPlaces = require("./routes/placeRouter");
const routesProvince = require("./routes/provinceRoutes");
const PORT = process.env.PORT || 3001;
require("./dataBase");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/", routesUser);
app.use("/", routesPlaces);
app.use("/", routesProvince);

app.listen(PORT, () => {
  console.log("Backend ejecutandose el puerto 3001");
});

// app.get("/verUsuarios", async (req, res) => {
//   const usuarios = await UserModel.find();
//   res.send(usuarios);
// });

// app.get("/verUsuario/:id", async (req, res) => {
//   const usuario = await UserModel.findOne({ _id: req.params.id });
//   res.send(usuario);
// });

// app.put("/modificarUsuario/:id", async (req, res) => {
//   const usuarioModificado = await UserModel.findOneAndUpdate(
//     { _id: req.params.id },
//     { name: req.body.name },
//     { new: true }
//   );
//   res.send("Usuario modificado: ", usuarioModificado);
// });

// app.delete("/eliminarUsuario/:id", async (req, res) => {
//   try {
//     await UserModel.findOneAndDelete({ _id: req.params.id });
//     res.send("Usuario eliminado");
//   } catch {
//     res.send("El usuario que intenta eliminar no existe");
//   }
// });
