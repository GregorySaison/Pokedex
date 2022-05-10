const Pokemon = require("./../models/Pokemon");

const pokemonController = {
  async getAllPokemon(req, res, next) {
    try {
      const allPokemon = await Pokemon.findAll();

      if (allPokemon) {
        return res.json(allPokemon);
      }

      next();
    } catch (error) {
      next(error);
    }
  },

  async getOnePokemon(req, res, next) {
    try {
      const onePokemon = await Pokemon.findByPk(req.params.id);

      if (onePokemon) {
        return res.json(onePokemon);
      }

      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = pokemonController;
