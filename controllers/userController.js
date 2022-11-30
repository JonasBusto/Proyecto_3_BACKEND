const { validationResult } = require("express-validator");
const UserModel = require("../models/userSchema");
const UserLogueado = require("../models/userLogueadoSchema");

exports.registerUser = async (req, res) => {
  const userFound = await UserModel.findOne({ email: req.body.email });
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    if (userFound) {
      res.status(400).json({ mgs: "Usuario duplicado" });
    } else {
      const userCreate = new UserModel(req.body);
      userCreate.save();
      res.send("Usuario registrado");
    }
  } catch (error) {
    res.status(500).json({ message: "Error - ", error });
  }
};

exports.loginUser = async (req, res) => {
  const emailFound = await UserModel.findOne({ email: req.body.email });
  const passFound = await UserModel.findOne({ password: req.body.password });
  console.log("emailFound: ", emailFound._id);
  console.log("emailFound: ", emailFound.name);
  console.log("emailFound: ", emailFound.lastName);
  console.log("emailFound: ", emailFound.email);
  console.log("emailFound: ", emailFound.password);

  try {
    if (emailFound !== null && passFound !== null) {
      const userLog = new UserLogueado({
        _id: emailFound._id,
        name: emailFound.name,
        lastName: emailFound.lastName,
        email: emailFound.email,
        pass: emailFound.password,
      });
      userLog.save();
      res.send("Usuario encontrado en la DB");
    } else {
      res.send("Usuario no encontrado en la DB");
    }
  } catch (error) {
    res.status(500).json({ message: "Error login server - ", error });
  }
};
