const ProvinceModel = require("../models/provinceSchema");

exports.addProvince = async (req, res) => {
  const { nameProvince, type, img } = req.body;
  const provinceFound = await ProvinceModel.findOne({
    nameProvince: nameProvince,
  });

  if (provinceFound) {
    res.status(400).json({ msg: "Provincia existente en db." });
  } else {
    const provinceCreate = new ProvinceModel({
      nameProvince: nameProvince,
      type: type,
      img: img,
    });
    provinceCreate.save();
    res.status(200).json({ msg: "Provincia cargada en db." });
  }
};

exports.showProvince = async (req, res) => {
  const province = await ProvinceModel.find();
  res.status(200).json(province);
};
