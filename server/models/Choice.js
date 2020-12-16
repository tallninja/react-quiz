const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChoiceSchema = new Schema({
  title: String,
  correct: { type: Boolean, default: false },
});

module.exports = ChoiceSchema;
