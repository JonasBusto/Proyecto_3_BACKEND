const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

router
  .post(
    "/register",
    [
      body("name", "Campo name requerido").notEmpty(),
      body("name", "Campo name debe tener entre 1 y 40 caracteres").isLength({
        min: 1,
        max: 40,
      }),
      body("lastName", "Campo lastName requerido").notEmpty(),
      body("lastName", "Campo lastName requerido").isLength({
        min: 1,
        max: 20,
      }),
      body("email", "Campo email requerido").notEmpty(),
      body("email", "Campo email no fue escrito en formato 'email'").isEmail(),
      body("password", "Campo password requerido").notEmpty(),
      body(
        "password",
        "Campo password debe tener minimo 8 caracteres, y maximo 14"
      ).isLength({ min: 8, max: 14 }),
      body("confirmPassword", "Campo confirmPassword requerido").notEmpty(),
      body(
        "confirmPassword",
        "Campo confirmPassword debe tener minimo 8 caracteres, y maximo 14"
      ).isLength({
        min: 8,
        max: 14,
      }),
      body(
        "confirmPassword",
        "Campo confirmPassword debe ser igual a password"
      ).custom((value, { req }) => value === req.body.password),
    ],
    userController.registerUser
  )
  .post(
    "/login",
    [
      body("email", "Campo email requerido").notEmpty(),
      body("email", "Campo email no fue escrito en formato 'email'").isEmail(),
      body("password", "Campo password requerido").notEmpty(),
      body(
        "password",
        "Campo password debe tener minimo 8 caracteres, y maximo 14"
      ).isLength({ min: 8, max: 14 }),
    ],
    userController.loginUser
  )
  .post("/userLog", userController.userDataLog)
  .post("/logout", userController.logout)
  .get("/consultUsers", userController.consultUsers)
  .put("/userLogModImg", userController.userDataLogModImg)
  .put("/userLogModName", userController.userDataLogModName);

module.exports = router;
