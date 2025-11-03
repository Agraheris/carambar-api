const express = require("express");
const router = express.Router();


const jokes = require("../controllers/jokeController.js");

router.get("/", jokes.getAllJokes);
router.get("/random", jokes.getRandomJoke);
router.get("/:id", jokes.getJokeById);
router.post("/", jokes.createJoke);

module.exports = router;