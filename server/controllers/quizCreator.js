module.exports = async (req, res, Quiz) => {
  const { title, questions } = req.body;
  const newQuiz = await new Quiz({
    title: title,
    questions: questions.map((question) => {
      return {
        title: question.title,
        choices: question.choices.map((choice) => {
          return {
            title: choice.title,
            correct: choice.correct,
          };
        }),
        answer: question.choices.filter((choice) => choice.correct),
      };
    }),
  }).save();
  res.status(201).send({ success: true });
};
