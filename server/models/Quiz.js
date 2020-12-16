const mongoose = require("mongoose");
const { Schema } = mongoose;
const QuestionSchema = require("./Question");

const QuizSchema = new Schema({
  title: String,
  questions: [QuestionSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: Date,
});

mongoose.model("quiz", QuizSchema);
