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
      body("img", "Campo namePlace requerido").notEmpty(),
      body("contLikes", "Campo namePlace requerido").notEmpty(),
      body("featured", "Campo namePlace requerido").notEmpty(),
    ],
    placeController.addPlace
  )
  .get("/consultPlace", placeController.consultPlaces)
  .get("/consultPlace/:id", placeController.consultPlaceId)
  .put("/modPlace/:id", placeController.modPlaces)
  .delete("/deletePlace/:id", placeController.deletePlace)
  .put("/addComment/:id", placeController.addComment)
  .put("/modPlaceDescription/:id", placeController.modPlacesDescription)
  .put("/modPlaceImg/:id", placeController.modPlacesImg)
  .put("/featuredPlace/:id", placeController.featuredPlace);

module.exports = router;
