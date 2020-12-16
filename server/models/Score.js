const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreSchema = new Schema({
  _quiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  score: { type: Number, default: 0 },
});

mongoose.model("scores", ScoreSchema);
