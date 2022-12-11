const express = require("express");
const router = express.Router();
const contactMessageController = require("../controllers/contactMessageController");

router
  .post("/addContactMessage", contactMessageController.addContactMessage)
  .get("/showContactMessage", contactMessageController.showContactMessage);

module.exports = router;
