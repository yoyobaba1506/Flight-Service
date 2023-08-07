'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING,
        unique:true
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
    await queryInterface.dropTable('Cities');
  }
};


// await queryInterface.addConstraint('Airports',{
//   type:'FOREIGN KEY',
//   name:'city_fkey_constraint',
//   fields:['cityId'],
//   references:{
//     table:'Cities',
//     field:'id'
//   },
//   onUpdate:'CASCADE',
//   onDelete:'CASCADE'
// })