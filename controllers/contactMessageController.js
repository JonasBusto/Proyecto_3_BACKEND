const ContactMessageModel = require("../models/contactMessageSchema");
const sendMailer = require("../utils/nodemailer");

exports.addContactMessage = async (req, res) => {
  const newContactMessage = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  const contactMessageCreate = new ContactMessageModel(newContactMessage);
  contactMessageCreate.save();
  await sendMailer(req.body.name, req.body.email, req.body.message);
  res.status(200).json({
    message: "Mensaje de contacto cargado en la db y enviado al mail.",
  });
};

exports.showContactMessage = async (req, res) => {
  const contactMessage = await ContactMessageModel.find();
  res.send(contactMessage);
};
