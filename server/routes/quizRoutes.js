const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

require("../models/Quiz");

const Quiz = mongoose.model("quiz");

router.post("/quiz/new", async (req, res) => {
  const { title, questions } = req.body;
  const newQuiz = new Quiz({
    title: title,
    questions: questions.map((question) => ({
      title: question.title,
      answers: question.answers.map((answer) => ({
        title: answer.title,
        selected: answer.selected,
        correct: answer.correct,
      })),
    })),
    _user: req.user.id,
    dateCreated: new Date(),
  });
  newQuiz.save();
  res.status(201).send({ success: "Quiz Created Successfully !" });
});

module.exports = router;
