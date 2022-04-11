'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('Posts', 'userMongoId', Sequelize.STRING)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Posts', 'userMongoId')
    /**
     * 
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
