module.exports = async (req, res, Quiz) => {
  const quiz = await Quiz.findOne({ _id: req.body.id });
  res.send(quiz);
};
