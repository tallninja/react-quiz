const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnswerSchema = new Schema({
  _question: { type: Schema.Types.ObjectId, ref: "Quiz.questions" },
  _answer: String,
});

mongoose.model("answers", AnswerSchema);
