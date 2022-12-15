const { validationResult } = require("express-validator");
const UserModel = require("../models/userSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.TOKEN_SECRET;

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
      const salt = await bcryptjs.genSalt(8);
      const passEncrypt = await bcryptjs.hash(req.body.password, salt);

      const objectUser = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: passEncrypt,
      };

      const userCreate = new UserModel(objectUser);
      await userCreate.save();
      res.status(201).json({ message: "Usuario registrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error - ", error });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await UserModel.findOne({ email });

  if (!userFound) {
    return res.json({ error: "Usuario no encontrado en la DB" });
  }

  if (await bcryptjs.compare(password, userFound.password)) {
    const userToken = {
      user: {
        id: userFound.id,
        name: userFound.name,
        lastName: userFound.lastName,
        email: userFound.email,
      },
    };
    const token = jwt.sign(userToken, JWT_SECRET);
    userFound.token = token;
    await UserModel.updateOne({ email }, userFound);
    res.status(200).json({ status: "ok", user: userFound });
  } else {
    res.status(400).json({ status: "error" });
  }
};

exports.logout = async (req, res) => {
  const { token } = req.body;
  if (token) {
    const userLog = jwt.verify(token, JWT_SECRET);
    const userEmail = userLog.user.email;
    const userFound = await UserModel.findOne({ userEmail });
    if (userFound) {
      userFound.token = "";
      await UserModel.updateOne({ userEmail }, userFound);
      res.status(200).json({ message: "Deslogueado", deslog: userFound });
    } else {
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(500).json({ error: "Error" });
  }
};

exports.userDataLog = async (req, res) => {
  const { token } = req.body;
  if (token) {
    const userLog = jwt.verify(token, JWT_SECRET);
    if (userLog) {
      const userEmail = userLog.user.email;
      const userFound = await UserModel.findOne({ email: userEmail });
      res.status(200).json(userFound);
    } else {
      res.status(400).json({ message: "No encontrado" });
    }
  } else {
    res.json({});
  }
};

exports.userDataLogModImg = async (req, res) => {
  const { token } = req.body;
  if (token) {
    const userLog = jwt.verify(token, JWT_SECRET);
    if (userLog) {
      const userEmail = userLog.user.email;
      const userFound = await UserModel.findOneAndUpdate(
        { email: userEmail },
        { photoProfile: req.body.photoProfile },
        { new: true }
      );
      res.status(200).json(userFound);
    } else {
      res.status(400).json({ message: "No encontrado" });
    }
  } else {
    res.json({});
  }
};

exports.userDataLogModName = async (req, res) => {
  const { token } = req.body;
  if (token) {
    const userLog = jwt.verify(token, JWT_SECRET);
    if (userLog) {
      const userEmail = userLog.user.email;
      const userFound = await UserModel.findOneAndUpdate(
        { email: userEmail },
        { name: req.body.name, lastName: req.body.lastName },
        { new: true }
      );
      res.status(200).json(userFound);
    } else {
      res.status(400).json({ message: "No encontrado" });
    }
  } else {
    res.json({});
  }
};

exports.consultUsers = async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
};
