const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../sequelize");

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // connexion à la BDD
    tableName: "pokemon", // on précise le nom de la table dans la BDD sinon sequelize utilise de base 'Card'
  }
);

module.exports = Pokemon;
