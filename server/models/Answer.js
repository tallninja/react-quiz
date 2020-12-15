const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnswerSchema = new Schema({
  title: String,
  selected: { type: Boolean, default: false },
  correct: { type: Boolean, default: false },
});

module.exports = AnswerSchema;
