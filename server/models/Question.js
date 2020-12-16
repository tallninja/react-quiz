const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChoiceSchema = require("./Choice");

const QuestionSchema = new Schema({
  title: String,
  choices: [ChoiceSchema],
  answer: Array,
});

module.exports = QuestionSchema;
