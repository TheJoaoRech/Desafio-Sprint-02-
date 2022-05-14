'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Users extends Model {
    static associate(models) {
    }
  }

  Users.init({
    name: {
      type: DataTypes.STRING,
      validate: {
      len: {
        args: [7, 100],
        msg: "A minimum of seven characters in the username is required!"
      }
    }
    },
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};