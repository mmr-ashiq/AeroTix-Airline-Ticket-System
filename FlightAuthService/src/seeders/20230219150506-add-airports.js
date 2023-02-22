'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'shahjalal international airport',
        address: 'dhaka',
        cityId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shah Amanat International Airport',
        address: 'Chittagong',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Osmani International Airport',
        address: 'Sylhet',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jessore Airport',
        address: 'Jessore',
        cityId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saidpur Airport',
        address: 'Saidpur',
        cityId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rajshahi Airport',
        address: 'Rajshahi',
        cityId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shah Mokhdum Airport',
        address: 'Rangpur',
        cityId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Barisal Airport',
        address: 'Barisal',
        cityId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cox's Bazar Airport",
        address: "Cox's Bazar",
        cityId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
