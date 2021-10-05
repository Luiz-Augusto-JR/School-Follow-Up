'use strict';
const {
  Model
} = require('sequelize');
const aluno = require('./aluno');
module.exports = (sequelize, DataTypes) => {
  class Frequencia extends Model {
    static associate(models) {
      this.belongsToMany(models.Aluno, { through: 'frequencias_alunos' });      
    }
  };
  Frequencia.init({
    data: {
      type: DataTypes.DATE,
      allowNull: false
    } 
    
  }, {
    sequelize,
    modelName: 'Frequencia',
  });
  return Frequencia;
};