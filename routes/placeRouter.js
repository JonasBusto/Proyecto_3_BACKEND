const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placesController");
const { body } = require("express-validator");

router
  .post(
    "/addPlace",
    [
      body("namePlace", "Campo namePlace requerido").notEmpty(),
      body("province", "Campo namePlace requerido").notEmpty(),
      body("category", "Campo namePlace requerido").notEmpty(),
      body("img", "Objeto requerido").notEmpty(),
      body("description", "Se requiere una descripcion.").notEmpty(),
    ],
    placeController.addPlace
  )
  .get("/consultPlace", placeController.consultPlaces)
  .put("/modPlace/:id", placeController.modPlaces)
  .put("/modPlaceDescription/:id", placeController.modPlacesDescription)
  .put("/modPlaceImg/:id", placeController.modPlacesImg);

module.exports = router;
