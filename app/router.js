const express = require("express");
const router = express.Router();
const pokemonController = require("./controllers/pokemonController");

router.get("/list", pokemonController.getAllPokemon);
router.get("/list/:id", pokemonController.getOnePokemon);

module.exports = router;
