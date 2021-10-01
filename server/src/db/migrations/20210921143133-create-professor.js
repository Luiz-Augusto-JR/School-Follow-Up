'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      materia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_escola :{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "escolas",
          key: "id"
    },
    onUpdate: "CASCADE",
        onDelete: "CASCADE"
  },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Professores');
  }
};