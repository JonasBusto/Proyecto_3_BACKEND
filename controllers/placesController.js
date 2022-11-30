const { validationResult } = require("express-validator");
const PlacesModel = require("../models/placesSchema");

exports.addPlace = async (req, res) => {
  const placesFound = await PlacesModel.findOne({
    namePlace: req.body.namePlace,
  });
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    if (placesFound) {
      res.status(400).json({ mgs: "Nombre de lugar duplicado" });
    } else {
      const placeCreate = new PlacesModel(req.body);
      placeCreate.save();
      res.send("Lugar cargadao en DB");
    }
  } catch (error) {
    res.status(500).json({ message: "Error - ", error });
  }
};

exports.consultPlaces = async (req, res) => {
  const places = await PlacesModel.find();
  res.send(places);
};
