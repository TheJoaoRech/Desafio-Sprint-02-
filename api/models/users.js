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

    cpf: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
          msg: "You must enter a valid cpf to register!"
        }
      }
      },

      birthdate: {
        type: DataTypes.DATEONLY,
        validate: {
        isBefore: {
        args: "2004-14-05",
        msg: "You must be over eighteen years of age to register!"
      }
    }
  }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};