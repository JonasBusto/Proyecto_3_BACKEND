const { validationResult } = require("express-validator");
const PlacesModel = require("../models/placesSchema");

exports.addPlace = async (req, res) => {
  const placeFound = await PlacesModel.findOne({
    namePlace: req.body.namePlace,
  });

  if (placeFound) {
    res.status(400).json({ msg: "Lugar ya existente." });
  } else {
    const newPlace = {
      namePlace: req.body.namePlace,
      province: req.body.province,
      category: req.body.category,
      img: {
        img1: req.body.img.img1,
        img2: req.body.img.img2,
        img3: req.body.img.img3,
        img4: req.body.img.img4,
        img5: req.body.img.img5,
      },
      description: req.body.description,
    };
    const placeCreate = new PlacesModel(newPlace);
    placeCreate.save();
    res.status(200).json({ msg: "Lugar cargado en la db." });
  }

  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  // try {
  //   if (placesFound) {
  //     res.status(400).json({ mgs: "Nombre de lugar duplicado" });
  //   } else {
  //     const placeCreate = new PlacesModel(req.body);
  //     placeCreate.save();
  //     res.send("Lugar cargadao en DB");
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: "Error - ", error });
  // }
};

exports.consultPlaces = async (req, res) => {
  const places = await PlacesModel.find();
  res.send(places);
};

exports.modPlaces = async (req, res) => {
  const placeFound = await PlacesModel.findOneAndUpdate(
    { _id: req.params.id },
    { province: req.body.province, category: req.body.category },
    { new: true }
  );
  res.send(placeFound);
};

exports.modPlacesDescription = async (req, res) => {
  const placeFound = await PlacesModel.findOneAndUpdate(
    { _id: req.params.id },
    { description: req.body.description },
    { new: true }
  );
  res.status(200).json(placeFound);
};

exports.modPlacesImg = async (req, res) => {
  const placeFound = await PlacesModel.findOneAndUpdate(
    { _id: req.params.id },
    { img: req.body.img },
    { new: true }
  );
  res.send(placeFound);
};
