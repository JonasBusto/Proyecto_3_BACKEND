const CommentsModel = require("../models/commentsSchema");

exports.addComment = async (req, res) => {
  const newComment = {
    user: req.body.user,
    userProfile: req.body.userProfile,
    date: req.body.date,
    infoComment: req.body.infoComment,
  };

  const commentCreate = new CommentsModel(newComment);
  commentCreate.save();
  res.status(200).json({ message: "Comentario cargado en la DB" });
};

exports.showComments = async (req, res) => {
  const comments = await CommentsModel.find();
  res.send(comments);
};

exports.deleteComment = async (req, res) => {
  await CommentsModel.findByIdAndDelete({ _id: req.body.id });
  res.status(200).json({ status: "ok" });
};
