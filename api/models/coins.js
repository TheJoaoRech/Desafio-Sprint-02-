'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    static associate(models) {
    }
  }
  Coins.init({
    coins: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};