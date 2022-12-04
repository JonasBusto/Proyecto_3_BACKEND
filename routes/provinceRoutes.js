const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/provinceController");
const { body } = require("express-validator");

router
  .post(
    "/addProvince",
    [
      body("nameProvince", "Campo nombre requerido").notEmpty(),
      body("type", "Campo requerido").notEmpty(),
      body("img", "Imagen requerida").notEmpty(),
    ],
    provinceController.addProvince
  )
  .get("/showProvince", provinceController.showProvince);

module.exports = router;
