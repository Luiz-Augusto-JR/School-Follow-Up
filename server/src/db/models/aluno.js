'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {    
    static associate(models) {
      this.belongsTo(models.Escola, { foreignKey: "id_escola" });
    }
  };
  Aluno.init({
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
      }
    }
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};