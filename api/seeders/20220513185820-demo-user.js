'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        name: 'PEDRO BARBOSA SILVA',
        cpf: '81120136288',
        birthdate: '1983-04-03',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
  }
};
