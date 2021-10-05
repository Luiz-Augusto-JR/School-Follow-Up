'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('frequencias_alunos', {
      aluno_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "alunos",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      frequencia_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "frequencias",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      presente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('frequencias_alunos');
  }
};