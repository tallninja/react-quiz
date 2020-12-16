const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Path } = require("path-parser");
const { URL } = require("url");

const quizCreator = require("../controllers/quizCreator");
const quizGetter = require("../controllers/quizGetter");
const quizMarker = require("../controllers/quizMarker");

require("../models/Quiz");
require("../models/Score");

const Quiz = mongoose.model("quiz");
const Score = mongoose.model("scores");

// creating a new quiz
router.post("/quiz/new", (req, res) => quizCreator(req, res, Quiz));

// fetching the quiz
router.get("/quiz", (req, res) => quizGetter(req, res, Quiz));

// submiting a quiz for marking
router.post("/quiz", (req, res) => quizMarker(req, res, Quiz, Score));

module.exports = router;
