const { validationResult } = require("express-validator");
const PlacesModel = require("../models/placesSchema");

exports.addPlace = async (req, res) => {
  const placeFound = await PlacesModel.findOne({
    namePlace: req.body.namePlace,
  });

  if (placeFound) {
    res.status(400).json({ message: "Lugar ya existente" });
  } else {
    const placeObject = {
      namePlace: req.body.namePlace,
      province: req.body.province,
      category: req.body.category,
      description: req.body.description,
      img: {
        img1: req.body.img.img1,
        img2: req.body.img.img2,
        img3: req.body.img.img3,
        img4: req.body.img.img4,
        img5: req.body.img.img5,
      },
    };

    const placeCreate = new PlacesModel(placeObject);
    placeCreate.save();
    res.status(200).json({ message: "Lugar cargado en la DB" });
  }
};

exports.consultPlaces = async (req, res) => {
  const places = await PlacesModel.find();
  res.send(places);
};
exports.consultPlaceId = async (req, res) => {
  const place = await PlacesModel.findOne({ _id: req.params.id });
  res.send(place);
};

exports.modPlaces = async (req, res) => {
  const placeFound = await PlacesModel.findOneAndUpdate(
    { _id: req.params.id },
    { province: req.body.province, category: req.body.category },
    { new: true }
  );
  res.send(placeFound);
};

exports.deletePlace = async (req, res) => {
  try {
    await PlacesModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Lugar eliminado" });
  } catch (error) {
    res.status(500)({
      error: error + " - el usuario que intenta eliminar no existe",
    });
  }
};

exports.addComment = async (req, res) => {
  const placeFound = await PlacesModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        comments: {
          userComment: req.body.user,
          userProfileComment: req.body.userProfile,
          dateComment: req.body.date,
          infoComment: req.body.infoComment,
        },
      },
    },
    { new: true }
  );
  res.send(placeFound.comments);
};
