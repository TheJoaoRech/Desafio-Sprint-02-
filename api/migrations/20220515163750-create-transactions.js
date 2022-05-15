'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATEONLY
      },
      sendTo: {
        type: Sequelize.STRING
      },
      currentCotation: {
        type: Sequelize.FLOAT
      },
      quoteTo: {
        type: Sequelize.STRING
      },
      currentCoin: {
        type: Sequelize.STRING
      },
      receiverAdress: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};