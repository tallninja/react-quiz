module.exports = async (req, res, Quiz, Score) => {
  const { questions } = await Quiz.findOne({ _id: req.body._id });
  let userScore = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answer[0].title === req.body.questions[i].answer) {
      userScore += 1;
    }
  }
  const newScore = await new Score({
    _quiz: req.body._id,
    _user: req.user._id,
    score: userScore,
  }).save();
  res.send(newScore);
};
