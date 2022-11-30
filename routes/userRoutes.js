const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

let nameValidator = /^[a-zA-ZÀ-ÿ\s]$/;

router.post(
  "/register",
  [
    body("name", "Campo name requerido").notEmpty(),
    body("name", "Campo name requerido").isLength({ min: 1, max: 30 }),
    body("name", "Campo name no valido").isAlpha(),
    // body("name", "Campo name invalido").custom((value, { req }) =>
    //   nameValidator.test(value)
    // ),
    body("lastName", "Campo lastName requerido").notEmpty(),
    body("lastName", "Campo lastName no valido").isAlpha(),
    body("lastName", "Campo lastName requerido").isLength({ min: 1, max: 20 }),
    // body("lastName", "Campo lastName valido").matches(/^[a-zA-ZÀ-ÿ\s]$/),
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
).post(
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
);

module.exports = router;
