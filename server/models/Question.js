const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnswerSchema = require("./Answer");

const QuestionSchema = new Schema({
  title: String,
  answers: [AnswerSchema],
});

module.exports = QuestionSchema;
