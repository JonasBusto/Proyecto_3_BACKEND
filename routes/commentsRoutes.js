const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentsController");
const { body } = require("express-validator");

router
  .post("/addCommentHome", commentController.addComment)
  .get("/showComments", commentController.showComments)
  .delete("/deleteComment", commentController.deleteComment);

module.exports = router;
